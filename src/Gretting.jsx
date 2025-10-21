export function Saludo({ title, name = "Default User" }) {
  console.log(title);
  return (
    <div>
      <h1>
        Componente React - {title} - {name}
      </h1>
    </div>
  );
}

export function UserCard({name, amount, married, address, greet}) {
  console.log(name, amount, married, greet)
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
