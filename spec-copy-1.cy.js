describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://nextlab.mksolutions.com.br:4000/register')

    var empresa = {
      email: 'gleidsonberg.QA@gmail.com',
      nome: 'Gleidson Berg Clemente Tavares',
      celular: '5585987615481'
    }
    cy.get('input[name="email"]').type(empresa.email)
    cy.get('input[name="fullName"]').type(empresa.nome)
    cy.get('input[name="cellphone"]').type(empresa.celular)
    cy.get('input[type="checkbox"]').click()
    cy.get('button[mode="contained"]').click()
    
  })
})