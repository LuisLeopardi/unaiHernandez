import {useState, useEffect} from 'react'
import Image from './components/Image';
import Loading from './components/loading';
import Select from './components/Select';

const App = () => {

  const [breedList, setBreedList] = useState(null);
  const [ImagesSrc, setImagesSrc] = useState(null);
  const [selectValue, setSelectValue] = useState("hound")

  useEffect(()=>{

    setImagesSrc(null)

    fetch(`https://dog.ceo/api/breed/${selectValue}/images`)
    .then(res=> res.json())
    .then( ({message}) => {
      const diezImagenes = message.splice(0, 10) 
      setImagesSrc(diezImagenes)
    })

  },[selectValue])

  useEffect(()=>{

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res=> res.json())
    .then( ({message}) => {
      const keys = Object.keys(message)
      setBreedList(keys)
    })

  },[])


  if (!breedList && !breedList) return <Loading/>

  return (

    <div className="App">

      <Select data={breedList} setSelectValue={setSelectValue} selectValue={selectValue} />

      {
        ImagesSrc && ImagesSrc.map( (src, i) => <Image index={i} key={src} src={src} /> )
      }
     
    </div>
  );
}

export default App;
