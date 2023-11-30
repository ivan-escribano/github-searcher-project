/// <reference types="Cypress" />

describe('Check flow searching for a github repository', () => {
  it('Should search for a repository and go to the corresponding repository', () => {
    cy.visit('');

    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    const inputSearcher = cy.get('[data-cy="input-searcher"]', { timeout: 10000 }).should('be.visible');
    inputSearcher.type('github-searcher-project');

    const buttonAction = cy.get('[data-cy="button-action"]').first();
    buttonAction.click();

    cy.get('@windowOpen').should('have.been.calledWith', 'https://github.com/ivan-escribano/github-searcher-project');
  });
});
