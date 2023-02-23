import Header from './Header';
import Random from './Random';
import Tag from './Tag';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='main-div'>
        <Random />
        <Tag />
      </div>
      <Footer />
    </div>
  );
}
export default App;
