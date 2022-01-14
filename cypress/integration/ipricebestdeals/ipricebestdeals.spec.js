
import { Given  , Then} from "cypress-cucumber-preprocessor/steps";

Given('user is on home page of iprice group', () => {
cy.visit('https://www.iprice.my/') }
)

Then('verify the count of best deals available as {string}', (best_deals_expected_length) => {
    cy.contains("Find the Best Deals Online").parent().within(() => {
        cy.get('a').should('have.length',best_deals_expected_length)
      })
    })
      
Then('verify the count of items available are {string}', (best_deals_expected_length) => {
          cy.contains("Top Trending Products").parent().within(() => {
              cy.get('a').should('have.length',best_deals_expected_length)
       })
     })

And('verify the {string} in top trending items',(attribute)=> {

  cy.contains("Top Trending Products").parent().within(() => {
    cy.get('a').should('have.attr',attribute)

  })

})

Given('user is on coupons page of iprice group', () => {
  cy.visit('https://www.iprice.my/coupons') }
  )

Then('verify top stores urls are active', () => {
  
    cy.get("section[data-uat='top-stores']").children('.rY').within(() => {
     cy.get('a').each($el => { 
     cy.request($el.prop("href")).its('status').should('eq', 200);
  })

})
})

And('verify all top stores urls are accessible', () => {
    
  cy.get("section[data-uat='top-stores']").children('.rY').get('p').then(($el) => {
    return( 
    Cypress.$.makeArray($el)
        // and extract inner text from each
        .map((el1) => el1.innerText)
        
    )
  })
   .each(store => {
    cy.location('pathname').should('eq', `/coupons/`)
      if(cy.contains(store))
      {
        cy.contains(store).parent().siblings().click()
       const store1=store.toLowerCase()
       cy.location('pathname').should('eq', `/coupons/${store1}/`)
      cy.go('back')
      cy.wait(2000)
      cy.console("what ")
      }
    
   })
 

})



    
