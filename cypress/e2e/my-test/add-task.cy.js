/// <reference types="cypress" />

describe(('Adding task'),()=>{
    it.only('providing the data',()=>{
        cy.visit('http://localhost:3000')
        cy.get('[data-testid=add]').click()
        cy.get('[data-testid=add-name]').type('Take bath')
        cy.get('[data-testid=add-day]').type('Feb 4 at 3:00pm')
        cy.get('[data-testid=add-check]').click()
        cy.get('[data-testid=submit]').click()
        cy.contains('Take bath').should('exist')
    })
})