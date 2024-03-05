package com.example.graphqlserver.repository;

import com.example.graphqlserver.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


public interface AuthorRepository extends JpaRepository<Author, Integer> {

    
}