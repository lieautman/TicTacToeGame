import "./Player.css";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import {
  playerWin,
  playerResetAfterWin,
  passTurn
} from "../ReduxState/gameReducer";
import { toast } from "react-toastify";

function Player({ playerNo }) {
  const notify = (text) => toast(text);
  const PlayerTurn = useSelector((state) => state.gameState.PlayerTurn);
  const Moves = useSelector((state) => state.gameState.Moves);
  const dispatch = useDispatch();

  const didIWin = (Moves) => {
    if (Moves[0] === Moves[1] && Moves[1] === Moves[2] && Moves[0] !== null)
      return true;
    if (Moves[3] === Moves[4] && Moves[4] === Moves[5] && Moves[3] !== null)
      return true;
    if (Moves[6] === Moves[7] && Moves[7] === Moves[8] && Moves[6] !== null)
      return true;
    if (Moves[0] === Moves[4] && Moves[4] === Moves[8] && Moves[0] !== null)
      return true;
    if (Moves[2] === Moves[4] && Moves[4] === Moves[6] && Moves[2] !== null)
      return true;
    if (Moves[0] === Moves[3] && Moves[3] === Moves[6] && Moves[0] !== null)
      return true;
    if (Moves[1] === Moves[4] && Moves[4] === Moves[7] && Moves[1] !== null)
      return true;
    if (Moves[2] === Moves[5] && Moves[5] === Moves[8] && Moves[2] !== null)
      return true;
    return false;
  };

  async function sleep(msec) {
    return new Promise((resolve) => setTimeout(resolve, msec));
  }

  const score = async (move, id) => {
    if (PlayerTurn !== playerNo) {
      notify("Not your turn!");
    } else {
      if (Moves[id] !== null) {
        notify("Square already used!");
      } else {
        let newMoves = [...Moves];
        newMoves[id] = playerNo === false ? 0 : 1;
        if (didIWin(newMoves)) {
          notify(`Player ${playerNo ? "2" : "1"} won! GG!`);
          dispatch(playerWin(newMoves));
          await sleep(2000);
          dispatch(playerResetAfterWin(playerNo));
        } else {
          dispatch(passTurn(newMoves));
        }
      }
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
