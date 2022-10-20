Cypress.Commands.add('visitandcheck', ()=>{
    cy.get("[data-testid=container] ")
    cy.contains("Task Tracker")
    cy.get("[data-testid=add]")
    cy.get('[data-testid=showtask]')
    cy.get('[data-testid=footer]')
})