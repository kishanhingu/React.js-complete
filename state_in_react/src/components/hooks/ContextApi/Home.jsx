import { useBioContext } from ".";
import "./CleanUp.css";

export const Home = () => {
  const { myName, myAge } = useBioContext();
  return (
    <section className="container">
      <h1>
        Hello Context Api. My name = {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};
