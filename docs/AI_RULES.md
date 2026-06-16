# AI Development Rules

Before modifying code:

1. Read:
   - docs/1-Project-Context-History.md
   - docs/2-Feature-Blueprint.md
   - docs/3-AI-Rules-and-Prompts.md
   - docs/4-Test-Data-and-Examples.md

2. Understand existing architecture.

3. Do not rewrite files unnecessarily.

4. Modify minimum required files.

5. Maintain existing coding style.

6. After changes:
   - explain files changed
   - explain reason
   - mention possible impact

Project Type:
Chrome Extension

Architecture:
- background.js = service worker
- content.js = webpage interaction
- popup.js = UI