import { useBioContext } from ".";
import "./CleanUp.css";

export const About = () => {
  const { myName, myAge } = useBioContext();
  return (
    <section className="container">
      <h1>
        Hello Context Api.(about) My name = {myName}. I am {myAge} old.
      </h1>
    </section>
  );
};
