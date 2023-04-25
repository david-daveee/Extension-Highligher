//option1 popup js
document.getElementById('option1').addEventListener('change', function() {
    chrome.storage.sync.set({ option1Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption1', option1Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option1Enabled'], function(result) {
    document.getElementById('option1').checked = result.option1Enabled || false;
  });

  //option2 popup js
document.getElementById('option2').addEventListener('change', function() {
    chrome.storage.sync.set({ option2Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption2', option2Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option2Enabled'], function(result) {
    document.getElementById('option2').checked = result.option2Enabled || false;
  });

  //option3 popup js
document.getElementById('option3').addEventListener('change', function() {
    chrome.storage.sync.set({ option3Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption3', option3Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option3Enabled'], function(result) {
    document.getElementById('option3').checked = result.option3Enabled || false;
  });

  //option4 popup js
document.getElementById('option4').addEventListener('change', function() {
    chrome.storage.sync.set({ option4Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption4', option4Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option4Enabled'], function(result) {
    document.getElementById('option4').checked = result.option4Enabled || false;
  });

  //option5 popup js
document.getElementById('option5').addEventListener('change', function() {
    chrome.storage.sync.set({ option5Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption5', option5Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option5Enabled'], function(result) {
    document.getElementById('option5').checked = result.option5Enabled || false;
  });

  //option6 popup js
document.getElementById('option6').addEventListener('change', function() {
    chrome.storage.sync.set({ option6Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption6', option6Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option6Enabled'], function(result) {
    document.getElementById('option6').checked = result.option6Enabled || false;
  });

  //option7 popup js
document.getElementById('option7').addEventListener('change', function() {
    chrome.storage.sync.set({ option7Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption7', option7Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option7Enabled'], function(result) {
    document.getElementById('option7').checked = result.option7Enabled || false;
  });

  //option8 popup js
document.getElementById('option8').addEventListener('change', function() {
    chrome.storage.sync.set({ option8Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption8', option8Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option8Enabled'], function(result) {
    document.getElementById('option8').checked = result.option8Enabled || false;
  });

  //option9 popup js
document.getElementById('option9').addEventListener('change', function() {
    chrome.storage.sync.set({ option9Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption9', option9Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option9Enabled'], function(result) {
    document.getElementById('option9').checked = result.option9Enabled || false;
  });

  //option10 popup js
document.getElementById('option10').addEventListener('change', function() {
    chrome.storage.sync.set({ option10Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption10', option10Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option10Enabled'], function(result) {
    document.getElementById('option10').checked = result.option10Enabled || false;
  });

  //option11 popup js
document.getElementById('option11').addEventListener('change', function() {
    chrome.storage.sync.set({ option11Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption11', option11Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option11Enabled'], function(result) {
    document.getElementById('option11').checked = result.option11Enabled || false;
  });

  //option12 popup js
document.getElementById('option12').addEventListener('change', function() {
    chrome.storage.sync.set({ option12Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption12', option12Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option12Enabled'], function(result) {
    document.getElementById('option12').checked = result.option12Enabled || false;
  });

  //option13 popup js
document.getElementById('option13').addEventListener('change', function() {
    chrome.storage.sync.set({ option13Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption13', option13Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option13Enabled'], function(result) {
    document.getElementById('option13').checked = result.option13Enabled || false;
  });

  //option14 popup js
document.getElementById('option14').addEventListener('change', function() {
    chrome.storage.sync.set({ option14Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption14', option14Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option14Enabled'], function(result) {
    document.getElementById('option14').checked = result.option14Enabled || false;
  });

  //option15 popup js
document.getElementById('option15').addEventListener('change', function() {
    chrome.storage.sync.set({ option15Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption15', option15Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option15Enabled'], function(result) {
    document.getElementById('option15').checked = result.option15Enabled || false;
  });

  //option16 popup js
document.getElementById('option16').addEventListener('change', function() {
    chrome.storage.sync.set({ option16Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption16', option16Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option16Enabled'], function(result) {
    document.getElementById('option16').checked = result.option16Enabled || false;
  });

  //option17 popup js
document.getElementById('option17').addEventListener('change', function() {
    chrome.storage.sync.set({ option17Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption17', option17Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option17Enabled'], function(result) {
    document.getElementById('option17').checked = result.option17Enabled || false;
  });

  //option18 popup js
document.getElementById('option18').addEventListener('change', function() {
    chrome.storage.sync.set({ option18Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption18', option18Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option18Enabled'], function(result) {
    document.getElementById('option18').checked = result.option18Enabled || false;
  });

  //option19 popup js
document.getElementById('option19').addEventListener('change', function() {
    chrome.storage.sync.set({ option19Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption19', option19Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option19Enabled'], function(result) {
    document.getElementById('option19').checked = result.option19Enabled || false;
  });

  //option20 popup js
document.getElementById('option20').addEventListener('change', function() {
    chrome.storage.sync.set({ option20Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption20', option20Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option20Enabled'], function(result) {
    document.getElementById('option20').checked = result.option20Enabled || false;
  });

  //option21 popup js
document.getElementById('option21').addEventListener('change', function() {
    chrome.storage.sync.set({ option21Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption21', option21Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option21Enabled'], function(result) {
    document.getElementById('option21').checked = result.option21Enabled || false;
  });

  //option22 popup js
document.getElementById('option22').addEventListener('change', function() {
    chrome.storage.sync.set({ option22Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption22', option22Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option22Enabled'], function(result) {
    document.getElementById('option22').checked = result.option22Enabled || false;
  });

  //option23 popup js
document.getElementById('option23').addEventListener('change', function() {
    chrome.storage.sync.set({ option23Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption23', option23Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option23Enabled'], function(result) {
    document.getElementById('option23').checked = result.option23Enabled || false;
  });

  //option24 popup js
document.getElementById('option24').addEventListener('change', function() {
    chrome.storage.sync.set({ option24Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption24', option24Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option24Enabled'], function(result) {
    document.getElementById('option24').checked = result.option24Enabled || false;
  });

  //option25 popup js
document.getElementById('option25').addEventListener('change', function() {
    chrome.storage.sync.set({ option25Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption25', option25Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option25Enabled'], function(result) {
    document.getElementById('option25').checked = result.option25Enabled || false;
  });

  //option26 popup js
document.getElementById('option26').addEventListener('change', function() {
    chrome.storage.sync.set({ option26Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption26', option26Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option26Enabled'], function(result) {
    document.getElementById('option26').checked = result.option26Enabled || false;
  });

  //option27 popup js
document.getElementById('option27').addEventListener('change', function() {
    chrome.storage.sync.set({ option27Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption27', option27Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option27Enabled'], function(result) {
    document.getElementById('option27').checked = result.option27Enabled || false;
  })

  //option28 popup js
document.getElementById('option28').addEventListener('change', function() {
    chrome.storage.sync.set({ option28Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption28', option28Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option28Enabled'], function(result) {
    document.getElementById('option28').checked = result.option28Enabled || false;
  });

//option29 popup js
document.getElementById('option29').addEventListener('change', function() {
    chrome.storage.sync.set({ option29Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption29', option29Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option29Enabled'], function(result) {
    document.getElementById('option29').checked = result.option29Enabled || false;
  });

//option30 popup js
document.getElementById('option30').addEventListener('change', function() {
    chrome.storage.sync.set({ option30Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption30', option30Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option30Enabled'], function(result) {
    document.getElementById('option30').checked = result.option30Enabled || false;
  });

//option31 popup js
document.getElementById('option31').addEventListener('change', function() {
    chrome.storage.sync.set({ option31Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption31', option31Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option31Enabled'], function(result) {
    document.getElementById('option31').checked = result.option31Enabled || false;
  });

//option32 popup js
document.getElementById('option32').addEventListener('change', function() {
    chrome.storage.sync.set({ option32Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption32', option32Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option32Enabled'], function(result) {
    document.getElementById('option32').checked = result.option32Enabled || false;
  });

//option33 popup js
document.getElementById('option33').addEventListener('change', function() {
    chrome.storage.sync.set({ option33Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption33', option33Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option33Enabled'], function(result) {
    document.getElementById('option33').checked = result.option33Enabled || false;
  });

//option34 popup js
document.getElementById('option34').addEventListener('change', function() {
    chrome.storage.sync.set({ option34Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption34', option34Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option34Enabled'], function(result) {
    document.getElementById('option34').checked = result.option34Enabled || false;
  });

//option35 popup js
document.getElementById('option35').addEventListener('change', function() {
    chrome.storage.sync.set({ option35Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption35', option35Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option35Enabled'], function(result) {
    document.getElementById('option35').checked = result.option35Enabled || false;
  });

//option36 popup js
document.getElementById('option36').addEventListener('change', function() {
    chrome.storage.sync.set({ option36Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption36', option36Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option36Enabled'], function(result) {
    document.getElementById('option36').checked = result.option36Enabled || false;
  });

//option37 popup js
document.getElementById('option37').addEventListener('change', function() {
    chrome.storage.sync.set({ option37Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption37', option37Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option37Enabled'], function(result) {
    document.getElementById('option37').checked = result.option37Enabled || false;
  });

//option38 popup js
document.getElementById('option38').addEventListener('change', function() {
    chrome.storage.sync.set({ option38Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption38', option38Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option38Enabled'], function(result) {
    document.getElementById('option38').checked = result.option38Enabled || false;
  });

//option39 popup js
document.getElementById('option39').addEventListener('change', function() {
    chrome.storage.sync.set({ option39Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption39', option39Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option39Enabled'], function(result) {
    document.getElementById('option39').checked = result.option39Enabled || false;
  });

//option40 popup js
document.getElementById('option40').addEventListener('change', function() {
    chrome.storage.sync.set({ option40Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption40', option40Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option40Enabled'], function(result) {
    document.getElementById('option40').checked = result.option40Enabled || false;
  });

//option41 popup js
document.getElementById('option41').addEventListener('change', function() {
    chrome.storage.sync.set({ option41Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption41', option41Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option41Enabled'], function(result) {
    document.getElementById('option41').checked = result.option41Enabled || false;
  });

//option42 popup js
document.getElementById('option42').addEventListener('change', function() {
    chrome.storage.sync.set({ option42Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption42', option42Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option42Enabled'], function(result) {
    document.getElementById('option42').checked = result.option42Enabled || false;
  });

//option43 popup js
document.getElementById('option43').addEventListener('change', function() {
    chrome.storage.sync.set({ option43Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption43', option43Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option43Enabled'], function(result) {
    document.getElementById('option43').checked = result.option43Enabled || false;
  });

  //option44 popup js
document.getElementById('option44').addEventListener('change', function() {
    chrome.storage.sync.set({ option44Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption44', option44Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option44Enabled'], function(result) {
    document.getElementById('option44').checked = result.option44Enabled || false;
  });


//option45 popup js
document.getElementById('option45').addEventListener('change', function() {
    chrome.storage.sync.set({ option45Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption45', option45Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option45Enabled'], function(result) {
    document.getElementById('option45').checked = result.option45Enabled || false;
  });

//option46 popup js
document.getElementById('option46').addEventListener('change', function() {
    chrome.storage.sync.set({ option46Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption46', option46Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option46Enabled'], function(result) {
    document.getElementById('option46').checked = result.option46Enabled || false;
  });

  //option47 popup js
document.getElementById('option47').addEventListener('change', function() {
    chrome.storage.sync.set({ option47Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption47', option47Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option47Enabled'], function(result) {
    document.getElementById('option47').checked = result.option47Enabled || false;
  });

  //option48 popup js
document.getElementById('option48').addEventListener('change', function() {
    chrome.storage.sync.set({ option48Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption48', option48Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option48Enabled'], function(result) {
    document.getElementById('option48').checked = result.option48Enabled || false;
  });

  //option49 popup js
document.getElementById('option49').addEventListener('change', function() {
    chrome.storage.sync.set({ option49Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption49', option49Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option49Enabled'], function(result) {
    document.getElementById('option49').checked = result.option49Enabled || false;
  });

  //option50 popup js
document.getElementById('option50').addEventListener('change', function() {
    chrome.storage.sync.set({ option50Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption50', option50Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option50Enabled'], function(result) {
    document.getElementById('option50').checked = result.option50Enabled || false;
  });

  //option51 popup js
document.getElementById('option51').addEventListener('change', function() {
    chrome.storage.sync.set({ option51Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption51', option51Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option51Enabled'], function(result) {
    document.getElementById('option51').checked = result.option51Enabled || false;
  });

  //option52 popup js
document.getElementById('option52').addEventListener('change', function() {
    chrome.storage.sync.set({ option52Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption52', option52Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option52Enabled'], function(result) {
    document.getElementById('option52').checked = result.option52Enabled || false;
  });

  //option53 popup js
document.getElementById('option53').addEventListener('change', function() {
    chrome.storage.sync.set({ option53Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption53', option53Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option53Enabled'], function(result) {
    document.getElementById('option53').checked = result.option53Enabled || false;
  })

  //option54 popup js
document.getElementById('option54').addEventListener('change', function() {
    chrome.storage.sync.set({ option54Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption54', option54Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option54Enabled'], function(result) {
    document.getElementById('option54').checked = result.option54Enabled || false;
  })

  //option55 popup js
document.getElementById('option55').addEventListener('change', function() {
    chrome.storage.sync.set({ option55Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption55', option55Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option55Enabled'], function(result) {
    document.getElementById('option55').checked = result.option55Enabled || false;
});
//option56 popup js
document.getElementById('option56').addEventListener('change', function() {
    chrome.storage.sync.set({ option56Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption56', option56Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option56Enabled'], function(result) {
    document.getElementById('option56').checked = result.option56Enabled || false;
  });

  //option57 popup js
document.getElementById('option57').addEventListener('change', function() {
    chrome.storage.sync.set({ option57Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption57', option57Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option57Enabled'], function(result) {
    document.getElementById('option57').checked = result.option57Enabled || false;
  });

  //option58 popup js
document.getElementById('option58').addEventListener('change', function() {
    chrome.storage.sync.set({ option58Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption58', option58Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option58Enabled'], function(result) {
    document.getElementById('option58').checked = result.option58Enabled || false;
  });

  //option59 popup js
document.getElementById('option59').addEventListener('change', function() {
    chrome.storage.sync.set({ option59Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption59', option59Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option59Enabled'], function(result) {
    document.getElementById('option59').checked = result.option59Enabled || false;
  });

  //option60 popup js
document.getElementById('option60').addEventListener('change', function() {
    chrome.storage.sync.set({ option60Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption60', option60Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option60Enabled'], function(result) {
    document.getElementById('option60').checked = result.option60Enabled || false;
  });

  //option61 popup js
document.getElementById('option61').addEventListener('change', function() {
    chrome.storage.sync.set({ option61Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption61', option61Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option61Enabled'], function(result) {
    document.getElementById('option61').checked = result.option61Enabled || false;
  });

//option62 popup js
document.getElementById('option62').addEventListener('change', function() {
    chrome.storage.sync.set({ option62Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption62', option62Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option62Enabled'], function(result) {
    document.getElementById('option62').checked = result.option62Enabled || false;
  });

//option63 popup js
document.getElementById('option63').addEventListener('change', function() {
    chrome.storage.sync.set({ option63Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption63', option63Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option63Enabled'], function(result) {
    document.getElementById('option63').checked = result.option63Enabled || false;
  });

//option64 popup js
document.getElementById('option64').addEventListener('change', function() {
    chrome.storage.sync.set({ option64Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption64', option64Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option64Enabled'], function(result) {
    document.getElementById('option64').checked = result.option64Enabled || false;
  });

//option65 popup js
document.getElementById('option65').addEventListener('change', function() {
    chrome.storage.sync.set({ option65Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption65', option65Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option65Enabled'], function(result) {
    document.getElementById('option65').checked = result.option65Enabled || false;
  });

//option66 popup js
document.getElementById('option66').addEventListener('change', function() {
    chrome.storage.sync.set({ option66Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption66', option66Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option66Enabled'], function(result) {
    document.getElementById('option66').checked = result.option66Enabled || false;
  });

//option67 popup js
document.getElementById('option67').addEventListener('change', function() {
    chrome.storage.sync.set({ option67Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption67', option67Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option67Enabled'], function(result) {
    document.getElementById('option67').checked = result.option67Enabled || false;
  });

  //option68 popup js
document.getElementById('option68').addEventListener('change', function() {
    chrome.storage.sync.set({ option68Enabled: this.checked }, function() {
      console.log('Option value saved:', this.checked);
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateOption68', option68Enabled: this.checked });
      }.bind(this));
    }.bind(this));
  });
  
  chrome.storage.sync.get(['option68Enabled'], function(result) {
    document.getElementById('option68').checked = result.option68Enabled || false;
  });