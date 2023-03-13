/// <reference types = "cypress"/>

describe("Bull",function(){

    it("signup",function(){
        cy.visit("http://18.237.188.87:3000/")
        cy.get('a').click()
        cy.get('#name').type("Mahnoor")
        cy.get('#email').type("bull@gmail.com")
        cy.get('.PrivateSwitchBase-input').click()
        cy.get('.MuiButton-root').click()
        cy.wait(10000)
       // cy.get('.pincode-input-container > :nth-child(1)').type("123456")
        
        

    })

    it("login",function(){
        
         cy.visit("http://18.237.188.87:3000/")
         cy.get('#email').should('exist')
         cy.get('#email').type("mahnoorshaikh022000@gmail.com")
         cy.get('#password').should('exist')
         cy.get('#password').type("12345678")
         cy.get('.MuiButton-root').click()


         

    })

    it.only("home",function(){
        cy.visit("http://18.237.188.87:3000/")
         cy.get('#email').type("mahnoorshaikh022000@gmail.com")
         cy.get('#password').type("12345678")
        cy.get('.MuiButton-root').click()
         cy.wait(500)
         //cy.url().should('include', '/home')
         cy.get('#\\:r2\\:').type("Tezeract")
         cy.get('.MuiGrid-grid-md-6 > .MuiBox-root > .MuiButtonBase-root').click()

        
        
        //  cy.get('.css-yhcv0b-MuiButtonBase-root-MuiButton-root > .MuiTypography-root').click() 
        //  cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').click()
        //  cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').type("CTO")
        //  cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment').click()
        //  cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').click()
        
        // cy.get('.MuiFab-root').click()
        // cy.get('a > .MuiTypography-root').click()
        // cy.get('.css-w9klkg').click()
        // cy.get(':nth-child(1) > .MuiPaper-root').click()
        // cy.get(':nth-child(1) > .MuiButtonBase-root > .MuiTypography-root').click()
        // cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .css-1n2mv2k > .MuiTypography-root').click()
        // cy.get('[data-testid=CancelIcon]').click()
        // cy.get('[src="/static/media/News.eaa73af01bd49fa8c5d8.png"]').click()
        // cy.get('.css-w9klkg').click
        
    })
   
    it("verifying back button",function(){

        cy.visit("http://18.237.188.87:3000/")
         cy.get('#email').type("mahnoorshaikh022000@gmail.com")
         cy.get('#password').type("12345678")
         cy.get('.MuiButton-root').click()
         cy.wait(10000)
         cy.get(':nth-child(2) > .MuiPaper-root').click()
         cy.wait(500)
         cy.get('.MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click()
         cy.wait(500)
         cy.get('.css-1jkooqs-MuiGrid-root > .MuiGrid-container > :nth-child(1)').click()
         cy.wait(500)
         cy.get('[data-testid=CancelIcon]').click()
         cy.wait(500)
         cy.get('[data-testid=ArrowBackIosOutlinedIcon]').click()
         cy.get('[data-testid=ArrowBackIosOutlinedIcon]').click()
         cy.get('.css-yhcv0b-MuiButtonBase-root-MuiButton-root').click()
         cy.get(':nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #combo-box-demo').type("CTO")
         cy.get('.MuiFab-root').click()
         cy.get('a > .MuiTypography-root').click()
         
         cy.get('[data-testid=ArrowBackIosOutlinedIcon]').click()
         cy.get('[data-testid=ArrowBackIosOutlinedIcon]').click()
    })

    
})