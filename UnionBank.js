import React from 'react'
import Andhrabank from './Andhrabank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstName:'sri vasavi',
        lastName:'tadepalli'
    }
    return (
        <div>
            <Andhrabank info={data} />
            <CorporationBank info={data}/>
        </div>
    )
}
