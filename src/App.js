import './App.css';
import DcAbout from './components/dcAbout/DcAbout';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Proekti from './components/proekti/Proekti';
import Regist from './components/registratsi/Regist';
import Result from './components/rezultati/Result';
import Zadachi from './components/zadachi/Zadachi';

function App() {
  return (
    <div className="App">
      <Header/>
      <Proekti/>
      <Zadachi/>
      <Regist/>
      <Result/>
      <DcAbout/>
      <Footer/>
    </div>
  );
}

export default App;
  