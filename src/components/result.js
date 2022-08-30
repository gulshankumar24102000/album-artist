import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';

const Result = (data, listData) => {
  // const[store,setStore]=useState('')
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('data'));
    if (items) {
      setItems(items);
    }
  }, []);
  return (
    <Box>
      <div className="output">
        <h2>Output
        </h2>
        {items &&
          items.map((singleService, index) => (

            <ul key={index}>
              <li>
                {singleService.name && <span>{singleService.name}</span>}
                <span className='value'>{singleService.role && <span>{singleService.role}</span>}</span>
              </li>
            </ul>




          ))}


      </div>
    </Box>
  )
}

export default Result