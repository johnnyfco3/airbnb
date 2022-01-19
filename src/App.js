import NavBar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import info from './data';
import './App.css';

function App() {
  const cardInfo = info.map((element, key)=>{
    return <Card key={key} 
              element={element}
              //{...element} this also works but in card, 
              //no need for brackets on props params
              />
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className='cards-section'>
        {cardInfo}
      </div>
    </div>
  );
}

export default App;
