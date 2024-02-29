import Nav from './Components/Navbar/Nav';
import HeroMain from './Components/Hero Section/HeroMain';
import ServicesMain from './Components/Service Section/ServicesMain';
import TestimonialsMain from './Components/Testimonial Section/TestimonialsMain';
import PricingMain from './Components/Pricing Section/PricingMain';
import ContactMain from './Components/Contact Section/ContactMain';
import FooterMain from './Components/Footer Section/FooterMain';




function App() {
  return (
    <div className="App">

      <div className='nav_section top-0 bg-blue-400 rounded-3xl h-20 z-50'>
      <Nav />
      </div>

      <div className='hero_section bg-[#f1f5f9] py-14'>
        <HeroMain/>
      </div>

      <div id='services' className='service_section py-9 lg:py-16 bg-[#e2e8f0]'>
        <ServicesMain/>
      </div>

      <div className='testimonial_section pt-12 pb-6 md:py-12 lg:py-16'>
        <TestimonialsMain />
      </div>

      <div className='pricing_section py-9 lg:py-16 bg-[#e2e8f0]'>
        <PricingMain />
      </div>

      <div className='contact_section pb-9 lg:pt-4 lg:pb-16 bg-[#e2e8f0] flex items-center relative'>
        <div className='w-full h-[300px] absolute bg-indigo-700 rounded-2xl  z-0'></div>
        <ContactMain />
      </div>

      <div className='footer_section bg-[#000000] pt-12 pb-7 lg:py-20'>
        <FooterMain />
      </div>


    </div>
  );
}

export default App;