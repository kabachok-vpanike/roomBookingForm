import './App.css';
import AdditionalInfo from './components/AdditionalInfo';
import DateField from './components/DateField';
import PlaceChoiceFields from './components/PlaceChoiceFields'
import SendAndClear from './components/SendAndClear';

function App() {
  const mainWindowStyle = { backgroundColor: '#586F7C', height: '100vh', fontFamily: "'Exo 2', sans-serif", fontWeight: '600', fontSize: '18px' };
  const elementsDivStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'absolute', backgroundColor: '#D9D9D9', width: '70%', height: '80%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', WebkitTransform: 'translate(-50%, -50%)' };
  const mainElementsBoxStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', height: '100%' };
  const titleStyle = { fontSize: '30px', marginTop: '10%', fontWeight: '500' }
  return (
    <div className='mainWindow' style={mainWindowStyle}>
      <div className="App" style={elementsDivStyle}>
        <div className="mainElementsBox" style={mainElementsBoxStyle}>
          <label style={titleStyle}>Форма бронирования переговорных комнат</label>
          <div style={{ flex: '9', width: '80%' }}><PlaceChoiceFields /></div>
          <div style={{ flex: '9', width: '80%' }}><DateField /></div>
          <div style={{ flex: '36', width: '80%' }}><AdditionalInfo /></div>
          <div style={{ flex: '8', marginBottom: '5%', width: '80%' }}><SendAndClear /> </div>
        </div>
      </div>
    </div >
  );
}

export default App;
