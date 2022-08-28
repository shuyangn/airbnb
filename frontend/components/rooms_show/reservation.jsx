import React from 'react';
import {DateRange} from 'react-date-range';
import { withRouter } from 'react-router';

class Reservation extends React.Component {
    constructor(props){
        super(props);
        const curDate = new Date();
        this.state = {
            check_in: curDate,
            check_out: curDate,
            num_guests: 1,
            created: false,
            reserve: false,
            duration: 0
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeGuest = this.changeGuest.bind(this);
        this.bookingMenu = this.bookingMenu.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default withRouter(Reservation);