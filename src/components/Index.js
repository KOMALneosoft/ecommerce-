import React, { Component } from 'react'
import Column from './Column'
import Feature from './Feature'
import Header from './Header'
import Instagram from './Instagram'
import Main from './Main'
import Footers from './Footers'

export class Index extends Component {
    render() {
        return (
            <div className="bg">
                <Header/>
                <Feature/>
                <Main/>
                <Instagram/>
                <Column/>
                {/* <Footers/> */}
            </div>
        )
    }
}

export default Index
