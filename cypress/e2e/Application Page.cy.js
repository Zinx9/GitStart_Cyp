describe('Developer Application Page - Apply with Valid Inputs', () => {
    beforeEach(() => {
        //User should Login
        cy.visit('https://developers.gitstart.com');

        cy.reload();

        cy.get('button').contains('Continue with email').click();

        cy.get(':nth-child(1) > .text-accented > .border-borderSecondary').type('zinototest@yopmail.com');  
        cy.get(':nth-child(2) > .text-accented > .border-borderSecondary').type('Tester123'); 
     
        cy.get('button').contains('Continue with email').click();

    });

    it('Verify the user cannot apply without filling the form', () => {

        //Step 1: Click "Continue" button
        cy.get('button').contains("Continue").should('be.visible').click();
        
        cy.get('p[class="text-error text-xs"]').eq(0).should('have.text','Your first name is required.')
        
    });

    it('Verify the user cannot apply leaving the First Name field blank', () => {

        // Step 1: Enter a  "Last name"  
        cy.get('input[name="lastName"]').type('Haku');  

        //Step 2: Enter Phone number
        cy.get('input[name="phone"]').type('+2348123456788');  

        //Step 3: Select Country
        cy.get('select[name="country"]').select('NG'); 

        //Step 4: Tell Us About Yourself
        cy.get('textarea[name="bio"]').type('Testing GitStart today!'); 

        //Step 5: Click "Continue" button
        cy.get('button').contains("Continue").should('be.visible').click();

        cy.get('p[class="text-error text-xs"]').should('have.text','Your first name is required.')
        
    });


    it('Verify the user cannot apply leaving the Last Name field blank', () => {

        // Step 1: Enter a "First name" and "Last name"
        cy.get('input[name="firstName"]');type('Sasuke');    
        cy.get('input[name="lastName"]'). 

        //Step 2: Enter Phone number
        cy.get('input[name="phone"]').type('+2348123456788');  

        //Step 3: Select Country
        cy.get('select[name="country"]').select('NG'); 

        //Step 4: Tell Us About Yourself
        cy.get('textarea[name="bio"]').type('Testing GitStart today!'); 

        //Step 5: Click "Continue" button
        cy.get('button').contains("Continue").should('be.visible').click();

        cy.get('.mt-2 > .text-error').should('Your first name is required.')
    });


    it('Verify the user can apply using valid inputs', () => {

        cy.visit('https://developers.gitstart.com');

        cy.reload();

        cy.get('button').contains('Continue with email').click();

        cy.get(':nth-child(1) > .text-accented > .border-borderSecondary').type('zinototest@yopmail.com');  
        cy.get(':nth-child(2) > .text-accented > .border-borderSecondary').type('Tester123'); 
     
        cy.get('button').contains('Continue with email').click();

        // Step 1: Enter a "First name" and "Last name"
        cy.get('input[name="firstName"]').type('Toyo');   
        cy.get('input[name="lastName"]').type('Loko');  

        //Step 2: Enter Phone number
        cy.get('input[name="phone"]').type('+2348123456788');  

        //Step 3: Select Country
        cy.get('select[name="country"]').select('NG'); 

        //Step 4: Tell Us About Yourself
        cy.get('textarea[name="bio"]').type('Testing GitStart today!'); 

        //Step 5: Click "Continue" button
        cy.get('button').contains("Continue").should('be.visible').click();

        cy.get(':nth-child(10) > .text-md > .h-4').check();
    });
});
