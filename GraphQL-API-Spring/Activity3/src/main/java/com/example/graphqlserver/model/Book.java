package com.example.graphqlserver.model;


import jakarta.persistence.*;


@Entity
@Table(name = "books")
public class Book {

    public Book(){

    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getAuthorId() {
        return authorId;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    @Id
    public String isbn;

    @Column(name = "title")
    public String title;

    @JoinColumn(name = "authorId", referencedColumnName = "id")
    public int authorId;
}
