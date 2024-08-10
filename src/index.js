import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      color="blue"
      size={30}
      messages={["okay", "good", "bad", "ok", "put"]}
    />
    <StarRating maxRating={10} defaultRating={4} /> */}
  </React.StrictMode>
);
