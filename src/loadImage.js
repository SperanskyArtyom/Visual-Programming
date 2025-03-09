async function loadImage(isbn) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    let response = await fetch(url);
    if(response.status === 429){
        await new Promise(resolve => setTimeout(resolve, 1000))
        return loadImage(isbn);
    }
    let imageData = await response.json();
    if (imageData.items && imageData.items[0].volumeInfo.imageLinks) {
        return imageData.items[0].volumeInfo.imageLinks.thumbnail;
    }
    else return 'no-image.png'; 
}

export default loadImage;