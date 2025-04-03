import { useBioContext } from ".";
import "./CleanUp.css";

export const Services = () => {
  const { myName, myAge } = useBioContext();
  return (
    <section className="container">
      <h1>
        Hello Context Api.(about) My name = {myName}. I am {myAge} old.
      </h1>
    </section>
  );
};
