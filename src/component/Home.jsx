import { Link, Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";


const Home = () => {
  return (
    <div>
      <Header></Header>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;