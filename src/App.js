
import './App.css';
import FullName from './Profile/FullName';
import Bio from './Profile/Bio';
import Profession from './Profile/Profession';
function App() {
  return (
    <div className="App">
        <FullName firstName="Saber" lastName="Goob">
      </FullName>
      <Bio Age="24" Gender="Home" Interests="Learning,Farming ,Taking care of animals, Watching TV , Eating and Sleeping" > </Bio>
      <Profession Skill="HTML"></Profession>

    </div>
  );
}
export default App;
