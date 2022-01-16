package com.westside.westsidemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.westside.westsidemovie.entities.Score;
import com.westside.westsidemovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
