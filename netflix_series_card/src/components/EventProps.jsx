export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey Thanks for hovering me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => {
          HandleWelcomeUser("Kishan");
        }}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log(`Hey User, welcome`);
    props.onClick();
  };

  return (
    <>
      <button onClick={props.onClick}>Click</button>
      <button onMouseEnter={props.onMouseEnter}>Hover me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
