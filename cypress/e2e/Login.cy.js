describe('Login Page - Successful Login', () => {
    it('Verify the user can log in successfully with a valid email address and password', () => {
        // Step 1: Visit the Landing Page
        cy.visit('https://developers.gitstart.com');

        cy.reload();

        // Step 2: Click on the "Continue with Email" CTA
        cy.get('button').contains('Continue with email').click();

        // // Step 3: Enter a valid/registered email address and password
        cy.get(':nth-child(1) > .text-accented > .border-borderSecondary').type('zinototest@yopmail.com');  
        cy.get(':nth-child(2) > .text-accented > .border-borderSecondary').type('Tester123'); 
     

         // Step 4: Click on the "Continue with Email" CTA
         cy.get('button').contains('Continue with email').click();
    });
});
