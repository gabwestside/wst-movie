package com.westside.westsidemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.westside.westsidemovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
