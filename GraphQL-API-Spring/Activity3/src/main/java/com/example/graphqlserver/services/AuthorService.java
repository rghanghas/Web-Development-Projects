package com.example.graphqlserver.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.example.graphqlserver.model.Author;
import com.example.graphqlserver.model.Book;
import com.example.graphqlserver.repository.AuthorRepository;



@Service
public class AuthorService {
    private final AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public List<Author> getAuthors() {
        return authorRepository.findAll();
    }

    public Author getAuthorById(int id) {
        for (Author author : getAuthors()) {
            if (author.getId() == id) {
                return author;
            }
        }
        return null;
    }

    public Author save(String firstName, String lastName) {
        List<Book> book = new ArrayList<>();
        int nextId = getAuthors().isEmpty() ? 0 : getAuthors().get(getAuthors().size() - 1).getId() + 1;
        Author newAuthor = new Author();
        newAuthor.id=nextId;
        newAuthor.firstName=firstName;
        newAuthor.lastName=lastName;
        newAuthor.books=book;
        this.getAuthors().add(newAuthor);
        return newAuthor;
    }

    public List<Author> getAuthorByLastName(String lastName) {
        List<Author> lastAuth = new ArrayList<>();
        for (Author author: this.getAuthors()) {
            if(author.getLastName().equalsIgnoreCase(lastName)) {
                lastAuth.add(author);
            }
        }
        return lastAuth;
    }

    public ArrayList<Integer> getAuthorIDByFirstName(String firstName) {
        ArrayList<Integer> lastAuth = new ArrayList<>();
        for (Author author: getAuthors()) {
            if(author.getFirstName().equalsIgnoreCase(firstName)) {
                lastAuth.add(author.getId());
            }
        }
        return lastAuth;
    }

    public String updateAuthorFirstNameById(String newFirstName, int authorId) {
        String oldFirstName;
        for(Author author: getAuthors()) {
            if (author.getId() == authorId) {
                oldFirstName = author.getFirstName();
                Author newlyNamed=authorRepository.getReferenceById(authorId);
                newlyNamed.setFirstName(newFirstName);
                authorRepository.save(newlyNamed);
                return oldFirstName;
            }
        }
        return null;
    }
}
    



