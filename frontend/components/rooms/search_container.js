import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asArray  } from '../../reducers/selectors';
import Search from './search';
import { fetchReservations } from '../../actions/reservation_actions';

const mapStateToProps = state => ({
  rooms: Object.values(state.entities.rooms),
  maxGuest: state.ui.filters.maxGuest
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchReservations: (userId) => dispatch(fetchReservations(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
