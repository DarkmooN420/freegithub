function openPage() {
    browser.tabs.create({
        url: "https://github.com/arsalanses/freegithub"
    });
}
  
browser.browserAction.onClicked.addListener(openPage);
