describe('login',function(){
    it('Mostrar login',function(){
        cy.visit('https://ditoqa.origon.app/Dito.Web/Account/Login');
        cy.get('#UserName').type('caha76@gmail.com');
        cy.get('#Password').type('12345678');
        cy.get('.btn').click();
        //cy.get('.filter-option').select('INTERFACTURA S.A.P.I DE C.V.');
        cy.get('.filter-option').click();
        cy.get('.input-block-level').type('I')
        .type('N')
        .type('T')
        .type('E');
        cy.get('.active > a').click();
        cy.get('.modal-footer > .btn').click();
        cy.get('#menuJs > :nth-child(3) > .jsMenu > .arrow').click();
        cy.get('#CartaPorte_Tabs').click();
        cy.get('gdd-widget').get('custom.ng-select.ng-select-single.ng-select-searchable.ng-select-clearable.ng-untouched.ng-pristine.ng-valid.ng-select-opened.ng-select-bottom').type('h');
        


        //cy.get('.input-block-level').should('have.value', 'INTERFACTURA S.A.P.I DE C.V.');


        //cy.get('.filter-option').click().contains('INTERFACTURA S.A.P.I DE C.V.').click()

        //cy.get('.filter-option').select('IN', { force: true })

      // confirm the value of the selected element
      //cy.get('#favorite-state').should('have.value', 'IN')

      // confirm Select2 widget renders the state name
      //cy.get('#select2-favorite-state-container').should('have.text', 'Massachusetts')

    })
    

})
