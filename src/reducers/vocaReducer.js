const vocaData = [
  {
    title: "run",
    type: "동사",
    example: "Can you run as fast as Mike?",
  },
  {
    title: "water",
    type: "명사",
    example: "The smoke made my eyes water.",
  },
  {
    title: "slowly",
    type: "부사",
    example: "I ate my pizza slowly.",
  },
];

const vocaReducer = (state = vocaData, action) => {
  if (action.type === "addVoca") {
    const newState = [...state, action.payload];
    return newState;
  } else if (action.type === "deleteVoca") {
    for (var i = 0; i < state.length; i++) {
      if (state[i].title === action.payload.title) {
        state.splice(i, 1);
      }
    }
  }
  return state;
};

export default vocaReducer;
