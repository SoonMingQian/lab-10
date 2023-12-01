import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

//takes myBook as prop and renders book information using Bootstrap card
function BookItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/"+props.myBook._id} className='btn btn-primary'>Edit</Link>
                        <Button variant='danger' onClick={
                            (e) => {
                                axios.delete('http://localhost:4000/api/books/'+props.myBook._id)
                                .then((res)=>{
                                    let reload = props.reload();
                                })
                                .catch();
                            }
                        }>Delete</Button>
            </Card>
        </div>

    );

}

export default BookItem