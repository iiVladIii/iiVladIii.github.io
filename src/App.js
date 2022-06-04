import './App.scss';
// import logo from './images/SVG/logo.svg'

function App() {
  return (
    <div className="App">
      <header>
          <div className="logo">
              <div className="logo__img">
                  <img src='./img/logo.svg' alt=""/>
              </div>
              <div className="logo__text">
                  React Pizza<br/>
                  <span>Самая вкусная пицца во вселенной</span>
              </div>
          </div>
          <div className="logo__info">
              1
          </div>
      </header>
    </div>
  );
}

export default App;
