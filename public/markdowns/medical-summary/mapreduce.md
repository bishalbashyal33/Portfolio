# Building a Medical Report Summary System for Faster Triage

During my research work, I had the opportunity to look into how doctors interact with electronic health records. One of the biggest complaints I heard was that patient histories are usually "too long to read" during a fifteen-minute appointment. A patient might have ten years of medical history spread across fifty different documents, many of which are redundant or contradictory.

I set out to build a system that could take these massive, messy reports and turn them into a structured "at-a-glance" summary for the physician, focusing specifically on **Risk Stratification** and **Longitudinal Trends**.

## Design for Trust: The Citation Engine

In medicine, you can't just provide a summary and ask a doctor to trust it. Hallucinations in healthcare aren't just annoying errors—they are safety risks. I realized that a summary without a "Proof of Context" is useless for a clinician.

I designed the interface with a **Bidirectional Citation Engine**. If the AI summary says the patient has "Chronic Kidney Disease Stage 3," that text is interactive. Clicking it highlights the exact sentence in the original 2018 lab report where the patient's GFR level was first recorded. This "grounding" mechanism allows the doctor to verify the AI's logic in seconds.

![Medical Summary System](med_ui.png)

## The Problem: Handling Latency with Large Histories

Patient histories can be massive. If you try to feed ten years of clinical notes into an LLM at once, you hit context window limits, and the cost per summary becomes prohibitively high. 

I solved this by implementing an **Incremental Summarization Pipeline**:

1. **Category Clustering:** First, we use a fast model (like Llama 3) to categorize documents into "Lab Results," "Clinical Notes," "Imaging," and "Surgery Reports."
2. **Local Summarization:** We generate a detailed summary for each cluster. For example, we summarize all 20 lab reports into a single table of "Longitudinal Trends" (e.g., "Creatinine levels have been rising steadily over 3 years").
3. **Global Synthesis:** A high-reasoning model (GPT-4o) then takes these sub-summaries and combines them into the final "Executive Summary" for the doctor.

## Technical Implementation: Structure via Pydantic

To ensure the summary was always in a format the UI could display consistently, I used **Pydantic for strict schema enforcement**.

```python
from pydantic import BaseModel, Field
from typing import List, Optional

class MedicalFinding(BaseModel):
    finding: str = Field(description="The medical observation")
    severity: str = Field(pattern="^(Low|Moderate|High|Critical)$")
    source_date: str = Field(description="Date found in the report")
    source_doc_id: str = Field(description="UUID of the original document")

class PatientLongitudinalSummary(BaseModel):
    chief_complaint: str
    active_diagnoses: List[MedicalFinding]
    medication_changes: List[str] = Field(description="Summaries of medication adjustments over time")
    recommended_next_steps: List[str]

def generate_patient_summary(categorized_notes):
    # The structured_output tool prevents the LLM from adding 
    # conversational filler like "Here is your summary..."
    summarizer = llm.with_structured_output(PatientLongitudinalSummary)
    return summarizer.invoke(categorized_notes)
```

## Handling Medical Nuance: The Entity Resolver

Medical reports aren't written in standard English. They are a mix of abbreviations, shorthand, and "negative findings" (e.g., "Patient denies any shortness of breath"). 

I had to implement a **Medical Entity Resolver** using a combination of traditional NLP (Spacy med7) and the LLM. The model was specifically tuned to distinguish between a "current condition" and a "denied symptom." This prevented common errors where the AI would list "Chest Pain" as an active issue when the report actually said "Patient has no history of chest pain."

## Conclusion: Human-Centric AI in Practice

The biggest lesson from this project wasn't about the model's parameters. It was about **Cognitive Load**. Doctors don't need "more information"; they need "better distilled information." 

By focusing on **Traceability**, **Incremental Processing**, and **Strict Structuring**, we built a tool that reduced the time doctors spent on pre-consultation review by over 50%. The success of AI in healthcare depends on its ability to act as a transparent assistant, not a black-box oracle.
