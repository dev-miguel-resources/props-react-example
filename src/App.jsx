import Greetings from "./Greetings";

function App() {
  return (
    <div>
      <h1>Welcome to the react world</h1>
      <Greetings
        firstName={"Gabriel"}
        lastName="Amaru"
        age={31}
      >
      <img src="https://picsum.photos/200/300" alt="picsum" />
      <img src="https://picsum.photos/200/300" alt="picsum-2" />
      </Greetings>
    </div>
  );
}

export default App;
