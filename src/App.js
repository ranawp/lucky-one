import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>

      <div className='article'>
        <article>
          <h4>How React work</h4>
          <p>
            React makes interactive and flexible of website.React js is open source. It is a javascript library.
            When Facebook developers realised that DOM is slow is an application interface.  It means logical structure of documents. React implements a virtual DOM. Virtual DOM represents a DOM tree. when it needs to read or write to the DOM , it will use the virtual DOM.
            Virtual dom tries to be an efficient way to update the browser DOM. React element are plain object and it is cheap to create. so, react is very fast. React can also be used im the server with Node.js.
          </p>
          <h3>Props vs State</h3>
          <p>
            <h4>props:</h4>
            1- props used for one component to another component. <br />
            2-props are immutable . <br />
            3- props can be used with state and function components. <br />
            4-props are readable only. <br />
            5-props make component reusable <br />
            6- props can be used in child components. <br />

            <h4>State:</h4>
            1-state used for passing within the component. <br />
            2-state is mutable. <br />
            3-state can be used with only the state component. <br />
            4-state use for read and write. <br />
            5-state can not make reusable. <br />
            6-state can not accesd byu child component. <br />
          </p>
        </article>
        <article>
        </article>
      </div>
    </div>

  );
}

export default App;
