import logo from "./logo.svg";
import "./App.css";
import CotizacionForm from "./components/CotizacionForm";
import ProductCard from "./components/ProductCard";
import imgBotella from "./assets/botella.jpg";
import imgTapon from "./assets/tapon.jpg";

import { useEffect, useState } from "react";

function App() {
  const productsList = [
    {
      id: 1,
      name: "Botella de Leche de vidrio",
      price: 25.0,
      image: imgBotella,
      quantity: 1,
    },
    {
      id: 2,
      name: "Tapon sintetico con cabeza de madera",
      price: 15.0,
      image: imgTapon,
      quantity: 1,
    },
  ];

  const [productsSelected, setProductsSelected] = useState([]);

  useEffect(() => {
    
    const dataProducts = JSON.parse(localStorage.getItem("PRODUCTS_SELECTED")) || [];
    if (dataProducts.length < 1) {
      localStorage.setItem("PRODUCTS_SELECTED", JSON.stringify(productsList));
    } else {
      setProductsSelected(dataProducts);
    }
  }, []);


  return (
    <div className="p-8">
      <h1 className="font-light text-5xl">Completa los datos</h1>
      <p className="my-4 flex space-x-3">
        <span className="font-extralight">Productos Seleccionados</span>
        <span className="font-bold"> {">"}</span>
        <span className="font-bold"> Datos</span>
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <CotizacionForm />
        </div>
        <div className="col-span-1">
          <div className="p-4 grid grid-cols-2">
            {productsSelected.length > 0 && productsSelected.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
