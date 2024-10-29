import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([])
    const [newBooks, setNewBooks] = useState({
    title: '',
    author: ''
    });
    
const handleInputChange = (e) => {
    const {name,value} =e.target;
setNewBooks((prevbook) => ({
    ...prevbook,
    [name]:value
}));
};

const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks,newBooks]);
    setNewBooks({title:'', author:''});
}

    return (
        <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
     <input 
       type="text"
        name="title"
        placeholder="Book Title"
         value={newBooks.title}
         onChange={handleInputChange}
         />
        <input 
         type="text"
         name="author"
         placeholder="Author"
         value={newBooks.author}
         onChange={handleInputChange}
       />
  <button type="submit">Add Book</button>
   </form>
  </div>
  <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;