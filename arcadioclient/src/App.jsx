import { Navbar, ArcadioMain, ArcadioServices, Footer } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <ArcadioMain />
        <ArcadioServices />
      </div>
      <Footer />
    </div>
  );
}

export default App;