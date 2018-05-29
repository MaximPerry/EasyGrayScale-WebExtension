brTagFinder = {
    execute: function () {
        browser.tabs.query({active: true}, function(tabs) {
            browser.tabs.connect(tabs[0].id);
        });
    }
}
function handleMessage() {
    browser.browserAction.setIcon({ path: "icons/iconx-19.png" });
    setTimeout(function () {
        browser.browserAction.setIcon({ path: "icons/icon-19.png" });
    }, 3000);
}
browser.browserAction.onClicked.addListener(brTagFinder.execute);
browser.runtime.onMessage.addListener(handleMessage);