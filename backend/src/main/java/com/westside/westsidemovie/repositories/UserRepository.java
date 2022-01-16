package com.westside.westsidemovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.westside.westsidemovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
