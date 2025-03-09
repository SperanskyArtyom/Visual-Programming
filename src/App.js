import loadBooks from "./loadBooks";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]); // Создаем состояние для книг

  useEffect(() => {
    const fetchBooks = async () => {
      const loadedBooks = await loadBooks(); // Ждем загрузки книг
      setBooks(loadedBooks); // Сохраняем загруженные книги в состояние
    };

    fetchBooks(); // Вызываем функцию загрузки
  }, []);

  return (
    <div className="cards">
      {books.map(book => (
        <BookCard
        key={book.title}
        image={book.image}
        title={book.title}
        authors={book.authors}/>
      ))}
    </div>
  );
}

export default App;
