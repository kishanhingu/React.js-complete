import "./Ev.css";
export const ParentComponent = () => {
  return (
    <section className="component-a">
      <h1>Component A</h1>
      <ChildComponent data="React.js" />
    </section>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1>Hello, I am component B</h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello, I am component C</h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1>Hello, I love {props.data}</h1>
    </>
  );
};
