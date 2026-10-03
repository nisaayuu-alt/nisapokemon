import { useState } from "react";
import "./App.css";
import Pokemon from "./data/pokemon.json";
import { CardComponent } from "./assets/_components/card";

function App() {
  return (
    <main className="p-6 grid grid-cols-4 mx-auto 2-full max-w-7x1 gap-4">
      {Pokemon.map((item) => {
        return (
          <CardComponent
            key={item.title}
            judul={item.title}
            deskripsi={item.description}
            gambar={item.image}
          />
        );
      })}
    </main>
  );
}

export default App;
