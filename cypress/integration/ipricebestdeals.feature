Feature: Set of user journeys on iprice home page

Scenario: Find the number of elements in Best Deals Online section

Given user is on home page of iprice group
Then verify the count of best deals available as "20"

Scenario: Find the number of elements in top trending items and also verify the given attribute presence

Then verify the count of items available in top trending items are "20"
And verify the "data-vars-cgt" in top trending items

Scenario: Find all the links are accessible in the page

Given user is on coupons page of iprice group
Then verify top stores urls are active
And verify all top stores urls are accessible

