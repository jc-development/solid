import fetch from 'isomorphic-fetch';

// reusable function for all store fetches to backend api
const url = 'https://store.solid-broadheads.com/api/graphql';

export const fetchStoreApi = (query, variables) => fetch(url, {
  method: 'post',
  headers: {
    'X-Shopify-Storefront-Access-Token':'removedForSecurity',
    'Content-Type':'application/json',
  },
  body: JSON.stringify({
    query: query(variables)
  })
}).then( (response) => {
  if (!response.ok) {
    throw new Error();
  }

  return response.json();
} );
