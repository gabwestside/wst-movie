import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {
  const score = 3.5;
  const count = 13;

  return (
    <div className="wsmovie-score-container">
      <p className="wsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars />
      <p className="wsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
