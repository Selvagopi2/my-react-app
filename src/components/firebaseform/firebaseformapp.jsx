import SignIn from './components/firebaseform/SignIn';
import './App.css'
import SignUp from './components/firebaseform/SignUp';
import AuthDetails from './components/firebaseform/AuthDetails';

function App() {
  return (
    <div className='App'>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App