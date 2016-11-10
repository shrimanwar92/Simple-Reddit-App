import { SimpleRedditAppPage } from './app.po';

describe('simple-reddit-app App', function() {
  let page: SimpleRedditAppPage;

  beforeEach(() => {
    page = new SimpleRedditAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
