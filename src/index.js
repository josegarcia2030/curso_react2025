import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./Gretting";
import Product, { Navbar } from "./Product";
import {Button} from './Button'

/*
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  
    {/* <Saludo title="hola Mundo" name="jose" />
    <Saludo title="Hola React" name="enrique" />
    <Saludo title="Hola JSX" />
    <Saludo title="Hola JavaScript" />
    <Saludo title="Hola Fazt" />

    <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <Product 
        id={1} 
        name="Pantalla de 25 pulgadas" 
        description="Pantalla led de 55 pulgadas marca samsung"
        price={100}
        stock={35}
    />
    <Navbar /> */}

    {/**Este es un comentario que utilizaremos */}

    <Button text="Click me" />
    <Button text="Pay"/>
    <Button text="Hello Word"/>
    <Button names='Joe'/>
  </>
);
