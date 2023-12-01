describe('The Home Page Local', () => {
  it('successfully loads localhost', () => {
    cy.visit('/')
  })
})

describe('Go to play mode and come back test', () => {
  it('goes to play URL,wants to come back, sees warning, comes back', () => {
    cy.visit('/')
    cy.contains('Spiel starten').click()
    cy.url().should('include', '/play')
    cy.contains('Zurück zur Hauptansicht').click()
    cy.contains('Punkte verlieren')
    cy.contains('Zurück zur Hauptansicht').click()
    cy.url().should('include', '/')
  })
})

describe('Go to partnerschools view and come back test', () => {
  it('goes to partnerschools URL,wants to come back, comes back', () => {
    cy.visit('/')
    cy.contains('Partnerhochschulen anzeigen').click()
    cy.url().should('include', '/show-schools')
    cy.contains('Zurück zur Hauptansicht').click()
    cy.url().should('include', '/')
  })
})

describe('Image Gallery loads', () => {
  it('should render ImageGallery', () => {
    cy.visit('/play');
    cy.get('.image-gallery').should('exist');
  });
});

