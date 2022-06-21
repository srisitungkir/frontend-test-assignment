import React from "react";

function AsignInput() {
  const [text, setText] = React.useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <label htmlFor="text-input-asign">For Assgin</label>
      <input id="text-input-asign" data-testid="text-input-asign" value={text} onChange={handleOnChange} />
      <h2>{text}</h2>
    </>
  );
}
export default AsignInput;
