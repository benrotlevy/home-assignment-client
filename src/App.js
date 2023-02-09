import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Error404 } from "./components/error404/Error404";
import { HomePage } from "./components/homePage/homePage";
import { SearchBar } from "./components/searchBar/SearchBar.js";
import { AuthProvider } from "./context/context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route component={Error404} />
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
