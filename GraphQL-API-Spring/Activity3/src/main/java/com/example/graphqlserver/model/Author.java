package com.example.graphqlserver.model;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "authors")

public class Author {    

    public Author() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    public void setFirstName(String firstName){
        this.firstName=firstName;
    }

    @Id
    public int id;

    @Column(name = "firstName")
    public String firstName;

    @Column(name = "lastName")
    public String lastName;

    @OneToMany
    @JoinColumn(name="authorId")
    public List<Book> books = new ArrayList<>();

}
