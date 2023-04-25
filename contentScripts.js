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
        p[course_3].style.backgroundColor = "#80ff80";
        p[course_4].style.backgroundColor = "#80ff80";
        p[course_5].style.backgroundColor = "#80ff80";
        p[course_6].style.backgroundColor = "#80ff80";

 }, 1000);
    
}


);
window.addEventListener('click', function(){
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption1') {
    updateContent1(request.optionEnabled);
  }
});

chrome.storage.sync.get(['optionEnabled1'], function(result) {
  updateContent1(result.optionEnabled || false);
});

function updateContent1(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[2].style.backgroundColor  = 'yellow';
  } else {
    document.body.style.backgroundColor = '';
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateOption2') {
    updateContent2(request.optionEnabled);
  }
});

chrome.storage.sync.get(['optionEnabled2'], function(result) {
  updateContent2(result.optionEnabled || false);
});

function updateContent2(optionEnabled) {
  let p = document.getElementsByClassName("nw-fm-tree-folder");
  if (optionEnabled) {
    p[8].style.backgroundColor  = 'yellow';
  } else {
    document.body.style.backgroundColor = '';
  }
}
});
