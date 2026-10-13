import './style.css';
import dragonball from './assets/dragonball.png';
import onepiece from './assets/one.png';
import attactontitan from './assets/attack on titan.jpg';
import demonslayer from './assets/demon slayer.jpg';

function App() {
  return (
    <section>
      <h2>LOUIREN CINEMA</h2>
      <p>Movie Playlist</p>

      <div className="movie-container">

        <div className="movie">
          <img src={dragonball} alt="Dragon Ball" />
          <h3>Dragon Ball</h3>
        </div>

        <div className="movie">
          <img src={onepiece} alt="One Piece" />
          <h3>One Piece</h3>
        </div>

        <div className="movie">
          <img src={attactontitan} alt="Attack on Titan" />
          <h3>Attack on Titan</h3>
        </div>

        <div className="movie">
          <img src={demonslayer} alt="Demon Slayer" />
          <h3>Demon Slayer</h3>
        </div>

      </div>
    </section>
  );
}

export default App;