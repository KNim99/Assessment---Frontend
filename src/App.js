// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
// import AppServices from './components/services';
import AppBrands from './components/brands';
import AppProducts from './components/products';
import AppTestimonials from './components/testimonials';
// import AppPricing from './components/pricing';
import AppBlog from './components/blog';
// import AppContact from './components/contact';
import AppFooter from './components/footer';
import AppVideo from './components/video';
import AppNews from './components/news';

import './App.css';

function App() {
  return (
    <div className="App">
<header>
  <AppHeader></AppHeader>
</header>
<main>
  <AppHero></AppHero>
  <AppBlog></AppBlog>
  <AppAbout></AppAbout>
  <AppProducts></AppProducts>
  <AppVideo></AppVideo>
  <AppTestimonials></AppTestimonials>
  <AppBrands></AppBrands>
  <AppNews></AppNews>
  {/* <AppServices></AppServices>
  <AppPricing></AppPricing>
  <AppContact></AppContact> */}
  <AppFooter></AppFooter>
</main>
    </div>
  );
}

export default App;
