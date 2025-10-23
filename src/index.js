import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./Gretting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaksCard } from "./Taks";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";
//import {useState} from 'react'

/*
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  //funcion flecha
  console.log(e.target.value);
};

/* const user = [
  {
    id: 1,
    name: "Ryan ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Marcos",
    image: "https://robohash.org/user3",
  },
]; */


function Counter(){

  //const [counter, setCounter] = useState(10)
  //let counter = 10;

  const [mensaje, setMensaje] = useState('')


  return (
  <div>
    {/* <h1>Counter: {counter}</h1>
    <button onClick={() => {
      //counter += 10;
      setCounter(counter + 1)
    }}>
      Sumar
    </button>
    <button onClick={() => {
      setCounter(counter - 1)
    }}>
      Restar
    </button>
    <button onClick={() => {
      setCounter(1000)
    }}>
      Reiniciar
    </button> */}

    <input onChange={(e) => setMensaje(e.target.value)}/>
    <button onClick={()=> {
      alert('El mensaje es: '+ mensaje)
    }}>
        Guardar
    </button>

  </div>
  )
}


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

    {/* <Button text="Pay"/>
    <Button text="Hello Word"/>
    <Button names='Joe'/> */}

    {/* <Saludar /> */}

    {/* <TaksCard ready={true}/>
    
    <Button text="Click me" />
    
    <input type="text" onClick={function(){
      console.log('input seleccionado')
    }}></input>
    <input type="text" id="hello" onChange={handleChange} onDoubleClick={()=> {
      console.log('doble click')
    }}></input>

    <form onSubmit={(e)=>{
        e.preventDefault()
        //console.log('enviado')
        alert('enviado')
      }}>
      <h1>Registro de Usuarios</h1>
      <button>Send</button>
    </form>

    <Posts /> */}

    {/* {user.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
      );
    })} */}

    <Counter />
  </>
);
