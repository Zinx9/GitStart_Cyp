describe('Verify Yopmail email', () => {
    it('should allow user click on verification link', () => {
      const yopmailEmail = 'zinotesting@yopmail.com';
    
      // Visit the Yopmail website
      cy.visit(`http://www.yopmail.com`);
  
      // Enter email address
      cy.get('input#login.ycptinput').type(yopmailEmail);
      // enter inbox
      cy.get('i.material-icons-outlined.f36').click();

      // Click on verification link
      cy.get('#ifmail').contains('https://developers.gitstart.com/verify_email').should('be.visible').click();

    });
  });
  