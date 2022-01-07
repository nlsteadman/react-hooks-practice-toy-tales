import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, deleteToy, addLikes }) {

  const toyCards = toys.map((toy) => (
    <ToyCard 
      key={toy.id} 
      toy={toy} 
      deleteToy={deleteToy}
      addLikes={addLikes}
    />
  ));

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
