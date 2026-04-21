import { ComponentFixture } from '@angular/core/testing'
import { mount } from 'cypress/angular'
import { ValidationForm } from '../src/app/pages/validation-form/validation-form';

describe('ValidationForm Component', () => {
  it('Deve renderizar o componente', () => {
    mount(ValidationForm)
    cy.contains('Valide sua Senha').should('be.visible')
  })

  it('Pronto para enviar resultado: Sucesso no Preenchimento', () => {
    mount(ValidationForm)
    cy.get('input#field-input-name').type('João')
    cy.get('input#field-input-email').type('joao@example.com.br')
    cy.get('input#field-input-password').type('222222')
    cy.press(Cypress.Keyboard.Keys.TAB)
    cy.contains('Senha válida!').should('be.visible')
  })

  it('Senha está inválida: Falha no Preenchimento', () => {
    mount(ValidationForm)
    cy.get('input#field-input-name').type('João')
    cy.get('input#field-input-email').type('joao@example.com.br')
    cy.get('input#field-input-password').type('54321')
    cy.press(Cypress.Keyboard.Keys.TAB)
    cy.contains('Senha inválida').should('be.visible')
  })

  it('Após ter enviado com sucesso o resultado: Sucesso', () => {
    mount(ValidationForm)
    cy.get('input#field-input-name').type('João')
    cy.get('input#field-input-email').type('joao@example.com.br')
    cy.get('input#field-input-password').type('222222')
    cy.get('button[type="submit"]').click()

    // Aguarda a mensagem de sucesso aparecer
    cy.contains('Resultado enviado com sucesso!').should('be.visible', { timeout: 3000 })
  })
})