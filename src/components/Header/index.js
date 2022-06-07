import "./style.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className="linkHeader"><img src="https://tse3.mm.bing.net/th?id=OIP.hobUUEmtZOrZSGa5OrvU7wHaDq&pid=Api&P=0&w=308&h=152" alt="Amazon"></img></Link>
    </header>
  );
};

export default Header;
