# PromptEnhance Chrome Extension

## 📋 Overview
PromptEnhance is a Chrome extension that automatically enhances your AI prompts using the **R.T.F. Framework (Role, Task, Format)** to maximize output quality while minimizing token costs.

## ✨ Features

### 1. **Core Engine: R.T.F. Transformation**
Converts messy conversational prompts into structured, optimized prompts.

**Before:**
```
Hey AI, can you please look at this messy python script and refactor it so it uses classes instead of just functions? I would really appreciate it, thanks!
```

**After:**
```
Role: Senior Python Developer.
Task: Refactor the provided Python script to use Object-Oriented Programming (Classes).
Constraint: Output only the refactored code. Do not explain.
```

### 2. **Smart AI Model Recommender**
Analyzes keywords in your prompt and recommends the most cost-effective AI model:
- **High-Logic Tasks** (refactor, debug, architecture, optimize) → Claude 3.5 Sonnet
- **Low-Logic Tasks** (typo, summarize, format, translate) → GPT-4o-mini

### 3. **Phased Calibration (Training Module)**
Learns your preferences over time:
- **Level 1 (Prompts 1-10):** Shows 3 variations, you pick your preferred style
- **Level 2 (Prompts 11-30):** Auto-replaces with your preference, recalibrates every 5th prompt
- **Level 3 (Prompts 31+):** Silent mode, only interrupts every 10th prompt

### 4. **One-Click Enhancement**
Simply click the ✨ button in any textarea to:
- Enhance your prompt instantly
- See the recommended model
- Replace text or refresh variations

## 🚀 Installation

1. **Clone or download** this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked**
5. Select the `PromptEnhanceChrome` folder
6. The extension will appear in your extensions list

## 📝 How to Use

1. Navigate to any website with textarea elements (GitHub, ChatGPT, Gmail, etc.)
2. Click in a textarea and you'll see the ✨ button appear
3. Type your prompt (e.g., "Can you fix this bug?")
4. Click ✨ to enhance
5. A popup will show your enhanced prompt and recommended model
6. Click **Replace Text** to update your textarea

## 🧪 Testing

### Sunny Day Test
1. Go to GitHub Issues or ChatGPT
2. Click in a textarea
3. Type: `"Hey AI, can you please refactor this python script to use classes?"`
4. Click ✨
5. Verify:
   - Popup appears with enhanced prompt
   - Model recommendation shows "Claude 3.5 Sonnet"
   - Click Replace Text works correctly

### Rainy Day Test
1. Click ✨ with empty textarea
2. Should see: `⚠️ Type something first.`

### Phased Calibration Test
1. Open DevTools (F12)
2. Go to Console
3. Run: `chrome.storage.local.get(null, console.log)`
4. Check `promptCount` increases with each enhancement
5. `calibrationPhase` changes: level1 → level2 (at 11) → level3 (at 31)

## 🔧 Technical Stack

- **Manifest V3** - Latest Chrome Extension standard
- **Vanilla JavaScript (ES6+)** - No frameworks, lightweight
- **Chrome Storage API** - Persistent preference tracking
- **CSS Animations** - Modern, smooth UI

## 📁 File Structure

```
PromptEnhanceChrome/
├── manifest.json       # Extension configuration
├── content.js          # Injects button & handles UI
├── background.js       # Tracks phased calibration
├── styles.css          # Modern gradient styling
└── README.md          # This file
```

## 💡 Examples

### Example 1: Heavy Coding Task
**Input:** "Refactor this React component to use custom hooks"
**Output:** 
```
Role: Senior Frontend Developer.
Task: Refactor the React component to use custom hooks.
Constraint: Output only the refactored code. Do not explain.
```
**Recommended:** Claude 3.5 Sonnet

### Example 2: Simple Task
**Input:** "Fix the typo in the header title"
**Output:**
```
Role: Software Engineer.
Task: Fix the typo in the header title.
Constraint: Output only the corrected code. Do not explain.
```
**Recommended:** GPT-4o-mini

## 🎯 Benefits

- ✅ **Save up to 90% on AI costs** - Use cheaper models for simple tasks
- ✅ **Better responses** - Structured prompts yield higher quality outputs
- ✅ **Faster workflow** - One-click enhancement instead of manual rewriting
- ✅ **Smart learning** - System adapts to your preferences over time
- ✅ **Zero setup** - Works on any website with textareas

## 📄 License

MIT License - Feel free to use and modify!

## 🤝 Contributing

Issues and pull requests welcome!

---

**Made with ✨ for developers who care about prompt quality and efficiency.**
