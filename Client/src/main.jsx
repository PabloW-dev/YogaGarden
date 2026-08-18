//TO-DO: CLEAN BUILDERCONTEXT

import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { BuilderProvider } from "./contexts/BuilderContext.jsx";

import App from './App.jsx';
import "./styles/main.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
    <HashRouter>
        <BuilderProvider>
            <App />
        </BuilderProvider>
    </HashRouter>
);
