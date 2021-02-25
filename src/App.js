import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">warning</Button>
      </header>
    </div>
  );
}

export default App;
