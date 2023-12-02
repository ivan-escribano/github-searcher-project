describe('Check flow searching for a github repository with pagination', () => {
  it('Should search for a repository and use the pagination correctly', () => {
    cy.visit('');

    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    const inputSearcher = cy.get('[data-cy="input-searcher"]', { timeout: 10000 }).should('be.visible');
    inputSearcher.type('test');

    cy.get('[data-cy="pagination"]').within(() => {
      cy.get('button').contains('2').click();
    });

    const buttonAction = cy.get('[data-cy="button-action"]').first().should('be.visible');
    buttonAction.click();

    cy.get('@windowOpen').should('have.been.calledWith');
  });
});
