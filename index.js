import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Cookies from 'universal-cookie'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import { ApolloProvider } from 'react-apollo'
import createApolloClient from './libs/createApolloClient'
import createReduxStore from './libs/createReduxStore'

const cookies = new Cookies()
const token = cookies.get('token')
const initialState = { auth: { token } }
const store = createReduxStore(initialState)

/*const store = createStore(
	reducers,
	{ auth: { token: token } },
	compose(applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)*/

const client = createApolloClient(store)

//console.log(store.getState())
store.subscribe(() => {
	//console.log(store.getState())
})

/*
store.dispatch({
	type: 'INCREASE_COUNTER'
})
store.dispatch({
	type: 'CREATE_POST',
	title : 'Title',
	content : 'Content'
})
*/
ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={store}>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById('root'))
