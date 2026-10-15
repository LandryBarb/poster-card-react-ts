//App.tsx
import {PosterCard} from './components/PosterCard';
import './App.css';

function App() {
  return(
    <main>
      <PosterCard title='Run For Time' runtimeMinutes={136} rating={4.5} genres={[ 'Action', 'Adventure', 'Sci-Fi']} />

    </main>
  )
}

export default App;