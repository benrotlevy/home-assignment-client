import { useContext } from "react";
import { authContext } from "../../context/context";
import { Photo } from "../photo/Photo";
import "./photosContainer.css";

export const PhotosContainer = () => {
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

    return <div className="photosTable">{createPhotos(8)}</div>;
};
