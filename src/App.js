import "./App.css";
import Header from "./Header/Header";
import Player from "./Player/Player";
import { Provider } from "react-redux";
import reduxStore from "./ReduxState/reduxStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="background">
      <Provider store={reduxStore}>
        <ToastContainer />
        <Header></Header>
        <Player playerNo={false}></Player>
        <Player playerNo={true}></Player>
      </Provider>
    </div>
  );
}

export default App;
