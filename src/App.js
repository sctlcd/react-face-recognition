import './App.css';
import Navigation from './componentes/Navigation/Navigation.jsx';
import Logo from './componentes/Logo/Logo.jsx';
import ImageLinkForm from './componentes/ImageLinkForm/ImageLinkForm.jsx';
import Rank from './componentes/Rank/Rank.jsx';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
