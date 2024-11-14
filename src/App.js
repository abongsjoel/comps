import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button rounded outline primary>
          TJ
        </Button>
      </div>
      <div>
        <Button rounded secondary>
          Titi
        </Button>
      </div>
      <div>
        <Button outline success>
          Kris
        </Button>
      </div>
      <div>
        <Button danger>Mich</Button>
      </div>
    </div>
  );
}

export default App;
