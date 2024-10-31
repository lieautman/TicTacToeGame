import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import Grid from "@mui/material/Grid";
import { resetGame } from "../ReduxState/gameReducer";

function Header() {
  const ScorePlayer1 = useSelector((state) => state.gameState.ScorePlayer1);
  const ScorePlayer2 = useSelector((state) => state.gameState.ScorePlayer2);
  const dispatch = useDispatch();

  return (
    <div className="HeaderBackground">
      <Grid container>
        <Grid item xs={3}>
          <h2 className="player">Player 1</h2>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              <h2 className="score">
                Score: {ScorePlayer1 + ":" + ScorePlayer2}
              </h2>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                sx={{ margin: "1vw" }}
                onClick={() => dispatch(resetGame())}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <h2 className="player">Player 2</h2>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
