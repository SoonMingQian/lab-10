import { useState } from "react";
function Create() {

    // Define state variables for title, author, and cover
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");

    // Define the form submission handler
    const handleSubmit = (e)=>{
        e.preventDefault() // Prevent the default form submission behavior

         // Log the values of title, cover, and author to the console
        console.log("Title: "+title+ " Cover: "+cover+" Author: "+author);
    }
    return (
        <div>
            <h2>Hello from my create components!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Add Book"></input>
            </form>
        </div>
    );

}

export default Create;