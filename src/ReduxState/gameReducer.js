import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "gameState",
  initialState: {
    ScorePlayer1: 0,
    ScorePlayer2: 0,
    PlayerTurn: false,
    Moves: [null, 0, 1, null, null, null, 1, 0, 1]
  },
  reducers: {
    resetGame: (state) => {
      state.ScorePlayer1 = 0;
      state.ScorePlayer2 = 0;
      state.PlayerTurn = false;
      state.Moves = [null, null, null, null, null, null, null, null, null];
    },
    playerWin: (state, action) => {
      if (action.payload) state.ScorePlayer2 = state.ScorePlayer2 + 1;
      else state.ScorePlayer1 = state.ScorePlayer1 + 1;
      state.PlayerTurn = !action.payload;
      state.Moves = [null, null, null, null, null, null, null, null, null];
    },
    passTurn: (state, action) => {
      state.PlayerTurn = !state.PlayerTurn;
      state.Moves = action.payload;
    }
  }
});
export const { resetGame, playerWin, passTurn } = gameSlice.actions;

export default gameSlice.reducer;
