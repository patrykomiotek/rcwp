const API_BASE_URL = 'https://api.airtable.com/v0/appp0HGf4paT2Gh0O/products?maxRecords=3&view=default';
const API_TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;

function fetchProducts() {
  return fetch(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  })
  .then(response => {
    if (response.ok) { // 200
      return response.json();
    }
  }, (error) => {
    // 
  })
  // .then(data => {
  //   // const sum = 2 / 0;
  //   setProducts(data.records);
  //   setIsLoading(false);
  // }, (error) => {
  
  // })
}

export { fetchProducts };
