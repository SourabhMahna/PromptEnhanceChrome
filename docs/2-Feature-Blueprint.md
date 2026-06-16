# PromptEnhance: Feature Specification Blueprint

## 1. Core Engine: Token-Trim & R.T.F. Structuring
Takes raw user text, strips conversational fluff, and restructures it into `Role`, `Task`, `Format`.
**EXAMPLE (Input vs. Output):**
- **Raw User Input:** *"Hi there! I was wondering if you could please look at this python code and tell me why the login function isn't working? Thanks so much!"*
- **Enhanced AI Output:** 
  `Role: Senior Python Developer.`
  `Task: Debug the login function in the provided code.`
  `Constraint: Output only the corrected code block.`

## 2. Smart AI Model Recommender (Intent Classification)
Scans the raw prompt for keywords and categorizes the task to recommend the cheapest/best model.
**EXAMPLES:**
- **Scenario A (Heavy Logic):** User types *"Refactor this entire React component to use custom hooks."* 
  - *Recommendation:* Claude 3.5 Sonnet / GPT-4o.
- **Scenario B (Basic Logic):** User types *"Fix the typo in the header title."*
  - *Recommendation:* GPT-4o-mini / Llama 3.

## 3. UI/UX: Chrome Extension
Injects a "✨" button inside web `<textarea>` elements.
**EXAMPLE POPUP UI:**
- `Enhanced Prompt:` [Text box with the R.T.F formatted text]
- `Badge:` 💡 Recommended Model: GPT-4o-mini
- `Button:` [Replace Text]
- `Button:` [↻ Refresh Variation]

## 4. Phased Calibration (Training Module)
Tracks usage via `localStorage`.
**EXAMPLES OF PHASES:**
- **Level 1 (Prompts 1-10):** User clicks ✨. UI shows 3 variations. User *must* click one to teach the system.
- **Level 2 (Prompts 11-30):** User clicks ✨. UI instantly replaces text with their learned preference. Interrupts every 5th prompt to recalibrate.
- **Level 3 (Prompts 31+):** Silent optimization. Only interrupts on the 10th prompt.

## 5. QA Automation (Jest Testing)
**EXAMPLE TEST CASES:**
- **Sunny Day:** Highlighting valid text -> triggers extension -> text is replaced with RTF format -> notification appears.
- **Rainy Day:** User triggers extension with an empty selection -> Extension catches error -> Shows notification: "⚠️ Please highlight text to enhance."