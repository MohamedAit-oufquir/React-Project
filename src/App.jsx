import './App.css'
import MovieCard from './components/ShowCard';

function App() {

  return (
    <>
      <MovieCard Movie={{ title: "Tim's Film", release_date: "2024" }} />
      {/* <MovieCard Movie={{ title: "Tim's Film", release_date: "2024" }} />
      <MovieCard Movie={{ title: "Tim's Film", release_date: "2024" }} />
      <MovieCard Movie={{ title: "Tim's Film", release_date: "2024" }} /> */}

    </>
  );
}

export default App
