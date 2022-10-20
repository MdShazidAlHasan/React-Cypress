/// <reference types="cypress" />

describe('checkings if the loads the properly', ()=> {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('Website exists 1 ', ()=>{
        cy.viewport('macbook-16')  
        cy.visitandcheck()

    })
    it('Website exists 2 ', ()=>{
        cy.viewport('iphone-xr')
        cy.visitandcheck( )

    })

})