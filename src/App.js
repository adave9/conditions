
import './App.css';
import Goal from './Goal';
import Garage from './Garage';
import Height from './Height';

const cars=["Ford","BMW","Tata","Audi"];

function App() {
  return (
    <div className="App">
      <div className="ifelse">
        <h2>IF/ELSE Demo</h2>
      <p>Follwoing is result:</p>
      <Goal isGoal={true}/>
      </div>
      <div className="logical">
      <h2>Logical AND Demo</h2>
        <Garage cars={cars}/>
      </div>
      <div className="ter">
      <h2>Ternary Demo</h2>
        <Height height="true"/>
      </div>
    </div>
  );
}

export default App;
