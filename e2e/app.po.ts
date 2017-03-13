import { browser, element, by } from 'protractor';

export class PsdPlatformPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('psd-root h1')).getText();
  }
}
