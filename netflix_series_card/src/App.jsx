import { NetflixSeries } from "./components/NetflixSeries";

// import "./components/Netflix.css";

import "./components/Netflix.module.css";

// import { Profile } from "./components/Profile";

// ? Event file import
import "./components/Ev.css";
// import { EventHandling } from "./components/EventHandling";

// ? Event props
// import { EventProps } from "./components/EventProps";

// ? Event Propagation
// import { EventPropagation } from "./components/EventPropagation";

export const App = () => {
  return (
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}

      <NetflixSeries />

      {/* <EventHandling /> */}

      {/* <EventProps /> */}

      {/* <EventPropagation /> */}
    </section>
  );
  // return <Profile />;
};
