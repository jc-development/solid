export const getStoreProductByHandleQuery = (productHandle) => {
  return `
    query {
      shop {
        productByHandle(handle: "${productHandle}") {
          description
          descriptionHtml
          handle
          id
          title
          tags
          images(first: 250, maxWidth:500) {
            edges {
              node {
                id
                src
                altText
              }
            }
          }
          options(first: 250) {
            id
            name
            values
          }
          variants(first: 250) {
            edges {
              node {
                id
                availableForSale
                image(maxWidth:500) {
                  id
                  src
                  altText
                }
                selectedOptions {
                  name
                  value
                }
                compareAtPrice
                price
                sku
                title
              }
            }
          }
        }
      }
    }
  `;
};

export const getAllProducts = () => {
  return `
    query {
      shop {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              descriptionHtml
              tags
              images(first: 10, maxWidth: 500) {
                edges {
                  node {
                    id
                    altText
                    src
                  }
                }
              }
              options(first: 10) {
                id
                name
                values
              }
              variants(first: 10) {
                edges {
                  node {
                    id
                    availableForSale
                    image(maxWidth: 500) {
                      id
                      src
                      altText
                    }
                    selectedOptions {
                      name
                      value
                    }
                    compareAtPrice
                    price
                    sku
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
};
