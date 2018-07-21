import createApolloClient from './createApolloClient'
import createReduxStore from './createReduxStore'
import Head from 'next/head'
import { getDataFromTree } from 'react-apollo'
import Cookies from 'universal-cookie'

export default (App) => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps({ Component, router, ctx }) {
      

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps({ Component, router, ctx })
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const cookies = new Cookies(ctx.req ? ctx.req.headers.cookie: undefined)
      const token = cookies.get('token')
      const initialState = { auth: { token } }
      const store = createReduxStore(initialState)

      const apollo = createApolloClient(store)

      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
              reduxStore={store}
            />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()
      const reduxState = store.getState()

      return {
        ...appProps,
        apolloState,
        reduxState
      }
    }

    constructor(props) {
      super(props)
      //this.apolloClient = createApolloClient(props.apolloState)
      this.reduxStore = createReduxStore(props.reduxState)
      this.apolloClient = createApolloClient(this.reduxState, props.apolloState)
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} reduxStore={this.reduxStore} />
    }
  }
}