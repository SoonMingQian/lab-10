import BookItem from "./bookItems";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book}></BookItem>
        }
    );
}

export default Books;