import Hero from '../components/home/Hero';
import QuickInfo from '../components/home/QuickInfo';
import About from '../components/home/About';
import FeaturedMenu from '../components/home/FeaturedMenu';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <QuickInfo />
      <About />
      <FeaturedMenu />
      <Testimonials />
    </>
  );
};

export default Home;