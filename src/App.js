import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  // let a=5;
  return (
    <div className='App'>
        <h3>Kalvium Gallery using Function Component</h3>
        <div className="gallery">
            {imageData().map((elt) => {
                return <img src={elt.img} alt="elephant" key={elt.id} />;
            })}
        </div>
    </div>
  );
}

export default App;
