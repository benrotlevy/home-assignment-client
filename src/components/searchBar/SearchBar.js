import { useContext, useState } from "react";
import { authContext } from "../../context/context";
import Button from "react-bootstrap/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./searchBar.css";

export const SearchBar = ({ getData, setCurrentCategory, currentCategory }) => {
    const { photosData } = useContext(authContext);
    const [inputValue, setInputValue] = useState("");

    const sendRequest = () => {
        if (inputValue) setCurrentCategory(inputValue);
    };

    const handleEnterKey = (e) => {
        if (e.key !== "Enter") return;
        sendRequest();
    };

    const handleInput = ({ target }) => {
        setInputValue(target.value);
    };

    return (
        <div className="navBar">
            <Button
                variant="secondary"
                style={{
                    visibility: photosData.previous ? "visible" : "hidden",
                }}
                onClick={() =>
                    getData(
                        currentCategory,
                        photosData.previous.page,
                        photosData.previous.limit
                    )
                }
            >
                Prev
            </Button>
            <div style={{ display: "flex" }}>
                <input
                    value={inputValue}
                    placeholder="Search photos by category"
                    onKeyDown={handleEnterKey}
                    onChange={handleInput}
                />
                <Button
                    variant="secondary"
                    style={{
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={() => sendRequest()}
                >
                    <SearchIcon />
                </Button>
            </div>
            <Button
                variant="secondary"
                style={{
                    visibility: photosData.next ? "visible" : "hidden",
                }}
                onClick={() =>
                    getData(
                        currentCategory,
                        photosData.next.page,
                        photosData.next.limit
                    )
                }
            >
                Next
            </Button>
        </div>
    );
};
