import React from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button rounded outline primary>
          <GoBell />
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
          <GoCloudDownload />
          Kris
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
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
