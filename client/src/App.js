import { Fragment, useState } from 'react';
import './App.css';
import SearchRecord from './pages/SearchRecord';
import { searchData } from './service/index';
import DisplayRecord from './pages/DisplayRecord';


function App() {
  const [value, setValue] = useState(0)
  const [show, setShow] = useState(false)
  const [data, setData] = useState()
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSearch = async () => {
    if(!value){
      alert("please enter some id to search")
      return;
    }
    const response = await searchData(value)
    if (!response.data){
      alert("No record match please try again")
      setValue(0)
      return;
    }
    if (!response.data.title && !response.data.body){
      alert("Something went Wrong please try again")
      setValue(0)
      return;
    }
    setData(response.data)
    setShow(true)
    setValue(0)
  }
  
  return (
    <Fragment>
      { show ?  
        <DisplayRecord 
          setShow={setShow}
          show={show} 
          data={data}
        /> : 
        <SearchRecord
          value={value}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
      }
    </Fragment>
  );
}

export default App;
