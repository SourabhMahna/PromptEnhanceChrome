# PromptEnhance: Test Data & Mock Examples
**Purpose:** Use these exact input/output pairs to build the core logic, train the mock API, and write Jest unit tests.

## Test Suite 1: Core Engine (R.T.F. Transformation)
### Example A: Heavy Coding Task (Sunny Day)
**Raw Input:** `"Hey AI, can you please look at this messy python script and refactor it so it uses classes instead of just functions? I would really appreciate it, thanks!"`
**Expected Enhanced Output:** 
> **Role:** Senior Python Developer.
> **Task:** Refactor the provided Python script to use Object-Oriented Programming (Classes).
> **Constraints:** Output only the refactored code. Do not explain.

## Test Suite 2: Intent Classification (Model Recommender)
### Test A: High-Logic / Coding Keywords
- **Keywords Triggered:** `refactor`, `debug`, `react`, `architecture`, `optimize`.
- **Expected Suggested Model:** `Claude 3.5 Sonnet` (or `GPT-4o`).

### Test B: Low-Logic / Basic Keywords
- **Keywords Triggered:** `typo`, `summarize`, `format`, `comments`, `translate`.
- **Expected Suggested Model:** `GPT-4o-mini` (or `Llama 3`).

## Test Suite 3: Rainy Day & Edge Cases
### Edge Case A: Empty Input
**Raw Input:** `""` (Empty string) or `"     "` (Only spaces).
**Expected Behavior:** Disable the ✨ button or show a subtle tooltip: "⚠️ Type something first."

## Test Suite 4: Phased Calibration (The 3 Variations)
**Raw Input:** `"Write a bash script to delete old docker containers"`
**Variation 1 (Bullet style):** 
`- Role: DevOps`
`- Task: Write bash script to delete old Docker containers.`
**Variation 2 (Markdown style):** 
`**Task:** Bash script to prune old Docker containers.`
**Variation 3 (Strict RTF style):** 
`Role: DevOps Engineer.`
`Task: Create bash script to delete unused Docker containers.`
`Constraint: Executable code only.`