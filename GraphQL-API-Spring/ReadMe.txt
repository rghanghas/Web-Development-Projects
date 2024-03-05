You can run these queries directly for every API call for both Activity 2 and 3.

1)
query {
  getBooksByAuthorId(id: 0){
    isbn
    title
  }
}

2)
query {
	getAuthorByLastName(lastName: "Gary"){
    id
    firstName
  }
}

3)
mutation{
  updateAuthorFirstName(input: {firstName:"Rahul" id:0})
}

// Check the updated Author last name with this query:

query {
    authorById(id: 0) {
        id
        lastName
        firstName
        books {
            isbn
            title
        }
    }
}

4)
mutation{
  deleteBookByISBN(isbn: "123456789")
}

// Check if the Book is deleted using this query:

query {
    books {
        isbn
        title
        authorId
    }
}

5)
query {
  getBookTitlesByAuthorFirstName(firstName: "Kevin")
}