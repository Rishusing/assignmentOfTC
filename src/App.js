import './App.css';
import formData from './data.json'
import Element from './components/Element';


function App() {

  return (
    <>
      <div className="container">
          <form>
            <h1 className="heading">{formData.formName}</h1>
            <h2 className="heading">{formData.formDesc} </h2>
            {
              formData.data.map((val, i = 0) => <Element  key={i++} props={val}/>)
            }
            <button className="btn">Submit</button>
          </form>
      </div>
    </>
  );
}

export default App;
