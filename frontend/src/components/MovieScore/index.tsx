import MovieStars from "components/MovieStars";
import './styles.css';

type Props = {
  score: number;
  count: number;
}

function MovieScore({ score, count } : Props) {

  return (
    <div className="wsmovie-score-container">
      <p className="wsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score}/>
      <p className="wsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
