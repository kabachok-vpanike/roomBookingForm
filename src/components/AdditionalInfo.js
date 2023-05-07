import React, { Component } from 'react'

export class AdditionalInfo extends Component {
    render() {
        const containerStyle = { display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }
        return (
            <div style={containerStyle}>
                <label style={{ textAlign: 'left' }}>Дополнительная информация</label>
                <textarea style={{ height: '100%', width: '99%', backgroundColor: '#F4F4F9', fontSize: '18px', fontFamily: "'Exo 2', sans-serif", fontWeight: '500', border: 'none', marginTop: '4px' }} id="additionalInformation"/>
            </div>
        )
    }
}

export default AdditionalInfo