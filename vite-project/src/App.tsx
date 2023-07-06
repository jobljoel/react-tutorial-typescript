import { useState } from "react";
import Alert from "./components/Alert";
import { ButtonComponent } from "./components/ButtonComponent";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <span>My Alert</span>
        </Alert>
      )}
      <ButtonComponent
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Hello world text on button
      </ButtonComponent>
    </div>
  );
}
export default App;
