function BookCard(props){
    return (
    <div class="book-card">
        <img src={props.image} alt={"Cover of {props.title}"}></img>
        <h2>{props.title}</h2>
        <p>{props.authors.join(', ')}</p>
    </div>
    );
};

export default BookCard;