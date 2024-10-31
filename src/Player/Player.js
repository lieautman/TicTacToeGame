import "./Player.css";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

function Player({ playerNo }) {
  const PlayerTrun = useSelector((state) => state.gameState.PlayerTurn);
  const Moves = useSelector((state) => state.gameState.Moves);

  return (
    <div
      className="PlayerBackground"
      style={{ float: playerNo === 1 ? "right" : "left" }}
    >
      <h1>
        {PlayerTrun === playerNo ? "Your turn!" : "Wait for your oponent!"}
      </h1>
      <div className="PlayerBox">
        <Grid container>
          {Moves.map((move) => {
            return (
              <Grid item xs={4}>
                <div className="CheckerBox" onClick={() => score()}>
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
