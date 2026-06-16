chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    promptCount: 0,
    userPreferences: {},
    calibrationPhase: 'level1'
  });
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.promptCount) {
    const newCount = changes.promptCount.newValue;
    updateCalibrationPhase(newCount);
  }
});

function updateCalibrationPhase(count) {
  let phase = 'level1';
  if (count > 30) {
    phase = 'level3';
  } else if (count > 10) {
    phase = 'level2';
  }
  chrome.storage.local.set({ calibrationPhase: phase });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPhase') {
    chrome.storage.local.get('calibrationPhase', (data) => {
      sendResponse({ phase: data.calibrationPhase || 'level1' });
    });
    return true;
  }
  
  if (request.action === 'savePreference') {
    chrome.storage.local.get('userPreferences', (data) => {
      const prefs = data.userPreferences || {};
      prefs[request.model] = (prefs[request.model] || 0) + 1;
      chrome.storage.local.set({ userPreferences: prefs });
      sendResponse({ success: true });
    });
    return true;
  }
});
