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

        return (
            
                <div onClick={this.onClick} className='reservation-item-container'>
                    <div className='reservation-item'>
                        <div className='reservation-item-img'>
                            <img src={window.background}/>
                            {/* {room.image_urls ? room.image_urls[0] : ''} */}
                        </div>
                        <div className='reservation-container-subs'>
                            <p className='reservation-container-subs-title'>{room.title}</p>
                            <p className='reservation-container-subs-date'>{startDateString} - {endDateString}</p>
                            <p className='reservation-container-subs-guestnum'>{reservation.num_guests ? reservation.num_guests + (reservation.num_guests > 1 ? ' guests': ' guest') : 'No guest restriction'}</p>
                        </div>
                        <div className='reservation-delete-button-div'>
                        {status == 'upcoming' ? <button className='reservation-delete-button' onClick={this.handleDelete}>Cancel</button> : <button className='reservation-delete-button'>Write Review</button> }
                        </div>
                    </div>
                    
                    
                </div>
            
        )
    }
}

export default withRouter(ReservationItem);