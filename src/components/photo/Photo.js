import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./photo.css";

export const Photo = ({ photo }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <>
            <div className="imageContainer" onClick={() => setIsFlipped(true)}>
                <img src={photo.webformatURL} className="image" />
            </div>
            <Modal show={isFlipped} onHide={() => setIsFlipped(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Tags : {photo.tags}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Downloads : {photo.downloads} <br />
                    Views : {photo.views} <br />
                    Likes : {photo.likes} <br />
                    Comments : {photo.comments} <br />
                    Collections : {photo.collections} <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setIsFlipped(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
