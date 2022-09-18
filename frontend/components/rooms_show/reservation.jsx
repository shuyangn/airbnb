import React from 'react';
import {DateRange, DateRangePicker} from 'react-date-range';
import { withRouter } from 'react-router';

//openModal={openModal} createReservation={createReservation} 
//currentUser={currentUser} room={currentRoom}


class Reservation extends React.Component {
    constructor(props){
        super(props);
        
        const currDate = new Date();
        this.state = {
            startDate: currDate,
            endDate: currDate,
            guests: 1,
            created: false,
            booking: false,
            duration: 0
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeGuest = this.changeGuest.bind(this);
        this.reservationConfirm = this.reservationConfirm.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    handleSelect(e) {
        const {startDate, endDate} = e.selection
        const timeDiff = Math.abs(endDate - startDate)
        const dayDiff = Math.ceil(timeDiff / (24*60*60*1000))
        this.setState({
            startDate: startDate,
            endDate: endDate,
            duration: dayDiff
        })  
    }


    changeGuest(e) {
        this.setState({
            guests: parseInt(e.target.value)
        })
    }

    handleBackClick(e) {
        this.setState({
            booking: false
        })
    }

    handleSubmit(e) {
        
        if (this.props.currentUser) {
            e.preventDefault()
            this.setState({
                booking: true
            })
        } else {
            e.preventDefault();
            e.stopPropagation();
            this.props.openModal('login')
        }
    }

    handleConfirm(e) {
        e.preventDefault()
        let reservation = {
            room_id: this.props.room.id,
            user_id: this.props.currentUser.id,
            check_in: this.state.startDate,
            check_out: this.state.endDate,
            num_guests: this.state.guests
        }
        this.props.createReservation(reservation).then(
        this.props.history.push('/profile'));
        const currDate = new Date()
        this.setState({
            startDate: currDate,
            endDate: currDate,
            guests: 1,
            created: true
        })
    }

    dateRange(d1, d2) {   //return dates of selected
        
        let firstDate = new Date(d1);
        let secondDate = new Date(d2);
        let firstDateValue = firstDate.getDate() - 1;
        let midValue1 = firstDate.setDate(firstDateValue)
        firstDate = new Date(midValue1)
        let dates = [];
        while (firstDate < secondDate) {
            dates.push(firstDate)
            let nextDay = firstDate.getDate() + 1
            let midValue2 = firstDate.setDate(nextDay)
            firstDate = new Date(midValue2)
        }
        return dates; 
    }

    reservationConfirm() {
        const {startDate, endDate, guests,duration} = this.state;
        if (this.state.booking) {
            return (
                <div className='reservation-container'>
                    <div className='reservation-price-back'>
                        <p>${this.props.room.price} <span> night</span></p>
                        <p onClick={this.handleBackClick} className='reservation-back'>Back</p>
                    </div>
                    <div>
                        <div className='reservation-form'>
                            <div className='reservation-input-label-inout'>
                                    <div className='reservation-input-check'>
                                        <label>CHECK-IN</label>
                                        <p>{startDate.getMonth() + 1}/{startDate.getDate()}/{startDate.getFullYear()}</p> 
                                    </div>
                                    <div className='reservation-input-check'>
                                        <label >CHECK-OUT</label>
                                        <p>{endDate.getMonth() + 1}/{endDate.getDate()}/{endDate.getFullYear()}</p>
                                       
                                    </div>
                            </div>
                            <div className='reservation-guests'>
                                <label>GUESTS</label>
                                <p>{guests}{guests > 1 ? ' guests' : ' guest'}</p>
                                
                            </div>
                            <div className='reservation-pricing'>
                                <div className='reservation-pricing-item'>
                                    <p>${this.props.room.price} x {duration} nights</p>
                                    <p>${parseInt(this.props.room.price)*parseInt(duration)}</p>
                                </div>
                                <div className='reservation-pricing-item'>
                                    <p>Cleaning fee</p>
                                    <p>$10</p>
                                </div>
                                <div className='reservation-pricing-item'>
                                    <p>Service fee</p>
                                    <p>$20</p>
                                </div>
                                <div className='reservation-price-total'>
                                    <p>Total</p>
                                    <p>${10 + 20 + parseInt(this.props.room.price)*parseInt(duration)}</p>
                                </div>
                            </div>
                            
                            <label className='reservation-input-label-submit'>
                            <button onClick={this.handleConfirm} className='reservation-submit'>Reserve</button>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }else {
            return null;
        }
    }

    render() {
        let disabledDates = [];
            if (this.props.reservations){
            Object.values(this.props.reservations).forEach(reservation => {
                
                let start = reservation.check_in;
                let end = reservation.check_out;
                disabledDates = disabledDates.concat(this.dateRange(start, end))
            })
        }  
        
            
            const initialState = (this.state.startDate == this.state.endDate)
            const currDate = new Date()
            const selectionRange = {
                startDate: this.state.startDate, 
                endDate: this.state.endDate,
                key: 'selection',
            }
            const { startDate, endDate } = this.state;


    if (this.state.booking){
        return(
            this.reservationConfirm()
        )
    } else {
        return (
            <div className='reservation-container'>
                <p>${this.props.room.price} <span> night </span></p>
                <form onSubmit={this.handleSubmit} className='reservation-form'>
                    <div className='reservation-input-label-inout'>
                    <div className='reservation-input-check'>
                    <label>CHECK-IN</label>
                    <input disabled type="text" value={!initialState ? `${startDate.getMonth()+1}/${startDate.getDate()}/${startDate.getFullYear()} ` : ''} />
                    </div>
                    <div className='reservation-input-check'>
                    <label>CHECK-OUT</label>
                    <input disabled type="text" value={!initialState ? `${endDate.getMonth()+1}/${endDate.getDate()}/${endDate.getFullYear()} ` : ''} />
                    </div>
                    </div>

                    <label className='reservation-input-label'>Duration: 
                        <input disabled type="text" value={this.state.duration + ' Nights'} />
                    </label>
                    <label className='reservation-input-label'>Number of guests:  
                            <select onChange={this.changeGuest} value={this.state.guests}>
                            {Array.from({length: this.props.room.max_guests}, (_, i) => i + 1).map(i => {
                                return <option key={i} value={i}>{i}</option>
                            })}
                        </select>
                    </label>
                    <label className='reservation-input-label-submit'>
                        <input className='reservation-submit' type="submit" value='Book Today' disabled={endDate==startDate ? true : false} />
                    </label>
                
                <DateRange
                    ranges={[selectionRange]}
                    onChange={this.handleSelect}
                    editableDateInputs={true}
                    showSelectionPreview={true}
                    direction='horizontal'
                    months={1}
                    showDateDisplay={false}
                    showMonthAndYearPickers={false}
                    minDate={new Date()}
                    shownDate={new Date(currDate.setMonth(currDate.getMonth() + 1))}
                    rangeColor={['purple']}
                    startDatePlaceHolderText='Check In'
                    endDatePlaceHolderText='Check Out'
                    disabledDates={disabledDates}
                />
                </form>
            </div>
            )
        }
    }
}

export default withRouter(Reservation);



