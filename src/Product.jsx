function Product({id, name, description, price, stock}){
    return <div>
        <h2>Producto #{id}</h2>
        <h2><strong>{name}</strong></h2>
        <p>{description}</p>
        <p><strong>Price: {price} $</strong></p>
        <p>Stock: {stock}</p>
    </div>
}

export function Navbar(){
    return <nav>
        navigation
    </nav>
}

export default Product