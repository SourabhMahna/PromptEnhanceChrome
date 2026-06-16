# AI Coding Rules & Constraints
1. **Output Format:** Output ONLY code blocks. Do NOT explain the code unless asked.
2. **Tech Stack:** 
   - Chrome Extension: STRICTLY Vanilla JS (ES6+), HTML, CSS. NO React/Vue. Manifest V3.
3. **Security:** Never use `innerHTML` or `eval()`. Use `textContent`.
4. **Testing:** All core logic files require a `.test.js` file using Jest. Cover the Sunny/Rainy day examples mentioned in the blueprint.

---

# MASTER EXECUTION PROMPTS
*(User: Copy and paste the prompt below when you are ready to generate code).*

## Prompt: For the Chrome Extension
**Role:** Lead Chrome Extension Developer.
**Task:** Generate the Chrome Extension MVP based on the `2-Feature-Blueprint.md` document.
**Requirements:**
1. `content.js`: Inject the "✨" button into <textarea> elements and build the floating popup UI. Use the examples from the blueprint.
2. `background.js`: Implement the Phased Calibration tracking (Levels 1, 2, 3) and the Intent Classifier regex logic to suggest models based on the keywords in the blueprint examples.
**Constraint:** Output `manifest.json`, `content.js`, `background.js`, and `styles.css`. Output ONLY code blocks.