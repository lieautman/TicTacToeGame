import "./App.css";
import Header from "./Header/Header";
import Player from "./Player/Player";
import { Provider } from "react-redux";
import reduxStore from "./ReduxState/reduxStore";

function App() {
  return (
    <div class="background">
      <Provider store={reduxStore}>
        <Header></Header>
        <Player playerNo={0}></Player>
        <Player playerNo={1}></Player>
      </Provider>
    </div>
  );
}

export default App;
