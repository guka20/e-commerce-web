import React, { useEffect } from "react";
import { controllScreen } from "../../config/controllScreen";
export const Product = () => {
  useEffect(() => {
    controllScreen();
  }, []);
  return (
    <div>
      <div className="loading-board"></div>Product
    </div>
  );
};
