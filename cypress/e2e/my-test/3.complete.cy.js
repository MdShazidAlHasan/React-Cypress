describe('Toggle to mark them complete',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('marking them complete',()=>{
        cy.get('[data-testid=taskid2]').dblclick()
    })
    it('deleting task from the list',()=>{
        cy.get('[data-testid=deleteid1]').click()
    })
    
})