import { memo } from "react";

const Kid = (props) => {
  console.log("anak");
  return (
    <div>
      <h1>hitung anak : {props.countChild}</h1>
      <button onClick={props.handleChild}>+</button>
    </div>
  );
};

export default memo(Kid);
