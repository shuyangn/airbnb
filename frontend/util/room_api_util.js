export const fetchRooms = (data) => (
    $.ajax({
      method: 'GET',
      url: 'api/rooms',
      data
    })
  );
  
  export const fetchRoom = id => (
    $.ajax({
      method: 'GET',
      url: `api/rooms/${id}`
    })
  );
  
