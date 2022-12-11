import './App.css';
import pageRoutes from './pages';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          {pageRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
