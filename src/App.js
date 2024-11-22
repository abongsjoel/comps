import React from "react";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      label: "Can I use React on a project?",
      content: "You can use React on any project you want",
    },
    {
      label: "Can I use JavaScript on a project?",
      content: "You can use JavaScript on any project you want",
    },
    {
      label: "Can I use TypeScript on a project?",
      content: "You can use TypeScript on any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
