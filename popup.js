document.getElementById('option1').addEventListener('change', function() {
    chrome.storage.sync.set({ optionEnabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption1', optionEnabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['optionEnabled1'], function(result) {
    document.getElementById('option1').checked = result.optionEnabled || false;
  });

  document.getElementById('option2').addEventListener('change', function() {
    chrome.storage.sync.set({ optionEnabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption2', optionEnabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['optionEnabled2'], function(result) {
    document.getElementById('option2').checked = result.optionEnabled || false;
  });