// ? React.js ma jyare <State /> Compponent ni value change thay chhe tyare te component re-render thay chhe. <State /> Component bhale game tetli var re-render thay pan <Sibling /> Component re-render thato nathi.
// ? <State /> Components re-render thavanu karan a chhe ke tema `useState` no use thay chhe te by default <State /> Components ne re-render kare chhe.
// import { DerivedState } from "./components/DerivedState";
import "./components/Ev.css";
import { UseCallback } from "./components/hooks/Memo/UseCallback";
// import { MemoParentComponent } from "./components/hooks/Memo/UseMemo";
// import { ReactMemo } from "./components/hooks/Memo/ReactMemo";
// import { Reducer } from "./components/hooks/useReducer";
// import { BioProvider } from "./components/hooks/ContextApi";
// import { About } from "./components/hooks/ContextApi/About";
// import { Home } from "./components/hooks/ContextApi/Home";
// import { Services } from "./components/hooks/ContextApi/Services";
// import { UseId } from "./components/hooks/useID";
// import { ParentComponent } from "./components/PropDrilling";
// import { ForwardRef } from "./components/hooks/useRef/ForwardRef";
// import { UseRef } from "./components/hooks/useRef";
// import { CleanUp } from "./components/hooks/useEffect/CleanUp";
// import { HowNotToFetchApi } from "./components/hooks/useEffect/HowNotToFetchApi";
// import { ReactUseEffect } from "./components/hooks/useEffect";
// import { EffectChallenge } from "./components/hooks/useEffect/EffectChallenge";
// import { ContactForm } from "./components/hooks/useState/ContactForm";
// import { LoginForm } from "./components/hooks/useState/LoginForm";
// import { UseStateChallenge } from "./components/hooks/useState/Challenge";
// import { Controlled } from "./components/hooks/useState/Controlled";
// import { RegistrationForm } from "./components/hooks/useState/Registration";
// import { RegistrationFormReact } from "./components/hooks/useState/RegistrationReact";
// import { Counter } from "./components/hooks/useState";
// import { LiftingState } from "./components/LiftStateUp";
// import { State } from "./components/hooks/State";

//!Practice in state
// import { State_practice } from "./components/hooks/State_practice";

export const App = () => {
  return (
    // <section className="container">
    //   {/* <State /> */}
    //   {/* <Sibling /> */}

    //   {/* //?Practice in state */}
    //   {/* <State_practice /> */}

    //   {/* //?Derived state example */}
    //   {/* <DerivedState /> */}

    //   {/* //?liftUp State */}
    //   {/* <LiftingState /> */}

    //   {/* //?useState */}
    //   {/* <Counter /> */}
    //   {/* <UseStateChallenge /> */}
    //   {/* <Controlled /> */}

    //   {/* //?Form in React.js */}
    //   {/* <RegistrationForm /> */}
    //   {/* <RegistrationFormReact /> */}
    //   {/* <LoginForm /> */}
    //   {/* <ContactForm /> */}

    //   {/* //?useEffect */}
    //   {/* <ReactUseEffect /> */}
    //   {/* <EffectChallenge /> */}
    //   {/* //? CleanUp function in useEffect */}
    //   {/* <CleanUp /> */}

    // </section>

    // {/* //?HowNotToFetchApi */}
    // <HowNotToFetchApi />

    //? useRef Hook in React
    // <UseRef />
    //? ForwardRef
    // <ForwardRef />

    //? UseId Hook
    // <UseId />

    //? PropDrilling
    // <ParentComponent />

    //? ContextApi
    // <>
    //   <BioProvider>
    //     <Home />
    //     <About />
    //     <Services />
    //   </BioProvider>
    // </>

    //? useReducer Hook
    // <>
    //   <Reducer />
    // </>

    //? Memo
    // <>
    //   <ReactMemo />
    // </>

    //? useMemo()
    // <>
    //   <MemoParentComponent />
    // </>

    //? useCallback
    <>
      <UseCallback />
    </>
  );
};
// const Sibling = () => {
//   console.log("Sibling Component rendered");
//   return (
//     <div>
//       <h2>Sibling Component</h2>
//     </div>
//   );
// };
