import React from "react";
import { useState } from "react";

export default function Practice() {
  const [count, setcount] = useState(0);


  return (
    <div>
     
        <p onClick={setcount(8)}>
          {count}
        </p>
    
    </div>
  );
}
