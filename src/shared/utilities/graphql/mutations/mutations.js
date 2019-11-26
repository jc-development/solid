const CheckoutFragment = `
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    lineItems (first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image(maxWidth:500) {
              id
              src
            }
            selectedOptions {
              name
              value
            }
            product {
              id
              productType
              handle
              images(first: 250, maxWidth:500) {
                edges {
                  node {
                    id
                    src
                  }
                }
              }
            }
            price
          }
          quantity
          customAttributes {
            key
            value
          }
        }
      }
    }
`;

export const createCheckout = () => {
  return `
    mutation {
      checkoutCreate(input: {allowPartialAddresses: true, shippingAddress: {city: "West Henrietta", province: "NY", country:"United States"}}) {
        userErrors {
          message
          field
        }
        checkout {
          ${CheckoutFragment}
        }
      }
    }
  `;
}

export const checkoutLineItemsAdd = ({checkoutId, lineItems}) => {
  let lineItemsString = JSON.stringify(lineItems)
  lineItemsString = lineItemsString.replace(/"(\w+)"\s*:/g, '$1:')
  return `
    mutation {
      checkoutLineItemsAdd(checkoutId: "${checkoutId}", lineItems: ${lineItemsString}) {
        userErrors {
          message
          field
        }
        checkout {
          ${CheckoutFragment}
        }
      }
    }
  `;
}

export const checkoutLineItemsUpdate = ({checkoutId, lineItems}) => {
  let lineItemsString = JSON.stringify(lineItems)
  lineItemsString = lineItemsString.replace(/"(\w+)"\s*:/g, '$1:')
  return `
    mutation {
      checkoutLineItemsUpdate(checkoutId: "${checkoutId}", lineItems: ${lineItemsString}) {
        userErrors {
          message
          field
        }
        checkout {
          ${CheckoutFragment}
        }
      }
    }
  `;
}

export const checkoutLineItemsRemove = ({checkoutId, lineItemIds}) => {
  return `
    mutation {
      checkoutLineItemsRemove(checkoutId: "${checkoutId}", lineItemIds: "${lineItemIds}") {
        userErrors {
          message
          field
        }
        checkout {
          ${CheckoutFragment}
        }
      }
    }
  `;
}
