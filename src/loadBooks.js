async function loadBooks() {
    const bookResponse = await fetch('https://fakeapi.extendsclass.com/books');
    const bookData = await bookResponse.json();
    const books = [];
    for (let item of bookData){
        books.push({'isbn' : item.isbn, 'title' : item.title, 'authors' : item.authors})
    }
    
    return books;
}

export default loadBooks;