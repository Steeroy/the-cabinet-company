import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

import './App.css';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <header>
        <NavBar />
      </header>

      {/* Home Content */}
      <main>
        <div className="main__content">
          <Hero />
          <Testimonial />
          <Work />
          <Services />
          <About />
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
