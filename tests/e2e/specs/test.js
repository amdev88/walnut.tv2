// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/login');
    cy.contains('h3', 'Login to save your channels 📺');
  });
});
