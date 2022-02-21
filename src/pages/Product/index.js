import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styleProduct.css";

const DisplayProduct = ({
  title,
  image,
  price,
  description,
  rating,
  count,
  category,
}) => {
  return (
    <div>
      <div className="card">
        <h3>{title}</h3>
        <div className="image">
          <img src={image} alt={title}></img>
        </div>
        <div className="content">
          <p>Price: {price}</p>
          <p>Features: {description}</p>
          <p>
            Rating: {rating} ({count})
          </p>
        </div>
      </div>
      <Link to={`/product/${category}`} className="link">
        Go to {category}
        <br />
      </Link>
      <Link to="/" className="link">Go to home</Link>
    </div>
  );
};
const Product = () => {
  let { category, id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      {Object.keys(product).length === 0 && <div>Loading your product...</div>}
      {Object.keys(product).length > 0 && (
        <DisplayProduct
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          rating={product.rating.rate}
          count={product.rating.count}
          category={category}
        />
      )}
    </div>
  );
};

export default Product;
