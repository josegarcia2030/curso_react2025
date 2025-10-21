import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from './Gretting'
import Product, {Navbar} from './Product'

/*
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement);
*/
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <>
    <Saludo />
    <UserCard />
    <Product />
    <Navbar />
    </>
);