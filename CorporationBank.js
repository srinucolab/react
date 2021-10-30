import React, { Component } from 'react'

export class CorporationBank extends Component {
    render(props) {
        return (
            <div>
              <h1>CorporationBank account :{this.props.info.lastName}</h1>  
            </div>
        )
    }
}

export default CorporationBank
