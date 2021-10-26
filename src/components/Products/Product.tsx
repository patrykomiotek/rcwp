import { useState, useEffect } from 'react';
import { fetchProduct } from 'services/products';
import { ProductType } from 'types/ProductType';

type ResponseType = "pending" | "rejected" | "success";

const productId = "rec22rh3KWMQ1dNRm";

function Product() {
  const [status, setStatus] = useState<ResponseType>("pending");
  const [isError, setIsError] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetchProduct(productId)
    .then(
      (response) => setProduct(response.data),
      (error) => setIsError(true)
    )
  }, []);

  console.log('Product: ', product);
  return (
    <div>
      {product && product.fields.name}
    </div>
  );
}

export { Product };
