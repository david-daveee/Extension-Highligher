window.addEventListener('click', function() {
    'use strict';
    var course_1 = 2;
    var course_2 = 8;
    var course_3 = 16;
    var course_4 = 29;
    var course_5 = 31;
    var course_6 = 30;
    setTimeout(() => {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
        //p[course_1].style.backgroundColor = "#80ff80";
        //p[course_2].style.backgroundColor = "#80ff80";
        //p[course_3].style.backgroundColor = "#80ff80";
        //p[course_4].style.backgroundColor = "#80ff80";
        //p[course_5].style.backgroundColor = "#80ff80";
        //p[course_6].style.backgroundColor = "#80ff80";

 }, 1000);
    
}


);



window.addEventListener('click', function(){
  setTimeout(() => {
  
//option1 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption1') {
    updateContent1(request.option1Enabled);
  }
});

chrome.storage.sync.get(['option1Enabled'], function(result) {
  updateContent1(result.option1Enabled || false);
});

function updateContent1(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[2].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option2 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption2') {
    updateContent2(request.option2Enabled);
  }
});

chrome.storage.sync.get(['option2Enabled'], function(result) {
  updateContent2(result.option2Enabled || false);
});

function updateContent2(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[3].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option3 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption3') {
    updateContent3(request.option3Enabled);
  }
});

chrome.storage.sync.get(['option3Enabled'], function(result) {
  updateContent3(result.option3Enabled || false);
});

function updateContent3(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[4].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option4 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption4') {
    updateContent4(request.option4Enabled);
  }
});

chrome.storage.sync.get(['option4Enabled'], function(result) {
  updateContent4(result.option4Enabled || false);
});

function updateContent4(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[5].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option5 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption5') {
    updateContent5(request.option5Enabled);
  }
});

chrome.storage.sync.get(['option5Enabled'], function(result) {
  updateContent5(result.option5Enabled || false);
});

function updateContent5(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[6].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option6 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption6') {
    updateContent6(request.option6Enabled);
  }
});

chrome.storage.sync.get(['option6Enabled'], function(result) {
  updateContent6(result.option6Enabled || false);
});

function updateContent6(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[7].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option7 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption7') {
    updateContent7(request.option7Enabled);
  }
});

chrome.storage.sync.get(['option7Enabled'], function(result) {
  updateContent7(result.option7Enabled || false);
});

function updateContent7(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[8].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option8 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption8') {
    updateContent8(request.option8Enabled);
  }
});

chrome.storage.sync.get(['option8Enabled'], function(result) {
  updateContent8(result.option8Enabled || false);
});

function updateContent8(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[9].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option9 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption9') {
    updateContent9(request.option9Enabled);
  }
});

chrome.storage.sync.get(['option9Enabled'], function(result) {
  updateContent9(result.option9Enabled || false);
});

function updateContent9(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[10].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option10 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption10') {
    updateContent10(request.option10Enabled);
  }
});

chrome.storage.sync.get(['option10Enabled'], function(result) {
  updateContent10(result.option10Enabled || false);
});

function updateContent10(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[11].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option11 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption11') {
    updateContent11(request.option11Enabled);
  }
});

chrome.storage.sync.get(['option11Enabled'], function(result) {
  updateContent11(result.option11Enabled || false);
});

function updateContent11(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[12].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option12 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption12') {
    updateContent12(request.option12Enabled);
  }
});

chrome.storage.sync.get(['option12Enabled'], function(result) {
  updateContent12(result.option12Enabled || false);
});

function updateContent12(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[13].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option13 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption13') {
    updateContent13(request.option13Enabled);
  }
});

chrome.storage.sync.get(['option13Enabled'], function(result) {
  updateContent13(result.option13Enabled || false);
});

function updateContent13(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[14].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option14 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption14') {
    updateContent14(request.option14Enabled);
  }
});

chrome.storage.sync.get(['option14Enabled'], function(result) {
  updateContent14(result.option14Enabled || false);
});

function updateContent14(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[15].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option15 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption15') {
    updateContent15(request.option15Enabled);
  }
});

chrome.storage.sync.get(['option15Enabled'], function(result) {
  updateContent15(result.option15Enabled || false);
});

function updateContent15(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[16].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option16 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption16') {
    updateContent16(request.option16Enabled);
  }
});

chrome.storage.sync.get(['option16Enabled'], function(result) {
  updateContent16(result.option16Enabled || false);
});

function updateContent16(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[17].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option17 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption17') {
    updateContent17(request.option17Enabled);
  }
});

chrome.storage.sync.get(['option17Enabled'], function(result) {
  updateContent17(result.option17Enabled || false);
});

function updateContent17(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[18].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option18 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption18') {
    updateContent18(request.option18Enabled);
  }
});

chrome.storage.sync.get(['option18Enabled'], function(result) {
  updateContent18(result.option18Enabled || false);
});

function updateContent18(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[19].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option19 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption19') {
    updateContent19(request.option19Enabled);
  }
});

chrome.storage.sync.get(['option19Enabled'], function(result) {
  updateContent19(result.option19Enabled || false);
});

function updateContent19(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[20].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option20 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption20') {
    updateContent20(request.option20Enabled);
  }
});

chrome.storage.sync.get(['option20Enabled'], function(result) {
  updateContent20(result.option20Enabled || false);
});

function updateContent20(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[21].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option21 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption21') {
    updateContent21(request.option21Enabled);
  }
});

chrome.storage.sync.get(['option21Enabled'], function(result) {
  updateContent21(result.option21Enabled || false);
});

function updateContent21(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[22].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option22 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption22') {
    updateContent22(request.option22Enabled);
  }
});

chrome.storage.sync.get(['option22Enabled'], function(result) {
  updateContent22(result.option22Enabled || false);
});

function updateContent22(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[23].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option23 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption23') {
    updateContent23(request.option23Enabled);
  }
});

chrome.storage.sync.get(['option23Enabled'], function(result) {
  updateContent23(result.option23Enabled || false);
});

function updateContent23(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[24].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option24 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption24') {
    updateContent24(request.option24Enabled);
  }
});

chrome.storage.sync.get(['option24Enabled'], function(result) {
  updateContent24(result.option24Enabled || false);
});

function updateContent24(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[25].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option25 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption25') {
    updateContent25(request.option25Enabled);
  }
});

chrome.storage.sync.get(['option25Enabled'], function(result) {
  updateContent25(result.option25Enabled || false);
});

function updateContent25(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[26].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option26 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption26') {
    updateContent26(request.option26Enabled);
  }
});

chrome.storage.sync.get(['option26Enabled'], function(result) {
  updateContent26(result.option26Enabled || false);
});

function updateContent26(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[27].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option27 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption27') {
    updateContent27(request.option27Enabled);
  }
});

chrome.storage.sync.get(['option27Enabled'], function(result) {
  updateContent27(result.option27Enabled || false);
});

function updateContent27(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[28].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option28 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption28') {
    updateContent28(request.option28Enabled);
  }
});

chrome.storage.sync.get(['option28Enabled'], function(result) {
  updateContent28(result.option28Enabled || false);
});

function updateContent28(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[29].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option29 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption29') {
    updateContent29(request.option29Enabled);
  }
});

chrome.storage.sync.get(['option29Enabled'], function(result) {
  updateContent29(result.option29Enabled || false);
});

function updateContent29(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[30].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option30 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption30') {
    updateContent30(request.option30Enabled);
  }
});

chrome.storage.sync.get(['option30Enabled'], function(result) {
  updateContent30(result.option30Enabled || false);
});

function updateContent30(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[31].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option31 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption31') {
    updateContent31(request.option31Enabled);
  }
});

chrome.storage.sync.get(['option31Enabled'], function(result) {
  updateContent31(result.option31Enabled || false);
});

function updateContent31(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[32].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option32 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption32') {
    updateContent32(request.option32Enabled);
  }
});

chrome.storage.sync.get(['option32Enabled'], function(result) {
  updateContent32(result.option32Enabled || false);
});

function updateContent32(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[33].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option33 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption33') {
    updateContent33(request.option33Enabled);
  }
});

chrome.storage.sync.get(['option33Enabled'], function(result) {
  updateContent33(result.option33Enabled || false);
});

function updateContent33(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[34].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option34 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption34') {
    updateContent34(request.option34Enabled);
  }
});

chrome.storage.sync.get(['option34Enabled'], function(result) {
  updateContent34(result.option34Enabled || false);
});

function updateContent34(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[35].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option35 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption35') {
    updateContent35(request.option35Enabled);
  }
});

chrome.storage.sync.get(['option35Enabled'], function(result) {
  updateContent35(result.option35Enabled || false);
});

function updateContent35(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[36].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option36 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption36') {
    updateContent36(request.option36Enabled);
  }
});

chrome.storage.sync.get(['option36Enabled'], function(result) {
  updateContent36(result.option36Enabled || false);
});

function updateContent36(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[37].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option37 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption37') {
    updateContent37(request.option37Enabled);
  }
});

chrome.storage.sync.get(['option37Enabled'], function(result) {
  updateContent37(result.option37Enabled || false);
});

function updateContent37(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[38].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option38 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption38') {
    updateContent38(request.option38Enabled);
  }
});

chrome.storage.sync.get(['option38Enabled'], function(result) {
  updateContent38(result.option38Enabled || false);
});

function updateContent38(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[39].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option39 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption39') {
    updateContent39(request.option39Enabled);
  }
});

chrome.storage.sync.get(['option39Enabled'], function(result) {
  updateContent39(result.option39Enabled || false);
});

function updateContent39(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[40].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option40 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption40') {
    updateContent40(request.option40Enabled);
  }
});

chrome.storage.sync.get(['option40Enabled'], function(result) {
  updateContent40(result.option40Enabled || false);
});

function updateContent40(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[41].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option41 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption41') {
    updateContent41(request.option41Enabled);
  }
});

chrome.storage.sync.get(['option41Enabled'], function(result) {
  updateContent41(result.option41Enabled || false);
});

function updateContent41(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[42].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option42 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption42') {
    updateContent42(request.option42Enabled);
  }
});

chrome.storage.sync.get(['option42Enabled'], function(result) {
  updateContent42(result.option42Enabled || false);
});

function updateContent42(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[43].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option43 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption43') {
    updateContent43(request.option43Enabled);
  }
});

chrome.storage.sync.get(['option43Enabled'], function(result) {
  updateContent43(result.option43Enabled || false);
});

function updateContent43(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[44].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option44 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption44') {
    updateContent44(request.option44Enabled);
  }
});

chrome.storage.sync.get(['option44Enabled'], function(result) {
  updateContent44(result.option44Enabled || false);
});

function updateContent44(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[45].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option45 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption45') {
    updateContent45(request.option45Enabled);
  }
});

chrome.storage.sync.get(['option45Enabled'], function(result) {
  updateContent45(result.option45Enabled || false);
});

function updateContent45(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[46].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option46 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption46') {
    updateContent46(request.option46Enabled);
  }
});

chrome.storage.sync.get(['option46Enabled'], function(result) {
  updateContent46(result.option46Enabled || false);
});

function updateContent46(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[47].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option47 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption47') {
    updateContent47(request.option47Enabled);
  }
});

chrome.storage.sync.get(['option47Enabled'], function(result) {
  updateContent47(result.option47Enabled || false);
});

function updateContent47(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[48].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option48 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption48') {
    updateContent48(request.option48Enabled);
  }
});

chrome.storage.sync.get(['option48Enabled'], function(result) {
  updateContent48(result.option48Enabled || false);
});

function updateContent48(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[49].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option49 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption49') {
    updateContent49(request.option49Enabled);
  }
});

chrome.storage.sync.get(['option49Enabled'], function(result) {
  updateContent49(result.option49Enabled || false);
});

function updateContent49(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[50].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option50 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption50') {
    updateContent50(request.option50Enabled);
  }
});

chrome.storage.sync.get(['option50Enabled'], function(result) {
  updateContent50(result.option50Enabled || false);
});

function updateContent50(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[51].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option51 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption51') {
    updateContent51(request.option51Enabled);
  }
});

chrome.storage.sync.get(['option51Enabled'], function(result) {
  updateContent51(result.option51Enabled || false);
});

function updateContent51(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[52].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option52 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption52') {
    updateContent52(request.option52Enabled);
  }
});

chrome.storage.sync.get(['option52Enabled'], function(result) {
  updateContent52(result.option52Enabled || false);
});

function updateContent52(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[53].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option53 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption53') {
    updateContent53(request.option53Enabled);
  }
});

chrome.storage.sync.get(['option53Enabled'], function(result) {
  updateContent53(result.option53Enabled || false);
});

function updateContent53(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[54].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option54 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption54') {
    updateContent54(request.option54Enabled);
  }
});

chrome.storage.sync.get(['option54Enabled'], function(result) {
  updateContent54(result.option54Enabled || false);
});

function updateContent54(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[55].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option55 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption55') {
    updateContent55(request.option55Enabled);
  }
});

chrome.storage.sync.get(['option55Enabled'], function(result) {
  updateContent55(result.option55Enabled || false);
});

function updateContent55(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[56].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option56 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption56') {
    updateContent56(request.option56Enabled);
  }
});

chrome.storage.sync.get(['option56Enabled'], function(result) {
  updateContent56(result.option56Enabled || false);
});

function updateContent56(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[57].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option57 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption57') {
    updateContent57(request.option57Enabled);
  }
});

chrome.storage.sync.get(['option57Enabled'], function(result) {
  updateContent57(result.option57Enabled || false);
});

function updateContent57(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[58].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option58 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption58') {
    updateContent58(request.option58Enabled);
  }
});

chrome.storage.sync.get(['option58Enabled'], function(result) {
  updateContent58(result.option58Enabled || false);
});

function updateContent58(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[59].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option59 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption59') {
    updateContent59(request.option59Enabled);
  }
});

chrome.storage.sync.get(['option59Enabled'], function(result) {
  updateContent59(result.option59Enabled || false);
});

function updateContent59(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[60].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option60 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption60') {
    updateContent60(request.option60Enabled);
  }
});

chrome.storage.sync.get(['option60Enabled'], function(result) {
  updateContent60(result.option60Enabled || false);
});

function updateContent60(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[61].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option61 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption61') {
    updateContent61(request.option61Enabled);
  }
});

chrome.storage.sync.get(['option61Enabled'], function(result) {
  updateContent61(result.option61Enabled || false);
});

function updateContent61(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[62].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option62 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption62') {
    updateContent62(request.option62Enabled);
  }
});

chrome.storage.sync.get(['option62Enabled'], function(result) {
  updateContent62(result.option62Enabled || false);
});

function updateContent62(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[63].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option63 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption63') {
    updateContent63(request.option63Enabled);
  }
});

chrome.storage.sync.get(['option63Enabled'], function(result) {
  updateContent63(result.option63Enabled || false);
});

function updateContent63(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[64].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option64 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption64') {
    updateContent64(request.option64Enabled);
  }
});

chrome.storage.sync.get(['option64Enabled'], function(result) {
  updateContent64(result.option64Enabled || false);
});

function updateContent64(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[65].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option65 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption65') {
    updateContent65(request.option65Enabled);
  }
});

chrome.storage.sync.get(['option65Enabled'], function(result) {
  updateContent65(result.option65Enabled || false);
});

function updateContent65(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[66].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option66 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption66') {
    updateContent66(request.option66Enabled);
  }
});

chrome.storage.sync.get(['option66Enabled'], function(result) {
  updateContent66(result.option66Enabled || false);
});

function updateContent66(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[67].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option67 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption67') {
    updateContent67(request.option67Enabled);
  }
});

chrome.storage.sync.get(['option67Enabled'], function(result) {
  updateContent67(result.option67Enabled || false);
});

function updateContent67(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[68].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}

//option68 contentScripts js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption68') {
    updateContent68(request.option68Enabled);
  }
});

chrome.storage.sync.get(['option68Enabled'], function(result) {
  updateContent68(result.option68Enabled || false);
});

function updateContent68(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[69].style.backgroundColor  = "#80ff80";
  } else {
    document.body.style.backgroundColor = '';
  }
}




  },1000);


});
