import React, { Component } from 'react'

export class DateField extends Component {
    render() {
        const mainStyle = { display: 'flex', flexDirection: 'row', width: '100%', height: '100%', gap: '30px', justifyContent: 'space-between' }
        const containerStyle = { display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }
        const selectorStyle = { display: 'flex', width: '100%', height: '100%', fontFamily: "'Exo 2', sans-serif", fontWeight: '500', fontSize: '18px', backgroundColor: '#F4F4F9', border: 'none', marginTop: '4px', flex: '1' }
        this.durations = [];
        for (let i = 0; i <= 3; i++) {
            for (let j of ['00', '15', '30', '45']) {
                this.durations.push(<option value={i + ':' + j} key={i + ':' + j}>{i + ':' + j}</option>)
            }
        }
        this.durations.shift();
        return (
            <div style={mainStyle}>
                <div style={containerStyle}>
                    <label style={{ textAlign: 'left' }}>Дата и время</label>
                    <input style={selectorStyle} type="datetime-local" id="bookDate" name="bookDate" />
                </div>
                <div style={containerStyle}>
                    <label style={{ textAlign: 'left', flex: '1' }}>Длительность</label>
                    <select name="duration" style={selectorStyle} id="duration">
                        {this.durations}
                    </select>
                </div>
            </div>

        )
    }
}

export default DateField