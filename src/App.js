import { useEffect, useState } from 'react';
import './App.css';
import Main from './Layout/Main/Main';
import Loading from './components/Loading/Loading';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="App">
      {loading ? <Loading /> :
        <>
          <Header />
          <Main />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
