describe('Developer Application Page - Apply with Valid Inputs', () => {

    it('Verify the user can apply using valid inputs', () => {

        cy.visit('https://developers.gitstart.com');

        cy.reload();

        cy.get('button').contains('Continue with email').click();

        cy.get(':nth-child(1) > .text-accented > .border-borderSecondary').type('zinotest123@yopmail.com');  
        cy.get(':nth-child(2) > .text-accented > .border-borderSecondary').type('Tester123'); 
     
        cy.get('button').contains('Continue with email').click();

        // Step 1: Enter a "First name" and "Last name"
        cy.get('input.placeholder:text-subdued w-full bg-transparent outline-none placeholder:text-sm').type('Toyo');   
        cy.get('form.flex > .flex-col > .gap-4 > :nth-child(2) > .text-accented > .border-borderSecondary').type('Doe');  

        // // Step 2: Enter a valid number in the phone number field
        // cy.get('input[name="phone"]').type('+2348123456789');  // Replace 'phone' with the actual input name

        // // Step 3: Select Country from the drop-down
        // cy.get('select[name="country"]').select('Nigeria');  // Replace 'country' with the actual select name and 'Nigeria' with an appropriate option

        // // Step 4: Fill in random text in the "Tell us about yourself" text field
        // cy.get('textarea[name="aboutYourself"]').type('I am a passionate developer eager to contribute to innovative projects.');  // Replace 'aboutYourself' with the actual textarea name

        // // Step 5: Click on "Continue"
        // cy.contains('Continue').click();

        // // You may add assertions here to verify that the user is redirected to the next step or that a success message is displayed
        // cy.url().should('include', '/next-step');  // Replace with the actual URL/path after clicking "Continue"
    });
});
