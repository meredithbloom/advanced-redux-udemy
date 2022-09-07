import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 10,
    title: 'My first book',
    description: 'The first book I ever wrote.'
  },
  {
    id: 'p2',
    price: 12,
    title: 'My second book',
    description: 'Better than the first.'
  },
  {
    id: 'p3',
    price: 14,
    title: 'My third book',
    description: 'Critics say I could have held off on writing this one.'
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
