import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { asArray  } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  rooms: asArray(state.entities),
  minGuest: state.ui.filters.minGuest,
  maxGuest: state.ui.filters.maxGuest
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
