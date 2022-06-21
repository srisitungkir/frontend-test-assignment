import React from "react";
import { formatSentence } from "./formatSentence";
function CustomInput() {
  const [text, setText] = React.useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <label htmlFor="text-input">Type Something</label>
      <input id="text-input" data-testid="text-input" value={text} onChange={handleOnChange} />
      <p>{formatSentence(text)}</p>
    </>
  );
}
export default CustomInput;
