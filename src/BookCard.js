import { useEffect, useState } from "react";

function BookCard(props){
    const [image, setImage] = useState('no-image.png');
    useEffect(() => {
        const fetchImage = async () => {
            let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${props.isbn}`;
            let imageResponse = await fetch(url);
            let imageData = await imageResponse.json();
            if (imageData.items && imageData.items[0].volumeInfo.imageLinks) {
                setImage(imageData.items[0].volumeInfo.imageLinks.thumbnail);
            }
        };
        fetchImage();
    }, [props.isbn]);
    return (
    <div className="book-card">
        <img src={image} alt={'Cover of ' + props.title}></img>
        <h2>{props.title}</h2>
        <p>{props.authors.join(', ')}</p>
    </div>
    );
};

export default BookCard;