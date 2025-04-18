/// <reference types="cypress" />

describe('template spec', () => {
  before(() => {
    cy.request('GET', 'http://localhost:8000/sanctum/csrf-cookie');

  });

  it('Registers, logs in, edits profile, adds workouts, gets AI suggestion, deletes workout, deletes account', () => {
    cy.visit('/');

    cy.contains('Register').click();

    cy.get('#name').type('Cypress Test');
    cy.get('#email').type('test@gmail.com');
    cy.get('#password').type('password');
    cy.get('#password_confirmation').type('password');
    cy.get('button').click();

    cy.url().should('include', '/login');

    cy.get('#email').type('test@gmail.com');
    cy.get('#password').type('password');
    cy.get('button').click();

    cy.url().should('include', '/workouts');

    cy.get('.profile-button').click();

    cy.url().should('include', '/profile');

    cy.get('#height').type('185');
    cy.get('#weight').type('80');
    cy.get('#birth_date').type('2000-01-01');

    cy.get('.save-button').click();
    cy.get('.back-button').click();
    
    cy.url().should('include', '/workouts');

    cy.get('.add-button').click();

    cy.url().should('include', '/workouts/new');

    cy.get('#title').type('Test workout');
    cy.get('#start_time').type('2025-04-01T14:30');
    cy.get('#finish_time').type('2025-04-01T15:30');

    cy.get('.sets > :nth-child(2) > :nth-child(1) > .ng-valid').select('Barbell Squat');
    cy.get('.sets > :nth-child(2) > :nth-child(2) > .ng-untouched').clear().type('4');
    cy.get('.sets > :nth-child(2) > :nth-child(3) > .ng-untouched').type('8');
    cy.get(':nth-child(4) > .ng-untouched').type('60');

    cy.get('.add-set-button').click();
    cy.get(':nth-child(3) > .delete-button').click();
    cy.get('.add-set-button').click();

    cy.get(':nth-child(1) > .ng-untouched').select('Leg Extension');
    cy.get(':nth-child(2) > .ng-untouched').clear().type('3');
    cy.get(':nth-child(3) > .ng-untouched').type('12');
    cy.get(':nth-child(4) > .ng-untouched').type('80');

    cy.get('.add-set-button').click();

    cy.get(':nth-child(1) > .ng-untouched').select('Leg Curl');
    cy.get(':nth-child(2) > .ng-untouched').clear().type('3');
    cy.get(':nth-child(3) > .ng-untouched').type('12');
    cy.get(':nth-child(4) > .ng-untouched').type('70');

    cy.get('.sets > :nth-child(2) > :nth-child(1) > .ng-valid').select('Barbell Squat');
    cy.get(':nth-child(3) > :nth-child(1) > .ng-valid').select('Leg Extension');
    cy.get(':nth-child(4) > :nth-child(1) > .ng-valid').select('Leg Curl');

    cy.get('.save-button').click();

    cy.url().should('eq', 'http://localhost:4200/workouts');

    cy.get('.view-button').click();

    cy.wait(1000);
    cy.get('.ai-button').click();
    cy.get('.ai-response', { timeout: 10000 }).should('be.visible');

    cy.get('.back-btn').click();

    cy.url().should('eq', 'http://localhost:4200/workouts');

    cy.get('.add-button').click();

    cy.url().should('include', '/workouts/new');

    cy.get('#title').type('delete test');
    cy.get('#start_time').type('2025-04-02T14:30');
    cy.get('#finish_time').type('2025-04-02T15:30');

    cy.get('.sets > :nth-child(2) > :nth-child(1) > .ng-valid').select('Push Up');
    cy.get('.sets > :nth-child(2) > :nth-child(2) > .ng-untouched').clear().type('100');
    cy.get('.sets > :nth-child(2) > :nth-child(3) > .ng-untouched').type('1000');
    cy.get(':nth-child(4) > .ng-untouched').type('0');

    cy.get('.save-button').click();

    cy.url().should('eq', 'http://localhost:4200/workouts');

    cy.wait(1000);
    cy.get(':nth-child(3) > .workout-actions > .delete-button').click();

    cy.get('.profile-button').click();

    cy.url().should('include', '/profile');
    
    cy.get('.delete-button').click();
  })
});