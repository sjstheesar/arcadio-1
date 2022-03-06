import { Navbar, ArcadioMain, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <ArcadioMain />
      </div>
      <Footer />
    </div>
  );
}

export default App;