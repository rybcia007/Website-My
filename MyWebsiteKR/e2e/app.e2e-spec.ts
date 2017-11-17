import { MyWebsiteKRPage } from './app.po';

describe('my-website-kr App', () => {
  let page: MyWebsiteKRPage;

  beforeEach(() => {
    page = new MyWebsiteKRPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
