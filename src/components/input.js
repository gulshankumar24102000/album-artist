import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';
import './input.css';
import { useNavigate } from 'react-router-dom';


const Index = () => {
    const [data,setData]=useState('')
    const navigate = useNavigate();
    const [listData, setListData] = useState([{ role: "", name: "" }]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...listData];
        list[index][name] = value;
        setListData(list);
        setData(list);

    };

    const handleServiceRemove = (index) => {
        const list = [...listData];
        list.splice(index, 1);
        setListData(list);
        setData(list);
    };

    const handleAdd = () => {
        setListData([...listData, { role: "", name: "" }]);
        
       
    };
    const handleSubmit= ()=>{
          localStorage.setItem("data",JSON.stringify(data))
       navigate('/result',data);
    
   
       
    }
    return (
        <>
        <Box component="form" autoComplete="off" mt='15px' ml='10px'>
            {listData.map((roleAdd, index) => (
                <Box key={index} className="role">

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                fullWidth
                                label="Name"
                                sx={{ marginTop: "10px", background: "#F9F9F9" }}
                                name="name"
                                type="text"
                                id="name"
                                value={roleAdd.name}
                                onChange={(e) => handleChange(e, index)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Role"
                                name="role"
                                type="text"
                                sx={{ marginTop: "10px", background: "#F9F9F9" }}
                                id="role"
                                value={roleAdd.role}
                                onChange={(e) => handleChange(e, index)}
                                required
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Box mt={2}>
                                {listData.length !== 0 && (
                                    <Button variant="contained" sx={{
                                        width: {  md: "60px" },
                                        height: { md: "45px" },
                                        textTransform: 'capitalize', background: 'red',mt:'2'
                                    }}
                                     onClick={() => handleServiceRemove(index)}
                                        
                                    >
                                        <ClearIcon />
                                    </Button>
                                )}
                               
                            </Box>
                        </Grid>
                         </Grid>

                        {listData.length - 1 === index && listData.length < 5
                         && (
                            <Button variant="contained" sx={{
                                width: { xs: "108px", sm: "165px", md: "100px" },
                                height: { xs: "48px", sm: "48px", md: "45px" },
                                textTransform: 'capitalize', background: '#f73378',mt:'8px'
                            }}

                                onClick={handleAdd}
                                className="add-btn"
                            >
                                <span>Add More</span>
                            </Button>
                        )}
                   
                   
                   

                </Box>
            ))}
            {/* </Box> */}
           
            
        </Box>
        <Box textAlign="center" marginTop="25px" marginBottom="15px">
    
    <Button variant="contained" sx={{
        width: {  md: "230px" },
        height: { md: "50px" }, fontWeight: 700,
        fontSize: { xs: '16px', md: '20px' }, textTransform: 'capitalize', background: 'red'
    }} className="loginbtn" fullWidth  onClick={handleSubmit} >
        Submit
    </Button>
</Box>
{/* {listData &&
        listData.map((singleService, index) => (

             <ul key={index}>
                 <li>
                     {singleService.name && <span>{singleService.name}</span>}
                     <span className='value'>{singleService.role}</span>
                 </li>
             </ul>



             
         ))} */}
         
    
     </>
    );
}


export default Index;
