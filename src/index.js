import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu /> {/* Using pizza component several times here*/}
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header style={style} className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []; If empty array and we haven't used numPizzas > 0 then it will show 0 in DOM
  const numPizzas = pizzas.length;

  return (
    //Using in <Pizza />
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Rendering the lists which is a better way */}

      {/* We are doing ternary now rather than using conditional
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza name={pizza.name} photoName = {pizza.name}/> Rather than doing this we will do
            // Have to use key here otherwise we get a warning in console and this key should be unique
            <Pizza pizzaOjb={pizza} key={[pizza.name]} />
          ))}
        </ul>
      )} */}

      {numPizzas > 0 ? (
        //Using React Fragment
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              // <Pizza name={pizza.name} photoName = {pizza.name}/> Rather than doing this we will do
              // Have to use key here otherwise we get a warning in console and this key should be unique
              <Pizza pizzaOjb={pizza} key={[pizza.name]} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry We are working on the menu. Please come back later :)</p>
      )}

      {/* <Pizza
        photoName="pizzas/spinaci.jpg"
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        // price="10" to declare it as numer rather than string we use {}
        price={10}
      />

      <Pizza
        photoName="pizzas/funghi.jpg"
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
      /> */}
    </main>
  );
}
// function Pizza(props) { Destructing the props here
function Pizza({ pizzaOjb }) {
  // if (pizzaOjb.soldOut) return null;

  return (
    <li className={`pizza ${pizzaOjb.soldOut ? "sold-out" : ""}`}>
      {/* <img src="pizzas/spinaci.jpg" alt="Pizza Spinachi" /> */}
      <img src={pizzaOjb.photoName} alt={pizzaOjb.name} />
      <div>
        <h3>{pizzaOjb.name}</h3>
        <p>{pizzaOjb.ingredients}</p>

        {/* We can do it like this also but second way is better 
        {pizzaOjb.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaOjb.price}</span>
        )} */}
        <span>{pizzaOjb.soldOut ? "SOLD OUT" : pizzaOjb.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // We can use creatElement if not want to ue JSX
  // return React.createElement("footer", null, "We're currently open");
  const hour = new Date().getHours();
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We are open");
  // else alert("We are closed");
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're currently open */}
      {/* Using short cicuiting by using && operator */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>Sorry We are closed now. We will open at {openHour}:00</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 - {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
