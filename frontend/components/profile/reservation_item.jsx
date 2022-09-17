import React from 'react';
import {withRouter} from 'react-router';

class ReservationItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(this.props.reservation.check_in),
            endDate: new Date(this.props.reservation.check_out)
        }
        this.onClick = this.onClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    onClick() {
        this.props.history.push(`/rooms/${this.props.room.id}`)
    }

    handleDelete(e) {
        
        this.props.removeReservation(this.props.reservation)
        e.stopPropagation()
        
    }

    render() {
        const {startDate, endDate} = this.state;
        let startDateString = (startDate.getMonth() + 1).toString() + '/' + startDate.getDate().toString() + '/' + startDate.getFullYear();
        let endDateString = (endDate.getMonth() + 1).toString() + '/' + endDate.getDate().toString() + '/' + endDate.getFullYear();
        const {room, reservation, status} = this.props;
        debugger
        return (
            
                <div onClick={this.onClick} className='trip-container'>
                    <div className='trip-selection'>
                        <img src={room.image_urls ? room.image_urls[0] : ''} />
                        <h1>{room.title}</h1>
                        <div className='trip-container-subs'>
                            <p>{startDateString} - {endDateString}</p>
                            <p>{reservation.num_guests ? reservation.num_guests + (reservation.num_guests > 1 ? ' guests': ' guest') : 'No guest restriction'}</p>
                        </div>
                    </div>
                    {status == 'upcoming' ? <button className='trip-index-delete' onClick={this.handleDelete}>Cancel</button> : null }
                    
                </div>
            
        )
    }
}

export default withRouter(ReservationItem);