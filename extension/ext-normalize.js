var extension;
// True in Safari, false in Chrome.
(function extNormalizer(){
'use strict';
  extension.getURL = function extensionGetURL(path){
    if (chrome) {
      return chrome.extension.getURL(path);
    } else {
      return safari.extension.baseURI + path;
    }
  };
  extension.addBrowserButtonListener = extensionAddBrowserButtonListener(listener){
    if (chrome) {
      chrome.browserAction.onClicked.addListener(listener);
    }
  };
  extension.newTab = function extensionNewTab(url){
    if (chrome) {
      chrome.tabs.create({
        url: url
      });
      var tab = {};//chrome.tabs.get();
      tab.update = function TabUpdate(url){
        if (chrome) {
          chrome.tabs.update(this.id, {
            url: url
          });
        } else {
          
        }
      };
      //return tab;
    }
  };
  //extension.
}());