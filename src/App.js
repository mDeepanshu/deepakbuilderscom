import logo from "./logo.svg";
import "./App.css";

import Header from "./features/header/header";
import Home from "./features/home/home";
import OurValues from "./features/our-values/our_values";
import Footer from "./features/footer/footer";
import FeaturedProjects from "./features/featured-projects/featured-projects";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <OurValues></OurValues>
      <FeaturedProjects></FeaturedProjects>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
