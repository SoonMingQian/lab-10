import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {

    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:4000/api/books")
                .then(
                    (response) => {
                        setData(response.data.myBooks);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []
    );

    return (
        <div>
            <h2>Hello from my read components</h2>
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;