import React from "react";
import "./Menu.css"; // Archivo CSS para los estilos
import PizzaImage from "./images/PIZZA.jpg";
import CarbonaraImage from "./images/CARBONARA.jpeg";
import SaladImage from "./images/ENSALADA.jpeg";
import TiramisuImage from "./images/TIRAMISU.jpeg";

const Menu = () => {
  const menuItems = [
    {
      name: "Pizza Margherita",
      price: "$12.00",
      ingredients: ["Tomato", "Mozzarella", "Basil", "Olive Oil"],
      image: PizzaImage, // Ruta a la imagen de ejemplo
    },
    {
      name: "Spaghetti Carbonara",
      price: "$15.00",
      ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan"],
      image: CarbonaraImage, // Ruta a la imagen de ejemplo
    },
    {
      name: "Caesar Salad",
      price: "$10.00",
      ingredients: ["Lettuce", "Caesar Dressing", "Croutons", "Parmesan"],
      image: SaladImage, // Ruta a la imagen de ejemplo
    },
    {
      name: "Tiramisu",
      price: "$7.00",
      ingredients: ["Mascarpone", "Coffee", "Ladyfingers", "Cocoa Powder"],
      image: TiramisuImage, // Ruta a la imagen de ejemplo
    },
  ];

  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <div className="menu-card-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-card-info">
              <h3>{item.name}</h3>
              <p className="menu-price">{item.price}</p>
              <p className="menu-ingredients">
                <strong>Ingredients:</strong> {item.ingredients.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
