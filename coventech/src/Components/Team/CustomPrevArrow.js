import React from "react";

const CustomPrevArrow = (props) => (
    <button
      onClick={props.onClick}
      className="slick-arrow slick-prev"
      style={{ left: "-30px", zIndex: 1 }}
    >
      {"<"}
    </button>
  );
export default CustomPrevArrow;