import { useState, useEffect } from 'react';
import { isExpressionStatement } from 'typescript';
// const Products = React.FC() => <div>...</div>

type ProductType = {
  id: string;
  fields: {
    name: string;
    price: number;
  }
}

const Loading = () => <div>Loading...</div>;
const Error = () => <div>Error 🚫</div>;

function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  // 🙉 without array of dependecies
  // const [foo, setFoo] = useState();
  // useEffect(() => {
  //   fetch('https://randomuser.me/api/')
  //   .then(response => response.json())
  //   .then(data => setFoo(data))
  // });
  useEffect(() => {
    fetch('httpss://api.airtable.com/v0/appp0HGf4paT2Gh0O/products?maxRecords=3&view=default', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`
      }
    })
    .then(response => {
      if (response.ok) { // 200
        return response.json();
      }
    })
    .then(data => {
      // const sum = 2 / 0;
      setProducts(data.records);
      setIsLoading(false);
    })
    .catch(() => {
      console.log('Złapałem błąd :)');
      setIsLoading(false);
      setIsError(true);
    })
  }, []);
  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      {products.map((elem) => (
        <div key={elem.id}>
          {elem.fields.name} {elem.fields.price}
        </div>
      ))}
    </div>
  );
}

export { Products };
