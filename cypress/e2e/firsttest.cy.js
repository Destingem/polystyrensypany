describe("test", () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get(".mantine-Grid-root > :nth-child(1) > p").click()
    cy.get('p'["O nás"]).click()
    cy.url().should('include', '/o_nas')
    cy.get('h1').contains('Onas')
  })
})