import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";
import { Box } from "@mui/material";
import NavigateButtons from "../navigateButtons/NavigateButtons";
import FilterProducts from "../filterProducts/FilterProducts";
import ProductSection from "../productsSection/ProductSection";
import Footer from "../footer/Footer";

function Main() {
  return (
    <Box>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <FilterProducts />
      <ProductSection />
      <Footer />
    </Box>
  );
}

export default Main;
