import "./Player.css";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { playerWin } from "../ReduxState/gameReducer";

function Player({ playerNo }) {
  const PlayerTurn = useSelector((state) => state.gameState.PlayerTurn);
  const Moves = useSelector((state) => state.gameState.Moves);
  const dispatch = useDispatch();
  console.log("ceva", PlayerTurn);
  const didIWin = (Moves) => {
    return false;
  };

  const score = (move, id) => {
    if (PlayerTurn !== playerNo) {
      console.error("Not your turn"); //to be made into toast
    } else {
      if (didIWin(Moves)) dispatch(playerWin(playerNo));
    }
  };
  return (
    <div
      className="PlayerBackground"
      style={{ float: playerNo === true ? "right" : "left" }}
    >
      <h1>
        {PlayerTurn === playerNo ? "Your turn!" : "Wait for your oponent!"}
      </h1>
      <div className="PlayerBox">
        <Grid container>
          {Moves.map((move, id) => {
            return (
              <Grid key={id} item xs={4}>
                <div className="CheckerBox" onClick={() => score(move, id)}>
                  <div className="TextInCheckerBox">
                    {move === 1 ? "x" : move === 0 ? "o" : ""}
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Player;
