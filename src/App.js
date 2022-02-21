import "./App.css";
import Header from "./components/Header";
import { Switch as Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:category" component={Category} />
          <Route path="/product/:category/:id" component={Product} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
