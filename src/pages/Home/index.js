import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styleHome.css";
const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2>Categories</h2>
      {categories.length === 0 && <div>Loading...</div>}
      {categories.length > 0 && (
        <nav>
          <ul>
            {categories.map((category) => {
              return (
                <li key={category} className="listHome">
                  <Link to={`/product/${category}`} className="linkHome">
                    {category}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Home;
