import React from "react";
import Button from "./Button";
const ButtonList = () => {
  return (
    <div className="p-4 space-x-3">
      <Button name="All"/>
      <Button name="Music"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="News"/>
      <Button name="Mixes"/>
      <Button name="Game shows"/>
    </div>
  );
};

export default ButtonList;
