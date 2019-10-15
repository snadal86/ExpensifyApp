// SET_Text_Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});
// SORT_By_Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_By_Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// SET_StartDate
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_EndDate
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});