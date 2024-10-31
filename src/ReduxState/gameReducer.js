import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "gameState",
  initialState: {
    ScorePlayer1: 0,
    ScorePlayer2: 0,
    PlayerTurn: 0,
    Moves: [null, 0, 1, null, null, null, 1, 0, 1]
  },
  reducers: {
    resetGame: (state) => {
      state.ScorePlayer1 = 0;
      state.ScorePlayer2 = 0;
      state.PlayerTurn = 0;
      state.Moves = [null, null, null, null, null, null, null, null, null];
    }
  }
});
export const { resetGame } = gameSlice.actions;

export default gameSlice.reducer;
