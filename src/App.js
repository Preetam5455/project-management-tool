import './App.css';
import LayoutHeader from './components/Header/LayoutHeader';
import SideBar from './components/Sidebar/SideBar';
import BodyLayout from './components/LayoutView/BodyLayout';

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
