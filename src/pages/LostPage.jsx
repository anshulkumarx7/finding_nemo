import React, { useState } from "react";

import Card from "../Components/Lost/Card";
import NavBar from "../Components/NavBar";
import ListItem from "../Components/Lost/ListItem";
import "../styles/Lost/Card.css";

const LostPage = () => {
  const NavData = {
    title: "Finding Nemo",
    uno: "Lost Something ?",
    dos: "Contact Us",
    tres:"Found Something ?",
  };
  const [lostState, setLostState] = useState(false);
  const updateItemLost = () => {
    setLostState(!lostState);
  };

  return (
    <div className="lostCard">
      <NavBar data={NavData} updateItemLost={updateItemLost} />
      {lostState && <Card updateItemLost={updateItemLost} />}
      {/* <LostSearch /> */}
      <ListItem />
    </div>
  );
};

export default LostPage;
