const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, animeDB: action.payload, loading: false };
  }

  if (action.type === "ERROR") {
    return state;
  }
  return state;
};
export default reducer;
