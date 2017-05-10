import { PetshopPage } from './app.po';

describe('petshop App', () => {
  let page: PetshopPage;

  beforeEach(() => {
    page = new PetshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
