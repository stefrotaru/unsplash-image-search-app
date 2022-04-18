import React from "react";

const Input = (props) => {
  const { setImg, Submit } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Search images..."
        value={props.img}
        onChange={(e) => setImg(e.target.value)}
      />
      <button type="submit" onClick={Submit}>
        Search
      </button>
    </div>
  );
};

export default Input;
