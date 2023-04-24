import { useRef } from "react";

function ExampleComponent() {
  const refValue = useRef(null);

  const handleButtonClick = () => {
    refValue.current = "new value";
    console.log(refValue.current);
  };

  return (
    <div>
      <p>Current ref value: {refValue.current}</p>
      <button onClick={handleButtonClick}>Update ref value</button>
    </div>
  );
}
