import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import StartSection from './components/StartSection/StartSection';

export default function App() {
  return (
    <div className="main-cont">
      <Navbar />
      <Hero />
      <StartSection />
    </div>
  )
}
