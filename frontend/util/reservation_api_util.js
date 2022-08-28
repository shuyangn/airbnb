export const fetchReservations = (filter, value) => {
    const pass = { [filter]: value };
    return $.ajax({
      method: "GET",
      url: "api/reservations",
      data: pass
    });
  };
  
  export const fetchReservation = id =>
    $.ajax({
      method: "GET",
      url: `api/reservations/${id}`
    });
  
  export const createReservation = (reservation, roomId) => {
    return $.ajax({
      method: "POST",
      url: `api/rooms/${roomId}/reservations`,
      data: { reservation }
    });
  };
  
  export const updateReservation = reservation =>
    $.ajax({
      method: "PATCH",
      url: `api/reservations/${reservation.id}`,
      data: { reservation }
    });
  
  export const deleteReservation = id =>
    $.ajax({
      method: "DELETE",
      url: `api/reservations/${id}`
    });