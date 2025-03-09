import { useEffect, useState } from "react";

let delay = 0;

function BookCard(props){
    const [image, setImage] = useState('no-image.png');
    useEffect(() => {
        const fetchImage = async () => {
            let url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${props.isbn}`;
            let imageResponse = await fetch(url);
            if(imageResponse.status === 429){
                setTimeout(fetchImage, 1000 + 100*delay++);
                return;
            }
            delay = 0;
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