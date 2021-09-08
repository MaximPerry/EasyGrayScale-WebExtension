brTagFinder = {
    execute: function () {
        chrome.tabs.query({active: true}, function(tabs) {
            chrome.tabs.connect(tabs[0].id);
        });
    }
}
function handleMessage() {
    chrome.browserAction.setIcon({ path: "icons/iconx-19.png" });
    setTimeout(function () {
        chrome.browserAction.setIcon({ path: "icons/icon-19.png" });
    }, 3000);
}
chrome.browserAction.onClicked.addListener(brTagFinder.execute);
chrome.runtime.onMessage.addListener(handleMessage);