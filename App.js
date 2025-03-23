import { useState } from 'react';
import './App.css'
import DataEntrySection from './components/DataEntrySection';
import Loader from './components/Loader';
import Portfolio from './components/Portfolio';

const App = () => {
  const [dataCompletition, setDataCompletition] = useState(false);
  const [formData, setFormData] = useState({})

  const handleDataCompletition = (newData1, newData2) => {
    setDataCompletition(newData1);
    setFormData(newData2);
    console.log(newData1, newData2)
  }

  return (
    <div className='main-container'>
      {
        dataCompletition ? <Portfolio formData={formData}/>
        : <DataEntrySection
            dataCompletition={dataCompletition}
            formData={formData}
            handleDataCompletition={handleDataCompletition}
          />
      }
    </div>
  );
}

export default App;
