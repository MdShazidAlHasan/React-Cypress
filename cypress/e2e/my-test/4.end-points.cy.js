describe('Visting the urls',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('about page ',()=>{
        cy.contains('About').click()
        cy.url().should('include', '/about')
        cy.url().then(value=>{
            cy.log('We are in page:', value)
        })
        cy.contains('Go Back').should('exist')
    })
    
})