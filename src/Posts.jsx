import {VscBug, VscGlobe} from 'react-icons/vsc'



export const Posts = () =>{
    return <button onClick={() =>{
        //alert('obteniendo datos')
        //Js Async await
        //promesas js
        //callback
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))  
            .catch(error => console.error(error))
    }}>
        <VscBug />
        Traer Datos
        <VscGlobe />
    </button>
}