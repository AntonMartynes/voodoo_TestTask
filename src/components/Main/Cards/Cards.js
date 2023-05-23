import { useEffect, memo, useState } from 'react';
import { Card } from '../Card/Card';
import axios from 'axios';

export const Cards = memo(() => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
        .then(async (response) => {
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.error({error});
          setError(true);
        });
    };

    const fetchData = async () => {
      await getProducts();
    };

    products.length === 0 && fetchData();
  }, [products]);

  const renderProducts = (listOfProducts) => {
    if (error) {
      return <h5 className="text-center mt-5 mx-6 sm:mx-28">Something went wrong. Please try reloading this page. If this does not help, please wait a moment and try again.</h5>
    }
    if (listOfProducts.length === 0) {
      return <h5 className="text-center mt-5">Cards are not found</h5>;
    }

    return listOfProducts.map(({ id, ...props }) => {
      return <Card key={id} {...props} />;
    });
  };

  const elements = renderProducts(products);

  return (
    <section className="w-full flex-col column mb-24 flex items-center">
      <ul className="flex flex-wrap justify-center gap-x-5">
        {elements}
      </ul>
    </section>
  );
});