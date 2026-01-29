# Stopping the Lies: How I Built a Self-Correcting AI Agent

Hallucinations are the "silent killer" of AI applications. You build an agent, it works perfectly in five tests, and then on the sixth test, it confidently tells you that the current President of the United States is someone from the 1800s. 

During a recent project where I was building an automated legal researcher, I encountered this exact problem. The agent would correctly find a case but then "invent" a specific sub-clause that didn't exist in the actual document. Here is how I solved it using a **Self-Correction Loop**.

## The Architecture of Skepticism

The biggest mistake developers make is trusting the first output of an LLM. In my system, I implemented a two-agent setup: the **Executor** and the **Critic**.

![Agent Reflection Workflow](reflection.png)

The Executor generates the initial answer based on retrieved documents. However, before that answer ever reaches the user, it is intercepted by the Critic. The Critic has a very specific instruction: "Find three reasons why this answer might be wrong based solely on the provided text."

## Implementing the Reflection Pattern

This isn't just a simple second prompt. It is a stateful loop. I used a custom graph-based orchestration to manage this. If the Critic finds a discrepancy, it sends the feedback back to the Executor, who then must rewrite the response while addressing those specific critiques.

Here is a simplified look at the core logic:

```python
from typing import TypedDict, List

class AgentState(TypedDict):
    query: str
    documents: List[str]
    current_answer: str
    critique: str
    revision_count: int

def critic_node(state: AgentState):
    # This prompt forces the model to be hyper-critical
    prompt = f"""
    Compare the Answer against the Documents. 
    State ONLY the facts that are mentioned in the Answer but MISSING from the Documents.
    Answer: {state['current_answer']}
    Documents: {state['documents']}
    """
    hallucinations = llm.invoke(prompt)
    return {"critique": hallucinations}

def control_flow(state: AgentState):
    # If the critic found nothing, we are done. 
    # Otherwise, we loop back to re-generate up to 3 times.
    if len(state['critique']) < 10 or state['revision_count'] >= 3:
        return "END"
    return "CONTINUE"
```

## Why this works so well

By forcing the model to argue against itself, you break the high-probability token prediction that leads to "plausible-sounding" lies. In my legal research project, this reduced factual errors by over 40%. 

The lesson here is simple. If you want a reliable agent, you have to build in a layer of doubt. Trusting an LLM on its first try is like trusting a student who hasn't proofread their essay once. 
