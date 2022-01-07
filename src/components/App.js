import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toys => setToys(toys))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    const updatedToys = [ ...toys, newToy]
    setToys(updatedToys)
  }

  function deleteToy(deletedToy) {
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  function addLikes(likedToy) {
    const updatedToys = toys.map(toy => toy.id === likedToy.id ? likedToy : toy)
    setToys(updatedToys)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        deleteToy={deleteToy}
        addLikes={addLikes}
      />
    </>
  );
}

export default App;
