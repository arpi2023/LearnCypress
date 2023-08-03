describe('Demo of multiple true', () => {
    it('Demo test for multiple true', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('div[class="product-action"]').click({multiple: true})
      
    })
  })