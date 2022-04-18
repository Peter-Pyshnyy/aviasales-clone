import React from "react";
import "../styles/card.css";
import RadioButton from "./primitive/RadioButton";

const Airlines = () => {
  const [favorite, setFavorite] = React.useState("Все");

  const handleAllChange = () => {
    setFavorite("Все");
  };

  const handleS7Change = () => {
    setFavorite("S7  Airlines");
  };

  const handleXiChange = () => {
    setFavorite("XiamenAir");
  };

  return (
    <div className="Card RBCard">
      <h3>Количество пересадок</h3>
      <div className="Radiobox">
        <RadioButton
          label="Все"
          value={favorite === "Все"}
          onChange={handleAllChange}
        />
        <RadioButton
          label="S7  Airlines"
          value={favorite === "S7  Airlines"}
          onChange={handleS7Change}
        />
        <RadioButton
          label="XiamenAir"
          value={favorite === "XiamenAir"}
          onChange={handleXiChange}
        />
      </div>
    </div>
  );
};

export default Airlines;
