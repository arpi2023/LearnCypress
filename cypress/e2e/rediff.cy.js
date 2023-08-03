import data from "../fixtures/rediff.json"
describe('Rediffregister', () => {
    it('Demo test for register', () => {
      cy.visit(data.url)
      cy.get('#tblcrtac > tbody > tr:nth-child(3) > td:nth-child(3) > input[type=text]').type(data.fullname)
     
      cy.get('#tblcrtac > tbody > tr:nth-child(7) > td:nth-child(3) > input[type=text]:nth-child(1)').type(data.rediffmailid)
    
      cy.get('em[class="eye-icon"]').click({multiple: true})
      cy.get('input[id="newpasswd"]').type(data.password)
      //cy.get('em[class="eyeiconRe"]').click({multiple: true})
      cy.get('input[id="newpasswd1"]').type(data.password)
     
      cy.get('input[onclick="chk_altemailID();fieldTrack(this);"]').check()
      
      
      cy.get('#div_hintQS > table > tbody > tr:nth-child(2) > td:nth-child(3) > select').select(data["security question"])
      cy.get('#div_hintQS > table > tbody > tr:nth-child(4) > td:nth-child(3) > input[type=password]').type(data.Answer)
      cy.get('#div_hintQS > table > tbody > tr:nth-child(6) > td:nth-child(3) > input[type=text]').type(data.Maidenname)
      
      
      cy.contains(data.Countrycode).click({force: true})
      cy.get('input[id="mobno"]').type(data.mobno)
      cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)').select(data.day)
      cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select(data.month)
      cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)').select(data.year)
      cy.get('input[value="f"]').check()
      cy.get('select[id="country"]').select(data.country)
      
      cy.get('select[onchange="showothcity();fieldTrack(this);"]').select(data.city)
    })
  })