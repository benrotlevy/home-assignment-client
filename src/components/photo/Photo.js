import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./photo.css";

export const Photo = ({ photo }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="imageContainer" onClick={() => setShowModal(true)}>
                <img
                    src={photo.webformatURL}
                    alt={photo.type}
                    className="image"
                />
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Tags : {photo.tags}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        src={photo.webformatURL}
                        alt={photo.type}
                        className="image"
                    />
                    Downloads : {photo.downloads} <br />
                    Views : {photo.views} <br />
                    Likes : {photo.likes} <br />
                    Comments : {photo.comments} <br />
                    Collections : {photo.collections} <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
