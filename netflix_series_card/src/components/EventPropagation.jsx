export const EventPropagation = () => {
  const handleGrandParent = (event) => {
    console.log("GrandParent Clicked");
    // event.stopPropagation();
  };

  const handleParentClick = (event) => {
    console.log("Parent Clicked");
    // event.stopPropagation();
  };

  const handleChildClick = (event) => {
    // console.log(event);
    // event.stopPropagation();
    console.log("Child Clicked");
  };

  return (
    // ? Capturing Phase From top to bottmo
    // <section className="main-div">
    //   <div className="g-div" onClickCapture={handleGrandParent}>
    //     <div className="p-div" onClickCapture={handleParentClick}>
    //       <button className="c-div" onClickCapture={handleChildClick}>
    //         Child Div
    //       </button>
    //     </div>
    //   </div>
    // </section>

    // ? Bubbling Phase From bottom to top : by default
    <section className="main-div">
      <div className="g-div" onClick={handleGrandParent}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
