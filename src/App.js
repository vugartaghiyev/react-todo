import "./App.css";
import Header from "./Components/Header";
import List from "./Components/List";
import ContextProvider from "./Context";

function App() {
  return (
    <ContextProvider>
      <section className="todoapp">
        <Header />
        <List />
      </section>
    </ContextProvider>
  );
}

export default App;
