import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Home } from "./pages/Home"
import { Characters } from "./pages/Characters"
import { Favorites} from "./pages/Favorites"

//this is to allign with React 18
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Read more about Switch statements.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />}/>
            <Route path="characters" element={<Characters />}/>
            <Route path="favorites" element={<Favorites />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
