export const fetchReservations = () => {
  return $.ajax({
      method: 'GET',
      url: `api/reservations`
  })
}

export const fetchReservation = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/reservations/${id}`
  })
}

export const updateReservation = (reservation) => {
  return $.ajax({
      method: 'PATCH',
      url: `/api/reservations/${reservation.id}`,
      data: { reservation }
  })
}

export const createReservation = (reservation, roomId) => {
  return $.ajax({
      method: 'POST',
      url: `/api/rooms/${roomId}/reservations`,
      data: { reservation }
  })
}

export const deleteReservation = (id) => {
  
  return $.ajax({
      method: 'DELETE',
      url: `/api/reservations/${id}`
  })
}