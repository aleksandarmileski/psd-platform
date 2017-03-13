import { PsdPlatformPage } from './app.po';

describe('psd-platform App', () => {
  let page: PsdPlatformPage;

  beforeEach(() => {
    page = new PsdPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('psd works!');
  });
});
