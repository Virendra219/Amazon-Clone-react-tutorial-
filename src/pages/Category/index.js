import { useEffect } from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styleCategory.css";

const DisplayProduct = ({ cat, id, title, image, price, rate, count }) => {
  return (
    <li className="cardCategory">
        <div>
          <Link to={`/product/${cat}/${id}`} className="linkC">
            <h3>{title}</h3>
          </Link>
        </div>
        <div>
          <Link to={`/product/${cat}/${id}`}>
            <img src={image} alt={title} className="imgCategory"/>
          </Link>
        </div>
        <div className="contentCategory">
          <p className="pl">Price: {price}</p>
          <p className="pr">
            Rating: {rate} ({count})
          </p>
        </div>
    </li>
  );
};

const Category = () => {
  let { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <ul className="ulCategory">
        {products.length === 0 && <div>Loading {category}...</div>}
        {products.length > 0 &&
          products.map(({ id, title, price, image, rating }) => {
            return (
              <DisplayProduct
                cat={category}
                id={id}
                title={title}
                price={price}
                image={image}
                rate={rating.rate}
                count={rating.count}
              />
            );
          })}
      </ul>
      <div>
        <Link to="/" className="link">Go to home</Link>
      </div>
    </div>
  );
};

export default Category;
