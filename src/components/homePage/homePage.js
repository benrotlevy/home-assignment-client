import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/context";
import { SearchBar } from "../searchBar/SearchBar";
import Spinner from "react-bootstrap/Spinner";
import "./homePage.css";
import { PhotosContainer } from "../photosContainer/PhotosContainer.js";

export const HomePage = () => {
    // at small aplications like that i dont need to use context, but its good for scalability - custom hooks etc.
    const { setPhotosData } = useContext(authContext);
    const [currentCategory, setCurrentCategory] = useState("work");

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getData = async (category, pageNum, limit) => {
        try {
            setError(false);
            setLoading(true);
            const { data } = await axios.get(
                `https://home-assignment-msapps-server.onrender.com/pictures/${category}?page=${pageNum}&limit=${limit}`
            );
            setLoading(false);
            console.log(data);
            setPhotosData(data);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        getData(currentCategory, 1, 9);
    }, [currentCategory]);

    return (
        <>
            <header className="header">
                <SearchBar
                    getData={getData}
                    setCurrentCategory={setCurrentCategory}
                    currentCategory={currentCategory}
                ></SearchBar>
            </header>
            <main className="main">
                {loading ? (
                    <div
                        style={{
                            margin: "5rem",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                        }}
                    >
                        <Spinner
                            animation="grow"
                            variant="secondary"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : (
                    <PhotosContainer error={error}></PhotosContainer>
                )}
            </main>
        </>
    );
};
