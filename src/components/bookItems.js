import Card from 'react-bootstrap/Card';

function BookItem(props) {

    return (
        <div>
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.thumbnailUrl}></img>
                        <footer>
                            {props.myBook.authors[0]}
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>

    );

}

export default BookItem