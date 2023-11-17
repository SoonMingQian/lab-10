import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {

    // Initialize a state variable to hold the data
    const [data, setData] = useState([]);

    useEffect(
        () => {
            //fetch data from the server
            axios.get("http://localhost:4000/api/books")
                .then(
                    (response) => {
                        setData(response.data);
                    }
                )
                .catch(
                    (error) => {
                        // Log any errors that occur during the fetch
                        console.log(error); 
                    }
                )
        }, [] // The empty dependency array ensures this effect runs only once when the component mounts
    );

    return (
        <div>
            <h2>Hello from my read components</h2>
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;