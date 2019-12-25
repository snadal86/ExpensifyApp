import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			description: props.expense ? props.expense.description : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			note: props.expense ? props.expense.note : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			focused: false,
			error: ''
		}
	}

	onDescriptionChange = (e) => {
		const description = e.target.value
		this.setState(() => ({ description }))
	}

	onNoteChange = (e) => {
		const note = e.target.value
		this.setState(() => ({ note }))
	}

	onAmountChange = (e) => {
		const amount = e.target.value
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }))
		}
	}

	onSubmit = (e) => {
		e.preventDefault()
		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: 'Please provide description and/or amount' }))
		}
		else {
			this.setState(() => ({ error: '' }))
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			})
		}
	}

	render() {
		return (

			<form className='form' onSubmit={this.onSubmit}>
				{!!this.state.error && <p className='form__error'>{this.state.error}</p>}
				<input
					className='text-input'
					type='text'
					placeholder='Description'
					autoFocus
					value={this.state.description}
					onChange={this.onDescriptionChange}
				/>
				<input
					className='text-input'
					type='text'
					placeholder='Amount'
					value={this.state.amount}
					onChange={this.onAmountChange}
				/>
				<SingleDatePicker
					id="ExpenseForm_SingleDatePicker"
					date={this.state.createdAt}
					onDateChange={createdAt => this.setState({ createdAt })}
					focused={this.state.focused}
					onFocusChange={({ focused }) => this.setState({ focused })}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
				<textarea
					className='textarea-input'
					placeholder='Add a note for your expense (optional)'
					value={this.state.note}
					onChange={this.onNoteChange}
				>
				</textarea>
				<div>
					<button className='button'>Save Expense</button>
				</div>
			</form>
		)
	}
}
