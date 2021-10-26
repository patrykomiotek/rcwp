import { useState, useEffect } from 'react';
import { fetchProducts } from 'services/products';
import type { ProductType } from 'types/ProductType';
// const Products = React.FC() => <div>...</div>

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
  async function fetchData() {
    try {
      const response = await fetchProducts();
      setProducts(response.data.records);
      setIsLoading(false);
    } catch {
      console.log('Złapałem błąd :)');
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchData();
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
