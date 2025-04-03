import "./Ev.css";

export const EventHandling = () => {
  // handleButtonClick Function Define

  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (name) => {
    console.log(`Hey ${name}, Welcome`);
  };
  return (
    <>
      {/* Function Components with Named Function */}
      <button onClick={handleButtonClick}>click me</button>
      <hr />

      {/* Using Fat Arrow Function */}
      {/* In react, Jyare fatArrow function use kari tyare callback function ni ander te function ne call karvo pade chhe.jyare function call kari tyare react by default event object pass karto nathi tene as argument tarike pass karvo pade chhe. */}
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      <hr />

      {/* Inline Event */}
      <button onClick={(event) => console.log(event)}>Inline Event</button>
      <hr />

      {/* Function components with inline Arrow function */}
      <button onClick={() => alert("Hey i am Inline Arr fun")}>
        Inline Arrow Function
      </button>

      {/* passing argument to event handlers */}
      <button onClick={() => handleWelcomeUser("kishan")}>click me</button>
    </>
  );
};
