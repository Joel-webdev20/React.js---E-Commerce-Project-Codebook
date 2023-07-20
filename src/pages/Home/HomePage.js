import { Home } from "./components/Home";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  return (
    <main>
      <Home />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
    
  )
}
