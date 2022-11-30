import "../keypress.css";
import { useEffect, useState } from "react";

export const ReactKeypressItem = ({ itemData, shortcuts }) => {

    let defaultShortcut = shortcuts[0]

    let isActive=false

  useEffect(() => {
    // console.log("changed")
    var listener = new window.keypress.Listener();

    listener.simple_combo( defaultShortcut, function () {
    //   let newArr = data.componentsData.map((el) => {
    //     return { ...el, isActive: !el.isActive };
    //   });
    //   setData({ ...data, componentsData: newArr });
    // console.log("run")
    });
  });

  return (
    <div

      className={`keypress-item-main-wrapper ${
        isActive ? "active-bg" : "nonactive-bg"
      }`}
    //   onClick={() => handleActive(itemDetails)}
    >
        {itemData}
      
    </div>
  );
};
