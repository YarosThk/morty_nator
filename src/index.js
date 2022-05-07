import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';


//this is to allign with React 18
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Read more about Switch statements.
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
