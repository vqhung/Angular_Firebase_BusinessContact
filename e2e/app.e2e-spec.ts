import { AngularBusinessContactsPage } from './app.po';

describe('angular-business-contacts App', function() {
  let page: AngularBusinessContactsPage;

  beforeEach(() => {
    page = new AngularBusinessContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
