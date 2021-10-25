import { useState, useEffect } from 'react';
// const Products = React.FC() => <div>...</div>

type ProductType = {
  id: string;
  fields: {
    name: string;
    price: number;
  }
}

function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // 🙉 without array of dependecies
  // const [foo, setFoo] = useState();
  // useEffect(() => {
  //   fetch('https://randomuser.me/api/')
  //   .then(response => response.json())
  //   .then(data => setFoo(data))
  // });
  useEffect(() => {
    fetch('https://api.airtable.com/v0/appp0HGf4paT2Gh0O/products?maxRecords=3&view=default', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`
      }
    })
    .then(response => response.json())
    .then(data => setProducts(data.records))
  }, []);
  return (
    <div>
      {products.map((elem) => (
        <div key={elem.id}>
          {elem.fields.name} {elem.fields.price}
        </div>
      ))}
    </div>
  );
}

export { Products };
