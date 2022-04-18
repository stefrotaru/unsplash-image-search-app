import React from "react";

const Result = (props) => {
  const { res } = props;

  return (
    <div>
      {res.map((val) => {
        return (
          <>
            <img src={val.urls.small} alt="val.alt_description" />
          </>
        );
      })}
    </div>
  );
};

export default Result;
