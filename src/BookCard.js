function BookCard(props){
    return (
    <div className="book-card">
        <img src={props.image} alt='Not found'></img>
        <h2>{props.title}</h2>
        <p>{props.authors.join(', ')}</p>
    </div>
    );
};

export default BookCard;