import './style.css';
import dragonball from './assets/dragonball.png';
import onepiece from './assets/one.png';

function App() {

  return (
    <section>
      <h2>LOUIREN CINEMA</h2>
      <p>Movie Playlist</p>

      <img src={dragonball} alt="" />
      <h3>Dragon Ball</h3>

      <img src={onepiece} alt="" />
      <h3>One Piece</h3>

    </section>
  )
}

export default App