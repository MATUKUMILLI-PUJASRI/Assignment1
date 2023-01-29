import lizard from './lizard.jpg';
import './App.css';

function App() {
  return (
    <div className="card">
                <div className="card-image">
                <img src={lizard}/>
                </div>
                <div>
                <div className="card-title">Lizard</div>
                <div className="card-description">Lizard are a widespread group of squamate reptiles, 
                with over 6,000 species,ranging across all continents except Antartica.</div>
                </div>
                <div>
                  <a href="#">SHARE</a><a href="#">LEARN MORE</a>
                </div>
            </div>
  );
}

export default App;
