import React, { Component } from 'react'

export class SendAndClear extends Component {
    constructor(props) {
        super(props);
        this.state = { opacity: '1', opacityClear: '1', flex: '4' };
    }
    submitData() {
        this.setState({ opacity: '1' })
        setTimeout(() => this.setState({ opacity: '0.7' }), 200);
        var resJSON = {
            'tower': document.getElementById('tower').value,
            'floor': document.getElementById('floor').value,
            'room': document.getElementById('room').value,
            'booking date': document.getElementById('bookDate').value,
            'duration': document.getElementById('duration').value,
            'additional information': document.getElementById('additionalInformation').value,
        }
        console.log(resJSON)
    }
    clearData() {
        this.setState({ opacityClear: '1' })
        setTimeout(() => this.setState({ opacityClear: '0.7' }), 200);
        document.getElementById('tower').value = 'А';
        document.getElementById('floor').value = '3';
        document.getElementById('room').value = '1';
        document.getElementById('bookDate').value = '';
        document.getElementById('duration').value = '0:15';
        document.getElementById('additionalInformation').value = '';
    }
    mouseEnter() {
        if (this.state.opacity === '1') {
            this.setState({ opacity: '0.7' })
        }
        else {
            this.setState({ opacity: '1' })
        }
    }
    mouseEnterClear() {
        if (this.state.opacityClear === '1') {
            this.setState({ opacityClear: '0.7' })
        }
        else {
            this.setState({ opacityClear: '1' })
        }
    }
    render() {
        const buttonRowStyle = { display: 'flex', height: '100%', flexDirection: 'row', width: '100%' }
        var bookButtonStyle = { flex: '4', marginRight: '20px', fontFamily: "'Exo 2', sans-serif", fontWeight: '600', fontSize: '22px', color: '#F4F4F9', backgroundColor: '#586F7C', border: 'none', transition: '0.2s' };
        bookButtonStyle.opacity = this.state.opacity;
        var clearButtonStyle = { flex: '1', fontFamily: "'Exo 2', sans-serif", fontWeight: '600', fontSize: '22px', color: '#F4F4F9', backgroundColor: '#8AA0AC', border: 'none', transition: '0.2s' };
        clearButtonStyle.opacity = this.state.opacityClear;
        return (
            <div style={buttonRowStyle}>
                <input style={bookButtonStyle} type='button' value='Забронировать' onMouseDown={this.submitData.bind(this)} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseEnter.bind(this)} />
                <input style={clearButtonStyle} type='button' value='Очистить' onMouseDown={this.clearData.bind(this)} onMouseEnter={this.mouseEnterClear.bind(this)} onMouseLeave={this.mouseEnterClear.bind(this)} />
            </div>
        )
    }
}

export default SendAndClear