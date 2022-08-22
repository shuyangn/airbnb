import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);


const FilterForm = ({  maxGuest, updateFilter }) => (
  <div className='maxguests-button'>
    <label>Maximum Guests  </label>
    <input
      type="number"
      value={maxGuest}
      onChange={handleChange('maxGuest', updateFilter)}
    />
  </div>
);

export default FilterForm;