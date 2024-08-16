describe('Login Page - Successful Login', () => {
    it('Verify the user cannot log in successfully with a invalid email address or password', () => {
        // Step 1: Visit the Landing Page
        cy.visit('https://developers.gitstart.com');

        cy.reload();

        // Step 2: Click on the "Continue with Email" CTA
        cy.get('button').contains('Continue with email').click();

        // // Step 3: Enter a valid/registered email address and password
        cy.get(':nth-child(1) > .text-accented > .border-borderSecondary').type('zinotest123@yopmail.com');  
        cy.get(':nth-child(2) > .text-accented > .border-borderSecondary').type('Testerolo'); 
     

         // Step 4: Click on the "Continue with Email" CTA
         cy.get('button').contains('Continue with email').click();

        //Assertion
        cy.get('.mt-4').should('have.text','Invalid email or password.')

    
    });
});
