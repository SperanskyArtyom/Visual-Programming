async function loadBooks() {
    const bookResponse = await fetch('https://fakeapi.extendsclass.com/books');
    const bookData = await bookResponse.json();
    const books = [];
    for (let item of bookData){
        let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${item['isbn']}`;
        let imageResponse = await fetch(url);
        let imageData = await imageResponse.json();
        let image;
        if (imageData.items && imageData.items[0].volumeInfo.imageLinks){
            image = imageData.items[0].volumeInfo.imageLinks.thumbnail;
        }
        else {
            image = 'no-image.png';
        }
        books.push({image, 'title' : item.title, 'authors' : item.authors})
    }
    
    return books;
}

export default loadBooks;