import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
      <>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert !!</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      </>    
  );
}

export default App;
