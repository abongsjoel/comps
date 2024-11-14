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
        <Button warning outline>
          Mich
        </Button>
      </div>
      <div>
        <Button danger>Ngwe</Button>
      </div>
      <div>
        <Button rounded>Mangwi</Button>
      </div>
      <div>
        <Button rounded outline success>
          Baby Mas
        </Button>
      </div>
    </div>
  );
}

export default App;
