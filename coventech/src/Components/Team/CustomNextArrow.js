import React from "react";

const CustomNextArrow = (props) => (
    <button
      onClick={props.onClick}
      className="slick-arrow slick-next"
      style={{ right: "-30px", zIndex: 1 }}
    >
      {">"}
    </button>
  );
  
export default CustomNextArrow;