export const fetchRooms = () => (
    $.ajax({
      method: 'GET',
      url: 'api/rooms'
    })
  );
  
  export const fetchRoom = id => (
    $.ajax({
      method: 'GET',
      url: `api/rooms/${id}`
    })
  );
  
