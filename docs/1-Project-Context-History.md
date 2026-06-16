# Project Context & Historical Discussion Archive
**Project Name:** PromptEnhance
**Objective:** Build a tool that enhances developer prompts to maximize AI output quality while minimizing token costs.

## Phase 1: The Origin
The project started from a personal audit of prompt engineering styles. We realized that "Conversational Prompting" wastes input tokens, while poor formatting wastes output tokens. We adopted the **R.T.F. Framework (Role, Task, Format)** as the gold standard.

## Phase 2: The Core Problem & Solution
Developing inside AI-assisted IDEs is getting expensive because developers use expensive models for simple tasks and write messy prompts. "PromptEnhance" solves this by acting as a pre-processor.
*   **Example Problem:** A user typing *"Could you please help me fix the spelling mistake here? Thanks!"* (Wastes tokens, uses expensive AI).
*   **Example Solution:** PromptEnhance intercepts it, rewrites it to *"Task: Fix spelling error. Output only corrected text,"* and tells the user to switch to a cheaper AI model.

## Phase 3: Current Constraints & Workarounds
- **Context Degradation:** We will park the "Sliding Window Limit" for Phase 2, focusing first on the MVP.