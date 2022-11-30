import { useEffect, useState } from "react";
import { Instructions } from "./components/Instructions";
import "./keypress.css";

export const ReactKeypress = ({ componentInfo }) => {

  const [data, setData] = useState({ componentsData: componentInfo });

//   function handleActive(el) {
//     let targetComponent = el;
//     let newArr = data.componentsData.map((el) => {
//       if (el.id === targetComponent.id) {
//         return { ...el, isActive: !el.isActive };
//       } else {
//         return el;
//       }
//     });
//     setData({ ...data, componentsData: newArr });
//   }



  function unmountComponentHandler() {
    let newArr = data.componentsData.filter((el) => el.id !== 4);
    setData({ ...data, componentsData: newArr });
  }

  return (
    <>
      <div className="keypress-main-container">
        {data.componentsData.map((item) => {
            return item.component
        })}
      </div>
      <div className="keypress-main-container">
        <button className="remove-btn" onClick={unmountComponentHandler}>
          Unmount D
        </button>
        <Instructions content={data.componentsData} />
      </div>
      {/* <button onClick={()=>console.log(data.componentsData)}>check</button> */}
    </>
  );
};
