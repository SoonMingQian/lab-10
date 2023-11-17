import BookItem from "./bookItems";

//takes myBooks prop, array of books, maps over them to render BookItem components
function Books(props){

    return props.myBooks.map(
        (book)=>{
            //render a BookItem component and pass the book data as the myBook prop
            return <BookItem myBook={book} key={book._id}></BookItem>
        }
    );
}

export default Books;