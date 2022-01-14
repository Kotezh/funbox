import "./App.css";
import Main from "../Main/Main";


function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <a
          className='app__link'
          href='https://github.com/Kotezh'
          target='_blank'
          rel='noopener noreferrer'
        >
          Редактор маршрутов
        </a>
      </header>
      <Main/>
      <footer className="app__footer">
        <a
          className='app__link'
          href='https://github.com/Kotezh'
          target='_blank'
          rel='noopener noreferrer'
        >
          Nadia Kotegova
        </a>
      </footer>
    </div>
  );
}

export default App;
