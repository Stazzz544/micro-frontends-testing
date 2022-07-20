import React from "react";

export const TextComponent = ({someText}) => {
  return (
    <div>
        <p>child component Textomponent.js:</p>
        <p>Text from props:  {someText} - (приходят корректно)</p>
    </div>
  );
};

export default TextComponent;
