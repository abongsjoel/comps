function Accordion({ items }) {
  const rendereditems = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{rendereditems}</div>;
}

export default Accordion;
