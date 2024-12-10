import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "l1",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want",
    },
    {
      id: "l2",
      label: "Can I use JavaScript on a project?",
      content: "You can use JavaScript on any project you want",
    },
    {
      id: "l3",
      label: "Can I use TypeScript on a project?",
      content: "You can use TypeScript on any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
