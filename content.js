(() => {
  const HIGH_LOGIC_KEYWORDS = [
    'refactor', 'debug', 'react', 'architecture', 'optimize', 
    'design', 'algorithm', 'performance', 'security', 'test',
    'deploy', 'integrate', 'scale', 'async', 'concurrency'
  ];

  const LOW_LOGIC_KEYWORDS = [
    'typo', 'summarize', 'format', 'comments', 'translate',
    'rename', 'simple', 'basic', 'clarify', 'reword'
  ];

  const RTF_TEMPLATES = {
    bullet: (role, task, constraint) => 
      `- Role: ${role}\n- Task: ${task}\n- Constraint: ${constraint}`,
    markdown: (role, task, constraint) => 
      `**Role:** ${role}\n**Task:** ${task}\n**Constraint:** ${constraint}`,
    strict: (role, task, constraint) => 
      `Role: ${role}.\nTask: ${task}.\nConstraint: ${constraint}.`
  };

  function inferRole(text) {
    if (text.match(/python|django|flask/i)) return 'Senior Python Developer';
    if (text.match(/react|vue|angular|typescript/i)) return 'Senior Frontend Developer';
    if (text.match(/bash|docker|kubernetes|devops|aws/i)) return 'DevOps Engineer';
    if (text.match(/sql|database|postgres|mysql/i)) return 'Database Administrator';
    return 'Software Engineer';
  }

  function extractTask(text) {
    const cleanText = text.replace(/^[^a-z0-9]*(hey|hi|please|could|can you|would you|thanks|thank you)[^a-z0-9]*/gi, '').trim();
    return cleanText.charAt(0).toUpperCase() + cleanText.slice(1);
  }

  function classifyIntent(text) {
    const lowerText = text.toLowerCase();
    const highLogicCount = HIGH_LOGIC_KEYWORDS.filter(kw => lowerText.includes(kw)).length;
    const lowLogicCount = LOW_LOGIC_KEYWORDS.filter(kw => lowerText.includes(kw)).length;
    
    if (highLogicCount > lowLogicCount) {
      return { level: 'high', model: 'Claude 3.5 Sonnet' };
    }
    return { level: 'low', model: 'GPT-4o-mini' };
  }

  function enhancePrompt(text) {
    if (!text.trim()) {
      return null;
    }

    const role = inferRole(text);
    const task = extractTask(text);
    const constraint = 'Output only the code. Do not explain.';
    
    return RTF_TEMPLATES.strict(role, task, constraint);
  }

  function injectButton() {
    document.querySelectorAll('textarea').forEach(textarea => {
      if (textarea.closest('.pe-injected')) return;
      
      const container = document.createElement('div');
      container.className = 'pe-injected pe-button-container';
      
      const btn = document.createElement('button');
      btn.className = 'pe-enhance-btn';
      btn.textContent = '✨';
      btn.setAttribute('title', 'Enhance your prompt');
      
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const text = textarea.value;
        if (!text.trim()) {
          showNotification('⚠️ Type something first.', 'warning');
          return;
        }
        
        const enhanced = enhancePrompt(text);
        if (!enhanced) {
          showNotification('⚠️ Please provide valid text to enhance.', 'warning');
          return;
        }
        
        const intent = classifyIntent(text);
        chrome.storage.local.get('promptCount', (data) => {
          const count = (data.promptCount || 0) + 1;
          chrome.storage.local.set({ promptCount: count });
          
          showPopup(textarea, enhanced, intent, count);
        });
      });
      
      container.appendChild(btn);
      textarea.parentNode.insertBefore(container, textarea.nextSibling);
    });
  }

  function showPopup(textarea, enhanced, intent, promptCount) {
    const existing = document.querySelector('.pe-popup');
    if (existing) existing.remove();
    
    const popup = document.createElement('div');
    popup.className = 'pe-popup';
    
    const phase = promptCount <= 10 ? 'level1' : promptCount <= 30 ? 'level2' : 'level3';
    const shouldShowVariations = phase === 'level1' || (phase === 'level2' && promptCount % 5 === 0);
    
    const headerDiv = document.createElement('div');
    headerDiv.className = 'pe-popup-header';
    headerDiv.textContent = 'PromptEnhance';
    
    const enhancedDiv = document.createElement('div');
    enhancedDiv.className = 'pe-popup-section';
    const enhancedLabel = document.createElement('label');
    enhancedLabel.textContent = 'Enhanced Prompt:';
    const enhancedText = document.createElement('textarea');
    enhancedText.className = 'pe-popup-textarea';
    enhancedText.value = enhanced;
    enhancedText.readOnly = true;
    enhancedDiv.appendChild(enhancedLabel);
    enhancedDiv.appendChild(enhancedText);
    
    const badgeDiv = document.createElement('div');
    badgeDiv.className = 'pe-popup-badge';
    badgeDiv.innerHTML = `💡 Recommended: <strong>${intent.model}</strong>`;
    
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'pe-popup-buttons';
    
    const replaceBtn = document.createElement('button');
    replaceBtn.className = 'pe-btn-primary';
    replaceBtn.textContent = 'Replace Text';
    replaceBtn.addEventListener('click', () => {
      textarea.value = enhanced;
      showNotification('✅ Prompt enhanced!', 'success');
      popup.remove();
    });
    
    const refreshBtn = document.createElement('button');
    refreshBtn.className = 'pe-btn-secondary';
    refreshBtn.textContent = '↻ Refresh Variation';
    refreshBtn.addEventListener('click', () => {
      const newEnhanced = enhancePrompt(textarea.value);
      enhancedText.value = newEnhanced;
    });
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'pe-btn-secondary';
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', () => popup.remove());
    
    buttonGroup.appendChild(replaceBtn);
    buttonGroup.appendChild(refreshBtn);
    buttonGroup.appendChild(closeBtn);
    
    popup.appendChild(headerDiv);
    popup.appendChild(enhancedDiv);
    popup.appendChild(badgeDiv);
    if (shouldShowVariations) {
      const varLabel = document.createElement('div');
      varLabel.className = 'pe-popup-variation-label';
      varLabel.textContent = `Training Phase ${phase === 'level1' ? '1' : phase === 'level2' ? '2' : '3'}: Select your preferred variation`;
      popup.appendChild(varLabel);
    }
    popup.appendChild(buttonGroup);
    
    document.body.appendChild(popup);
  }

  function showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.className = `pe-notification pe-notification-${type}`;
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.remove(), 3000);
  }

  injectButton();
  
  const observer = new MutationObserver(injectButton);
  observer.observe(document.body, { childList: true, subtree: true });
})();
