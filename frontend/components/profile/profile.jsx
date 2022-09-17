import React from 'react';
import ReservationItem from './reservation_item';


class Profile extends React.Component {
    constructor(props) {
        debugger
        super(props)
        this.state = {
            view: 'upcoming'
        }
        this.onHeaderClick = this.onHeaderClick.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchReservations(this.props.currentUser.id)
    }


    onHeaderClick(field) {
        return e => {
            this.setState({
                view: field
            })
        }
    }

    onButtonClick(e) {
        this.props.history.push('/rooms')
        this.setState({state : this.state})
    }


    

    render() {
        
       
        
        let upcoming_class = this.state.view == 'upcoming' ? 'selected' : 'not-selected';
        let past_class = this.state.view == 'past' ? 'selected' : 'not-selected';
        let filtered_reservations = this.state.view == 'upcoming' ? Object.values(this.props.reservations).filter(res => new Date(res.check_out) > new Date()) :
            Object.values(this.props.reservations).filter(res => new Date(res.check_out) < new Date())
            
        filtered_reservations.sort((a,b) => {
            if (Date.parse(a.check_in) < Date.parse(b.check_in)) {
                return -1
            } else {
                return 1
            }
        })

        if (filtered_reservations.length < 1) {
            return (
                <div className='trips-page'>
                    <nav className='trips-header-nav'>
                        <h1>Reservations</h1>
                        <button onClick={this.onButtonClick} className='trips-header-nav-button'>Explore more</button>
                    </nav>
                    <nav className='trips-nav'>
                        <button className={`trips-nav-button ${upcoming_class}`} onClick={this.onHeaderClick('upcoming')}>Upcoming</button>
                        <button className={`trips-nav-button ${past_class}`} onClick={this.onHeaderClick('past')}>Past</button>
                    </nav>
                    <p className='no-trips-text'>{this.state.view == 'upcoming' ?'No trips planned yet!' : "No previous trips, let's book your next adventure!"}</p>
                </div>
            )
        }

        const{ removeReservation, rooms } = this.props;
        const { view } = this.state;
        return (
            <div className='trips-page'>
                <nav className='trips-header-nav'>
                    <h1>Reservations</h1>
                    <button onClick={this.onButtonClick} className='trips-header-nav-button'>Explore more</button>
                </nav>
                <nav className='trips-nav'>
                    <button className={`trips-nav-button ${upcoming_class}`} onClick={this.onHeaderClick('upcoming')}>Upcoming</button>
                    <button className={`trips-nav-button ${past_class}`} onClick={this.onHeaderClick('past')}>Past</button>
                </nav>
                <div className='trips-index-container'>
                    {filtered_reservations.map((reservation, idx) => {
                        debugger
                        return <ReservationItem status={view} removeReservation={removeReservation} key={reservation.id} reservation={reservation} room={rooms[reservation.room_id]} />
                    })}
                </div>

            </div>
        )
    }
}

export default Profile;