import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/AboutSection';
import Engagements from './components/Engagements';
import Mission from './components/Mission';
import Services from './components/Services';
import RenovationGlobale from './components/RenovationGlobale';
import IsolationThermique from './components/IsolationThermique';
import EnergyRenovationSection from './components/EnergyRenovationSection';
import RenovationProcess from './components/RenovationProcess';
import Qualifications from './components/Qualifications';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import RealisationsPreview from './components/RealisationsPreview';



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Engagements />
        <Mission />
        <Services />
        <RealisationsPreview />
        <RenovationGlobale />
        <IsolationThermique />
        <EnergyRenovationSection />
        <RenovationProcess />
        <Qualifications />
        <FAQ /> 
        <ContactForm />
        <Footer />


      </main>
    </>
  );
}
