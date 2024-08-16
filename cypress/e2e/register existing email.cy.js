describe('Landing Page', () => {
    it('directs user to landing page', () => {
      cy.visit('https://developers.gitstart.com/')
      
    //Click on Register hyperlink
      cy.contains("Register").click();

      cy.visit('https://developers.gitstart.com/register')

    // Click on the "Continue with email" CTA
      cy.get('button').contains('Continue with email').click();

    //enter email address
      cy.get('.border-borderSecondary').type('zinotest123@yopmail.com');

    //Click on the "Continue with email" CTA
      cy.get('button').contains('Continue with email').click();

    //Assertion
    cy.get('.mt-4').should('have.text','This email has already been registered with a user')
    })
  })