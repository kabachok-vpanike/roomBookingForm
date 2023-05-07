import React, { Component } from 'react'

export class PlaceChoiceFields extends Component {

  render() {
    const rowStyle = { display: 'flex', width: '100%', gap: '5%', height: '100%' }
    const unitStyle = { display: 'flex', flexDirection: 'column', width: '100%' }
    const selectorStyle = { height: '100%', border: 'none', backgroundColor: '#F4F4F9', marginTop: '4px', fontFamily: "'Exo 2', sans-serif", fontWeight: '500', fontSize: '18px' }
    this.roomNumbers = []
    this.floors = []
    for (let i = 1; i <= 10; i++) {
      this.roomNumbers.push(<option value={i} key={i}>{i}</option>);
    }
    for (let i = 3; i <= 27; i++) {
      this.floors.push(<option value={i} key={i}>{i}</option>);
    }
    return (
      <div style={rowStyle}>
        <div style={unitStyle}>
          <label style={{ textAlign: 'left' }}>Башня</label>
          <select name="tower" style={selectorStyle} id="tower">
            <option value="А">А</option>
            <option value="Б">Б</option>
          </select>
        </div>

        <div style={unitStyle}>
          <label style={{ textAlign: 'left' }}>Этаж</label>
          <select name="floor" style={selectorStyle} id="floor">
            {this.floors}
          </select>
        </div>

        <div style={unitStyle}>
          <label style={{ textAlign: 'left' }}>Комната</label>
          <select name="room" style={selectorStyle} id="room">
            {this.roomNumbers}
          </select>
        </div>
      </div>
    )
  }
}

export default PlaceChoiceFields