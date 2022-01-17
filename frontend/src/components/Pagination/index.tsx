import { MoviePage } from "types/movie";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: Function;
};

function Pagination({ page, onChange }: Props) {
  return (
    <div className="wstmovie-pagination-container">
      <div className="wstmovie-pagination-box">
        <button
          className="wstmovie-pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow className="wstmovie-flip-horizontal" />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="wstmovie-pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
