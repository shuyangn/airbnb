import React from "react";
import { connect } from "react-redux";
import { createReservation } from "../../action/reservation_action";
import { fetchRoom } from "../../action/room_action";
import navBar2 from "../nav_bar2/nav_bar2_container";
import moment from "moment";
import { openModal, closeModal } from "../../action/modal_actions";

const msp = (state, ownProps) => {
  const roomId = parseInt(ownProps.match.params.roomId);
  const reservationInfo = state.ui.createReservation;

  const room = state.entities.rooms[roomId];
  return {
    room,
    reservationInfo
  };
};

const mdp = dispatch => {
  return {
    fetchRoom: id => dispatch(fetchRoom(id)),
    createReservation: (reservation, roomId) =>
      dispatch(createReservation(reservation, roomId)),
    openModal: modal => dispatch(openModal(modal))
  };
};

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.calculateDays = this.calculateDays.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  calculateDays(start, end) {
    if ((start, end)) {
      return Math.floor(end.diff(start) / 86400000);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createReservation(this.props.reservationInfo, this.props.room.id);
  }

  componentDidMount() {
    const roomId = parseInt(this.props.match.params.roomId);

    this.props.fetchRoom(roomId);
  }

  render() {
    if (!this.props.room) {
      return null;
    }

    const reservation = this.props.reservationInfo;
    const { room } = this.props;
    const guestText = reservation.num_guests > 1 ? "guests" : "guest";
    const startD = moment(reservation.check_in);
    const endD = moment(reservation.check_out);
    const nights = this.calculateDays(startD, endD);
    const text_night = nights > 1 ? "nights" : "night";
    const price = room.price;
    const roomFee = nights * price;
    const serviceFee = 10 * nights;
    const otherFee = 6 * nights;
    const totalFee = roomFee + serviceFee + otherFee;

    // const rating = reservation.rating;
    // const stars = [];
    // let i = 0;
    // while (i < rating) {
    //   stars.push(<i key={i} className="fas fa-star" />);
    //   i++;
    // }

    // while (stars.length < 5) {
    //   stars.push(<i key={stars.length} className="far fa-star" />);
    // }

    return (
      <div>
        <navBar2 />

        <div className="whole-container">
          <div className="left-container">
            <div className="review-text">Review your reservation!</div>

            <div className="rare-find">
              <span>
                <img
                  src="https://a0.muscache.com/airbnb/static/packages/icon-uc-diamond.296a9c25.gif"
                  alt=""
                />
              </span>
              <span>YAY! This is a rare find.</span>
            </div>

            <div className="keep-in-mind">Things to keep in mind</div>

            <div className="some-rules">
              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-child" />
                </div>
                <div className="rule-text">
                  Suitable for children (2-12 years)
                </div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-baby-carriage" />
                </div>
                <div className="rule-text">
                  Suitable for infants (under 2 years)
                </div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-paw" />
                </div>
                <div className="rule-text">Pet friendly</div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-glass-cheers" />
                </div>
                <div className="rule-text">No parties or events</div>
              </div>

              <div className="icon-text">
                <div className="rule-pic">
                  <i className="fas fa-smoking-ban" />
                </div>
                <div className="rule-text">No smoking</div>
              </div>
            </div>

            <button
              type="button"
              className="confirm-button"
              onClick={this.handleSubmit}
            >
              Looks good, let's go!
            </button>
          </div>

          <div className="right-container">
            <div className="item-inside">
              <div className="final item-inside-pic">
                {/* <div className="final-desc">
                  {room.title}
                  <p className="rating-star">{stars}</p>
                </div> */}
                <div className="pic-holder">
                  <img src={room.image_urls[0]} />
                </div>
              </div>

              <div className="final final-date">
                <div className="holder date-holder">
                  <div>
                    <i className="fas fa-user-friends" /> {reservation.num_guests}
                    &nbsp;{guestText}
                  </div>
                  <div>
                    <i className="far fa-calendar-alt" />
                    {reservation.check_in}
                    <i id="arrow" className="fas fa-arrow-right" />
                    {reservation.check_out}
                  </div>
                </div>
              </div>

              <div className="final final-fee-detail">
                <div className="final-fee-con">
                  <div className="final-fee">
                    <div>
                      ${price} x {nights} {text_night}
                    </div>
                    <div>${roomFee}</div>
                  </div>

                  <div className="final-fee">
                    <div>Service fees</div>
                    <div>${serviceFee}</div>
                  </div>

                  <div className="final-fee">
                    <div>Occupancy taxes and fees</div>
                    <div>${otherFee}</div>
                  </div>
                </div>
              </div>

              <div className="final final-fee-total">
                <div className="final-fee ">
                  <div>Total(USD)</div>
                  <div>${totalFee}</div>
                </div>
              </div>

              <div className="final-info">
                <div>Free cancellation!</div>
                <div>
                  <i className="fas fa-shield-alt" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  msp,
  mdp
)(Confirmation);