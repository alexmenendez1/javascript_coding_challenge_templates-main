// Coding Challenge 2a

// Code goes here
let productName = 'Product X'
let costPerUnit= 5
let basePrice = 10
let discountRate= .15
let salesTaxRate =.007
let fixedMonthlyCosts = 100

let discountedPrice = basePrice * (1-discountRate)
let finalPriceWithTax = discountedPrice * (1+salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil (fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

console.log("Your Product is/n Your discounted price is/n Your final price with tax is/n Your profit per unit is /n Your breakeven units is/n This item is)


