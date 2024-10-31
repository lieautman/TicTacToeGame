import "./App.css";
import Header from "./Header/Header";
import Player from "./Player/Player";
import { Provider } from "react-redux";
import reduxStore from "./ReduxState/reduxStore";

function App() {
  return (
    <div className="background">
      <Provider store={reduxStore}>
        <Header></Header>
        <Player playerNo={false}></Player>
        <Player playerNo={true}></Player>
      </Provider>
    </div>
  );
}

export default App;
