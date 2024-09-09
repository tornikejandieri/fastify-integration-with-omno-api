/* 
THIS IS DATA MODEL FOR YOU TO PASTE IN POSTMAN RAW BODY WHEN MAKING REQUEST



IMPORTANT!!!
===> MAKE SURE TO INCLUDE UPDATED hookUrl, callback and callbackFail ADDRESSES PROVIDED BY LOCALTUNNEL LIBRARY <===

*/

module.exports = {
  amount: 1000,
  currency: "USD",
  lang: "en",
  hookUrl: "your-link-here/webhook",
  callback: "your-link-here/callback",
  callbackFail: "your-link-here/callbackFail",
  billing: {
    firstName: "John",
    lastName: "Doe",
    address1: "123 Street",
    city: "Cityville",
    state: "State",
    country: "US",
    postalCode: "12345",
    phone: "1234567890",
    email: "john.doe@example.com",
    externalUserId: "user123",
    dateOfBirth: "1980-01-01",
  },
  orderId: "order123",
  cardToken: "token123",
  payment3dsType: "Redirection",
  kycVerified: true,
  previousPaymentCount: 5,
  cardData: {
    cardNumber: "4111111111111111",
    cardHolderName: "John Doe",
    cardExpiryDate: "12",
    cardExpiryDate2: "2024",
    cardCvv: "123",
    browser: {
      colorDepth: 24,
      userAgent: "Mozilla/5.0",
      language: "en-US",
      timeZone: "-300",
      screenWidth: 1920,
      javaEnabled: true,
      customerIp: "192.168.1.1",
      screenHeight: 1080,
      windowHeight: 800,
      timeZoneOffset: -300,
      windowWidth: 1200,
    },
  },
  saveCard: true,
  merchantInformation: {
    name: "Example Merchant",
    merchantName: "Example Merchant 3DS",
    country: "US",
    address1: "123 Example St.",
    administrativeArea: "CA",
    locality: "Example City",
    postalCode: "12345",
    url: "<https://example.com>",
    customerServicePhoneNumber: "123-456-7890",
    categoryCode: "5533",
    noteToBuyer: "Thank you for your purchase!",
  },
}
