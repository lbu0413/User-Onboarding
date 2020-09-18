const { cyan } = require("color-name")


describe('Form app', () => {
    beforeEach( () => {
        //arbitrary code you want running before each test
        cy.visit('http://localhost:3000')
    })
    
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
        cy.get('input[name="password"]').should('exist')
        cy.get('input[name="tos"]').should('exist')
        cy.get('button').should('exist')
    })
})