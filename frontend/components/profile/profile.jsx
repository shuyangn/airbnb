import React from 'react';
import ReservationItem from './reservation_item';
import NavBar2Container from "../nav_bar2/nav_bar2_container";

class Profile extends React.Component {
    constructor(props) {
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
                <div className='profile'>
                    <div className='profile-nav'>
                        <h1>Reservations</h1>
                        <button onClick={this.onButtonClick} className='profile-nav-explore'>Explore more</button>
                    </div>
                    <div className='profile-nav-two'>
                        <button className={`profile-nav-button ${upcoming_class}`} onClick={this.onHeaderClick('upcoming')}>Upcoming</button>
                        <button className={`profile-nav-button ${past_class}`} onClick={this.onHeaderClick('past')}>Past</button>
                    </div>
                    <p className='no-reservation'>{this.state.view == 'upcoming' ?'No trips planned yet!' : "No previous trips, let's book your next adventure!"}</p>
                </div>
            )
        }

        const{ removeReservation, rooms } = this.props;
        const { view } = this.state;
        return (
            <div>
                <div className='profile'>
                    <div className='profile-nav'>
                        <h1>Reservations</h1>
                        <button onClick={this.onButtonClick} className='profile-nav-explore'><p>Explore more</p></button>
                    </div>
                    <div className='profile-nav-two'>
                        <button className={'profile-nav-button'} onClick={this.onHeaderClick('upcoming')}>Upcoming</button>
                        <button className={'profile-nav-button'} onClick={this.onHeaderClick('past')}>Past</button>
                    </div>
                    <div className='profile-reservations-container'>
                        {filtered_reservations.map((reservation, idx) => {
                        
                            return <ReservationItem status={view} removeReservation={removeReservation} key={reservation.id} reservation={reservation} room={rooms[reservation.room_id]} />
                        })}
                    </div>

                </div>
            </div>
        )
    }
}

export default Profile;