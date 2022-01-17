import { Link } from "react-router-dom";
import MovieScore from "components/MovieScore";
import "./styles.css";
import { Movie } from "types/movie";

type Props = {
  movie: Movie;
}

function MovieCard( { movie } : Props) {

  return (
    <div>
      <img
        className="wstmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="wstmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />

        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary wstmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
