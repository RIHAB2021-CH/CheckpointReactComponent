
import './App.css';
import Adresse from"./component/Profile/Address";
import FULLName from"./component/Profile/FullName";
import ProfilePhoto from"./component/Profile/ProfilePhoto";
function App() {
  return (
    <>
    <div className="container">
      <ProfilePhoto/>
    <FULLName/>
    <Adresse/>
    </div>
    
    </>
  );
}

export default App;
