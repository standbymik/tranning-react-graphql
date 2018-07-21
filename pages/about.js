import React from 'react'
import Link from 'next/link'

class About extends React.Component {

    static getInitialProps() {
        return {
            name: 'Mik'
        }
    }

    render() {
        return (
            <>
                <h1>About Page</h1>
            </>
        )
    }
}

export default About