


describe('Form app', () => {
    beforeEach( () => {
        //arbitrary code you want running before each test
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const pwInput = () => cy.get('input[name="password"]')
    const emailInput = () => cy.get('input[name="email"]')
    const tosCheckbox = () => cy.get('input[type="checkbox')
    const submitBtn = () => cy.get('button')
    
    // here go our tests
    // "it" is a test
    // "expect" is an assertion
    // there can be several assertions per test
    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3)
    })

    it('playing around selecting elements from the DOM', () => {
        cy.get('input[name="name"]').should('exist')
        cy.get('input[name="email"]').should('exist')
        pwInput().should('exist')
        tosCheckbox().should('exist')
        cy.get('button').should('exist')
    })

    it('can type in the inputs', () => {
        //grab the inputs
        nameInput()
        .get('input[name="name"]')
        .should('have.value', '')
        .type('Paul')
        //assert they're empty
        //type in em
        // assert that the thing we typed is there
        pwInput()
        .get('input[name="password"]')
        .should('have.value', '')
        .type('hahaha')

        emailInput()
        .get('input[name="email"]')
        .should('have.value', '')
        .type('Paul@paul.com')

        tosCheckbox()
        .get('input[type="checkbox"]')

    })
    it('submit button disabled until every input is filled out', () => {
        //button is diabled is true,
        //type in name  field
        //button is disabled is true
        //empty name  field
        //type in password field
        //button disabled is true
        //type in email field
        //button disabled is false
        submitBtn().should('be.disabled')
        nameInput().type('paul')
        submitBtn().should('be.disabled')
        emailInput().type('paul@paul.com')
        submitBtn().should('be.disabled')
        pwInput().type('sdfsdf')
        submitBtn().should('not.be.disabled')

    })
})