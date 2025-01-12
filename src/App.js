import './App.css';
import LayoutHeader from './components/header/LayoutHeader';
import SideBar from './components/sidebar/SideBar';
import BodyLayout from './components/layoutView/BodyLayout';

function App() {
  return (
    <div className="App">
    <LayoutHeader projectName="TECHYON"/>
    <SideBar menuItems={[]}/>
    <BodyLayout/>
    </div>
  );
}

export default App;
