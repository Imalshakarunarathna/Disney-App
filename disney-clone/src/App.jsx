

import GenreMovieList from './Components/GenreMovieList';
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse';
import Slider from './Components/Slider';

function App() {


  return (
  
      <div className="App">
         <Header/>
         <Slider/>
         <ProductionHouse/>
         <GenreMovieList/>
      </div>
     
    
  );
}

export default App
