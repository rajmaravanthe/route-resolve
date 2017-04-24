import { ResolvePage } from './app.po';

describe('resolve App', function() {
  let page: ResolvePage;

  beforeEach(() => {
    page = new ResolvePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
