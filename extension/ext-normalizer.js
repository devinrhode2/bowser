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
}());