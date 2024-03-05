package com.example.graphqlserver;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import com.example.graphqlserver.model.Author;
import com.example.graphqlserver.model.Book;
import com.example.graphqlserver.repository.AuthorRepository;
import com.example.graphqlserver.repository.BookRepository;
import com.example.graphqlserver.services.BookService;


@Configuration
public class BooksAndAuthorsInitializer {
    
    @Bean
    @Order(2)
    CommandLineRunner authorsCommandLineRunner (AuthorRepository authorRepository) {
        return args -> {            
            Author author1 = new Author();
            Author author2 = new Author();
            Author author3 = new Author();

            author1.id=0;
            author1.firstName="Robert";
            author1.lastName="Frost";
            author1.books=BookService.getBooksByAuthorId(0);

            author2.id=1;
            author2.firstName="Martin";
            author2.lastName="Fowler";
            author2.books=BookService.getBooksByAuthorId(1);

            author3.id=2;
            author3.firstName="Kevin";
            author3.lastName="Gary";
            author3.books=BookService.getBooksByAuthorId(2);

            authorRepository.saveAll(Arrays.asList(author1, author2, author3));
        };
    }

    @Bean
    @Order(1)
    CommandLineRunner booksCommandLineRunner (BookRepository bookRepository) {
        return args -> {
            //initialize books first
            List<Book> books = new ArrayList<>();
            
            Book book1=new Book();
            book1.isbn="123456789";
            book1.title="The Road Not Taken";
            book1.authorId=0;
            books.add(book1);

            Book book2=new Book();
            book2.isbn="987654321";
            book2.title="To Kill a Mockingbird";
            book2.authorId=1;
            books.add(book2);

            Book book3=new Book();
            book3.isbn="456789123";
            book3.title="The Great Gatsby";
            book3.authorId=2;
            books.add(book3);

            bookRepository.saveAll(books);

        };        
    }
}
