async function loadBooks() {
    const response = await fetch('https://fakeapi.extendsclass.com/books');
    const bookData = await response.json();
    const books = [];
    for (let item of bookData){
        books.push({'isbn' : item.isbn, 'title' : item.title, 'authors' : item.authors})
    }
    
    return books;
}

export default loadBooks;