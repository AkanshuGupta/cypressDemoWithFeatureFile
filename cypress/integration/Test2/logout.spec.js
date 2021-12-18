Given('user is on Login page',()=>{
    cy.visit("https://dev.bynfor.com/");
        // cy.get('li[id="idLoginSignup"]', { timeout: 10000 }).should('be.visible');
});

And('user click on Open Login popup',()=>{
    cy.get('li[id="idLoginSignup"]')
    .click();
    cy.get('input[id="lg_username"]')
    .type("customer1");
    cy.get('input[id="lg_password"]')
    .type("password");
});

Then('User click on Login in Button',()=>{
    cy.get('button[id="idSignIn"]')
    .click();
});

And('User open user menu',()=>{
    cy.get('.position-absolute > .rounded-circle')
    .click();
});

Then('User click on Logout option',()=>{
    cy.get('.dropdown-item >.icofont-logout')
    .click();
    // cy.wait(4999);
    cy.get('.ajs-primary > .btn-primary').click();
});
