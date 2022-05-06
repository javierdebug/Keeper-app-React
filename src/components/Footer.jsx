import React from "react";
// import "../styles.css";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

export default function Footer() {
  return (
    <footer>
       <p>Copyright ⓒ {currentYear}</p> 
    </footer>
  );
}