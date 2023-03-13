describe('Cross-browser testing', () => {
    it('should load the page in different browsers', () => {
      cy.visit('http://18.237.188.87:3000/', { timeout: 10000 })
  
      cy.get('h1').should('contain', 'Example Domain')
    })
  })
  