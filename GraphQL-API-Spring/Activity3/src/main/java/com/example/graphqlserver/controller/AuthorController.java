package com.example.graphqlserver.controller;

import com.example.graphqlserver.dto.input.AddAuthorInput;
import com.example.graphqlserver.dto.input.UpdateAuthorFirstNameInput;
import com.example.graphqlserver.dto.output.AddAuthorPayload;
import com.example.graphqlserver.model.Author;
import com.example.graphqlserver.services.AuthorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class AuthorController {

    private final AuthorService authorService;

    
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @QueryMapping
    public List<Author> authors() {
        return authorService.getAuthors();
    }

    @QueryMapping
    public Author authorById(@Argument("id") int id) {
        return authorService.getAuthorById(id);
    }

    @MutationMapping
    public AddAuthorPayload addAuthor(@Argument AddAuthorInput input) {
        var author = authorService.save(input.firstName(), input.lastName());
        var out = new AddAuthorPayload(author);
        return out;
    }

    @QueryMapping
    public List<Author> getAuthorByLastName(@Argument("lastName") String lastName) {
        return authorService.getAuthorByLastName(lastName);
    }

    @MutationMapping
    public String updateAuthorFirstName(@Argument UpdateAuthorFirstNameInput input) {
        return authorService.updateAuthorFirstNameById(input.firstName(), input.id());
    }
}
