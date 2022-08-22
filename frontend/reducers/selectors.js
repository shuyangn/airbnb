export const asArray = ({ rooms }) => (
    Object.keys(rooms).map(key => rooms[key])
  );

  export const selectRoom = ({ rooms }, roomId) => {
    return rooms[roomId];
  };