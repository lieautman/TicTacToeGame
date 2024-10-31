import "./Player.css";
import { useSelector, useDispatch } from "react-redux";

function Player({ playerNo }) {
  const PlayerTrun = useSelector((state) => state.gameState.PlayerTurn);
  const Moves = useSelector((state) => state.gameState.Moves);

  return (
    <div
      class="PlayerBackground"
      style={{ float: playerNo === 1 ? "right" : "left" }}
    >
      <h1>
        {PlayerTrun === playerNo ? "Your turn!" : "Wait for your oponent!"}
      </h1>
      <div class="PlayerBox"></div>
    </div>
  );
}

export default Player;
