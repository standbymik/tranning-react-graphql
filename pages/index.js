import React from 'react'
import Link from 'next/link'

class Index extends React.Component {

    static getInitialProps() {
        return {
            name: 'Mik'
        }
    }

    render() {
        return (
            <>
                
                <h1>Hello {this.props.name}</h1>
            </>
        )
    }
}

export default Index