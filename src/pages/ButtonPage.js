import React from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("You have clicked me");
  };

  return (
    <div>
      <div>
        <Button rounded outline primary onClick={handleClick}>
          <GoBell />
          Primary Rounded Outlined
        </Button>
      </div>
      <div>
        <Button rounded secondary>
          Secondary Rounded
        </Button>
      </div>
      <div>
        <Button outline success>
          <GoCloudDownload />
          Success Outlined
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          Warning Outlined
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
      <div>
        <Button rounded>Rounded</Button>
      </div>
      <div>
        <Button rounded outline success>
          Success Rounded Outlined
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
