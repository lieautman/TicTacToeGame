import "./Player.css";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { playerWin, passTurn } from "../ReduxState/gameReducer";
import { toast } from "react-toastify";

function Player({ playerNo }) {
  const notify = (text) => toast(text);
  const PlayerTurn = useSelector((state) => state.gameState.PlayerTurn);
  const Moves = useSelector((state) => state.gameState.Moves);
  const dispatch = useDispatch();

  const didIWin = (Moves) => {
    return true;
  };

  async function sleep(msec) {
    return new Promise((resolve) => setTimeout(resolve, msec));
  }

  const score = async (move, id) => {
    if (PlayerTurn !== playerNo) {
      notify("Not your turn!"); //to be made into toast
    } else {
      if (Moves[id] !== null) {
        notify("Square already used!"); //to be made into toast
      } else {
        let newMoves = [...Moves];
        newMoves[id] = playerNo === false ? 0 : 1;
        if (didIWin(newMoves)) {
          notify(`Player ${playerNo ? "2" : "1"} won! GG!`);
          await sleep(2000);
          dispatch(playerWin(playerNo));
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
