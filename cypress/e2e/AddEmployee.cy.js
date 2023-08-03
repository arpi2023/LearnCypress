describe('template spec', () => {
    it('AddEmployee', () => {
      cy.visit('/web/index.php/auth/login')
  
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[name="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.contains("Dashboard").should("be.visible")
      cy.contains("PIM").click()
      cy.contains("Add Employee").click()
      cy.get('input[name="firstName"]').type("Varnit")
      cy.get('input[name="lastName"]').type("Krishna")
      cy.contains(" Save ").click()
      cy.contains("Successfully Saved").should("be.visible")

    })
  })