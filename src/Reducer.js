export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Removing after developing
  token: null,
  discover_weekly: null,
};
export const reducer = (state, { type, payload }) => {
  console.log(type);

  switch (type) {
    case "SET_USER": 
      return {
        ...state,
        user: payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: payload,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: payload,
      };
    case "SET_DISCOVER_WEEKLY":
      console.log("payload", payload);
      return {
        ...state,
        discover_weekly: payload,
      };
    default:
      return state;
  }
};

export default reducer;
