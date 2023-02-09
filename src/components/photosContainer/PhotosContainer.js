import { useContext } from "react";
import { authContext } from "../../context/context";
import { Photo } from "../photo/Photo";
import "./photosContainer.css";

export const PhotosContainer = ({ error }) => {
    const { photosData } = useContext(authContext);
    const createPhotos = (num) => {
        if (photosData.results.length === 0)
            return (
                <div>
                    <h2>wer'e sory. we where not able to find a match</h2>
                    <h4>Try another Search</h4>
                </div>
            );

        const arr = [];
        for (let i = 0; i <= num && i < photosData.results.length; i++) {
            arr.push(
                <Photo
                    key={photosData.results[i].id}
                    photo={photosData.results[i]}
                />
            );
        }
        return arr;
    };

    if (error) return <h1>server didn't responde</h1>;

    return <div className="photosTable">{createPhotos(8)}</div>;
};
