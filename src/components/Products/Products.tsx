import { useState, useEffect } from 'react';
import { fetchProducts } from 'services/fetchProducts';
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
  async function fetchData() {
    try {
      const data = await fetchProducts();
      setProducts(data.records);
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
