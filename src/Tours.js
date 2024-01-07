import React from "react";
import Tour from "./Tour";

const Tours = ({ tour }) => {
  return (
    <div>
      <h1>Our Tours</h1>
      { tour.map((data, i) => {
        return(
            <>
          <Tour key={i} data={data} />;
            </>
        )
        })}
    </div>
  );
};

export default Tours;
