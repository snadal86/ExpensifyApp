import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => (e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount())

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    render() {
        return (
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input
                            type='text'
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                            placeholder='Search Expenses'
                            className='text-input'
                        />
                    </div>
                    <div className='input-group__item'>
                        <select
                            className = 'select-input'
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value='date'> Date </option>
                            <option value='amount'> Amount </option>
                        </select>
                    </div>
                    <div className='input-group__item'>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId="ExpenseListFilters_StartDate"
                            endDate={this.props.filters.endDate}
                            endDateId="ExpenseListFilters_EndDate"
                            // onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ filters: state.filters }
)
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)