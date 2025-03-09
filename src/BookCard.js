import { useEffect, useState } from "react";
import loadImage from "./loadImage";

function BookCard(props){
    const [image, setImage] = useState('no-image.png');
    useEffect(() => {
        const fetchImage = async () => {
            const imageUrl = await loadImage(props.isbn);
            setImage(imageUrl);
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
