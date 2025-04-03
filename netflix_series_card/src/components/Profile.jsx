export function Profile() {
  return (
    <div>
      <h1>Profile Card Challenge</h1>
      <hr />
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>
      </ProfileCard>

      <ProfileCard
        name="Kishan"
        age={19}
        greeting={
          <div>
            <strong>Hi Kishan, have a wonderful day!</strong>
          </div>
        }
      >
        <p>Hobbies: Bgmi, Movies</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

// ProfileCard Components
function ProfileCard(props) {
  const { name, age, greeting, children } = props;
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}
