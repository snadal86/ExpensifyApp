import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt:1000 }))
store.dispatch(addExpense({ description: 'Rent Bill', amount: 109500 }))
// store.dispatch(setTextFilter('water'))

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
