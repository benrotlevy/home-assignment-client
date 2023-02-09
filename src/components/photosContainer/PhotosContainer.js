import { useContext } from "react";
import { authContext } from "../../context/context";
import { Photo } from "../photo/Photo";
import "./photosContainer.css";

export const PhotosContainer = ({ error }) => {
    const { photosData } = useContext(authContext);
    const createPhotos = (num) => {
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

    if (error) return <h1>server didn'n responde</h1>;

    return <div className="photosTable">{createPhotos(8)}</div>;
};
