import Greetings from "./Greetings";

function App() {
  return (
    <div>
      <h1>Welcome to the react world</h1>
      <Greetings
        firstName={"Gabriel"}
        lastName="Amaru"
        age={31}
      />
    </div>
  );
}

export default App;
