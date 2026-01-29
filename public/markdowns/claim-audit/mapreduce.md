# Reducing Insurance Fraud with LLM-Assisted Claim Audits

I recently spent a few months working on a project for an insurance provider that was drowning in manual claim reviews. They had a team of auditors who spent nearly eight hours a day cross-referencing medical bills against policy PDF files. It was an incredibly slow, error-prone process. A single audit could take forty minutes of intense reading.

We decided to build an AI assistant that could act as a first-pass "filter" for these auditors. The goal wasn't to replace the humans but to point them exactly where the discrepancies were hidden.

## The Problem: The Hidden Complexity of Policies

Insurance policies are dense. A single patient might have a primary and secondary insurance plan, each with different deductibles, out-of-pocket maximums, and coverage exclusions. When a bill comes in, you have to verify if the "Coded Procedure" on the bill matches the "Covered Services" list in the policy for that specific year.

I realized early on that a simple keyword search wasn't going to work. For example, a policy might cover "Diagnostic Imaging" but exclude "Experimental MRI Sequences." A keyword search for "MRI" would flag both as covered, leading to a false positive. We needed real semantic understanding.

![Claim Audit Dashboard](claim_ui.png)

## Overcoming the OCR Challenge

The biggest technical hurdle wasn't the LLM itself—it was the **Input Data Quality**. Traditional insurance bills are often scanned PDFs with stamps, handwritten notes, and poor alignment. Using standard OCR (Optical Character Recognition) often turned a table into a garbled mess of characters.

To solve this, I implemented a **Layout-Aware PDF Parser**. Instead of just extracting text, we extracted the structural blocks. We used a Vision-Language Model to identify table boundaries first, then ran high-resolution OCR on only those table cells. This increased our data extraction accuracy from 72% to nearly 96%.

## Reasoning with Policy Constraints

Once we had clean data, the LLM had to perform a logical "Join" between the bill and the policy. I used a method called **Chain-of-Verification (CoVe)**. 

1. **Step 1:** The LLM extracts all billed items.
2. **Step 2:** For each item, it searches the policy for a corresponding coverage rule.
3. **Step 3:** It generates an "Initial Audit Finding."
4. **Step 4 (Verification):** It is then asked to "Check your finding for contradictions." For example, if it says a service is covered, it must cite the exact page and section of the policy.

```python
# A snippet of the auditing logic using a Multi-Document Retriever
def run_claim_audit(medical_bill_data, policy_vector_store):
    # We first retrieve the relevant policy sections for each billed item
    findings = []
    
    for item in medical_bill_data['items']:
        # Semantic search in the policy for this specific procedure
        policy_context = policy_vector_store.similarity_search(item['description'], k=3)
        
        audit_prompt = f"""
        Does this Policy cover the following Item?
        Policy Context: {policy_context}
        Billed Item: {item}
        
        Return a JSON with: 
        1. "decision": "Covered", "Partially Covered", or "Denied"
        2. "reasoning": "A short legal explanation citing the policy clause"
        3. "confidence": A score from 0-1
        """
        
        result = auditor_llm.invoke(audit_prompt)
        findings.append(result)
        
    return findings
```

## The Real-World Impact

The result was a total shift in how the audit team worked. Instead of "Reading for Discovery," they transitioned to "Reviewing for Verification." 

- **Efficiency:** The average time per audit dropped from forty minutes to under twelve minutes. 
- **Cost Savings:** In the first month, the system flagged nearly $140,000 in duplicate billing and incorrect coding that would likely have been passed through in a manual review.
- **Accuracy:** The auditors found that the AI reached the correct conclusion in 94% of cases. For the remaining 6%, the AI still provided the relevant policy snippets, making the human's job of correcting it much faster.

This project taught me that the hardest part of AI engineering isn't the model. It is the data plumbing and the user interface. By building a tool that emphasized **Auditable AI**, we turned a skeptical team into power users.
