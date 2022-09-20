import { memo } from "react";

const Boy = () => {
    console.log('boy');
    
  return (
    <div>
      <h1>ohh boy</h1>
    </div>
  );
};

export default memo(Boy);
