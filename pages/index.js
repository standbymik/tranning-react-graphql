import React from 'react'
import Link from 'next/link'
import GuestBookApollo from '../components/GuestBookApollo'

class Index extends React.Component {

    static getInitialProps() {
        return {
            name: 'Mik'
        }
    }

    render() {
        return (
            <>
                <GuestBookApollo />
                <h1>Hello {this.props.name}</h1>
            </>
        )
    }
}

export default Index