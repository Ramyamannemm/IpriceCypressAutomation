
import { Given  , Then} from "cypress-cucumber-preprocessor/steps";

Given('user is on home page of iprice group', () => {
cy.visit('https://www.iprice.my/') }
)

Then('verify the count of best deals available as {string}', (best_deals_expected_length) => {
    cy.contains("Find the Best Deals Online").parent().within(() => {
        cy.get('a').should('have.length',best_deals_expected_length)
      })
    })
      
Then('verify the count of items available in top trending items are {string}', (best_deals_expected_length) => {
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
     cy.log(store)
    cy.location('pathname').should('eq', `/coupons/`)
    if(store != "[CNY Lazada App Voucher Code] RM30 OFF Sitewide Orders For AmBank Cardholders")
    {
    cy.get('p[title*="'+store+'"]').its('length').then((size)=>{
      if(size > 1)
      cy.get('p[title="'+store+'"]').siblings().should("be.visible").click()
      else
      cy.get('p[title*="'+store+'"]').siblings().should("be.visible").click()
    })
   }
    const store1=store.toLowerCase()
    const pathname=cy.location('pathname').then(($pathname)=>{
      
      if($pathname.includes('-'))
      $pathname.replace('-',' ')
      return($pathname)
    })
    expect(pathname=='/coupons/${store1}/')
    if(store != "[CNY Lazada App Voucher Code] RM30 OFF Sitewide Orders For AmBank Cardholders")
    cy.go('back')
    else
    return false
    
   })
 

})



    
