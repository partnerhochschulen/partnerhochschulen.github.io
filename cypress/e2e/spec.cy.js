describe('Visit Page Test', () => {
  it('Visits the Partnerhochschulen App', () => {
    cy.visit('https://partnerhochschulen.github.io')
  })
})

describe('Find Title test', () => {
  it('finds the content "Partnerhochschulen"', () => {
    cy.visit('https://partnerhochschulen.github.io')

    cy.contains('Partnerhochschulen')
  })
})


describe('Find Buttons test', () => {
  it('finds the content "Buttons Text"', () => {
    cy.visit('https://partnerhochschulen.github.io')

    cy.contains('Spiel starten')
    cy.contains('Partnerhochschulen anzeigen')
  })
})

describe('Click on buttons Test', () => {
  it('clicks the link "Spiel starten"', () => {
    cy.visit('https://partnerhochschulen.github.io')

    cy.contains('Spiel starten').click()
  })
  it('clicks the link "Partnerhochschulen anzeigen"', () => {
    cy.visit('https://partnerhochschulen.github.io')

    cy.contains('Partnerhochschulen anzeigen').click()
  })
})

describe('Navigating to right Game URL and back Test', () => {
  it('clicking "Spiel starten" navigates to a new url', () => {
    cy.visit('https://partnerhochschulen.github.io')

    cy.contains('Spiel starten').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/play')
    cy.contains('Zurück zur Hauptansicht').click()
    cy.contains('Punkte verlieren')
    cy.contains('Zurück zur Hauptansicht').click()
    cy.url().should('include', '/')
  })
})