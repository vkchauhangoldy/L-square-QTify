import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import SongsSection from './Components/SongSection/SongsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div style={{ padding: '20px' }}>
        <Section
          title="Top Albums"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
          type="album"
        />
        <Section
          title="New Albums"
          fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
        />
        <SongsSection />
      </div>
    </div>
  );
}

export default App;
