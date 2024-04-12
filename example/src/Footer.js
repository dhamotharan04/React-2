import React from "react";

const Footer = ({ length }) => {
  const year = new Date();
  // console.log(year);
  return (
    <footer>
      {length} List {length <= 1 ? "item" : "items"}
    </footer>
  );
};

export default Footer;
  