import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {

    // Initialize a state variable to hold the data
    const [data, setData] = useState([]);


    useEffect(
        () => {
            // Use the useEffect hook to fetch data when the component mounts
            axios.get("https://jsonblob.com/api/jsonblob/1161593332966481920")
                .then(
                    (response) => {
                        setData(response.data.books); // Update the state with the fetched data
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