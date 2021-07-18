import { getHeader } from '../support/app.po';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header', () => {
    getHeader().should('be.visible');
  });
});
