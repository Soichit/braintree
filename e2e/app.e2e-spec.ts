import { BraintreePage } from './app.po';

describe('braintree App', function() {
  let page: BraintreePage;

  beforeEach(() => {
    page = new BraintreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
