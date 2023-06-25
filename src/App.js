import './App.css';
import image from './assets/img/warning.svg'

function App() {
  return (
    <div className="App">
       <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Utility First Fundamentals</title>
      <body>
    {/* <!-- HTML/CSS Version --> */}
    <div className="alert">
      <div className="alert-logo-wrap">
        <img className="alert-logo" src={image} alt="alert" />
      </div>
      <div className="alert-body">
        <h4 className="alert-title">Are You Sure?</h4>
        <p className="alert-message">You are about to delete a post</p>
      </div>
    </div>
    </body>

    {/* <!-- Tailwind Version --> */}

    <div className='flex '>

    </div>
   
    </div>
  );
}

export default App;
