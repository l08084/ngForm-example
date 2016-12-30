import { NgFormExamplePage } from './app.po';

describe('ng-form-example App', function() {
  let page: NgFormExamplePage;

  beforeEach(() => {
    page = new NgFormExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
