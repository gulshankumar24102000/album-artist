// import React from 'react'

// const Input = () => {
//     const handleAdd=()=>{
//         console.log("clicked")
//     }
//         const formik = useFormik({
//             initialValues: {
//                 role: '',
//                 name: '',
//                 role2:'',
//                 name2:''
    
//             },
    
//             onSubmit: (values) => {
//                 console.log(values, "ghdfg")
//             }
//         });
//         return (
//             <div>
//                 <Box component="form" onSubmit={formik.handleSubmit} mt='15px' ml={2}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={4}>
    
//                             <TextField
//                                 fullWidth
//                                 id="role"
//                                 name="role"
//                                 label="Role"
//                                 type='text'
//                                 sx={{ marginTop: "10px", background: "#F9F9F9" }}
//                                 value={formik.values.role}
//                                 onChange={formik.handleChange}
    
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Box >
//                                 <TextField
//                                     fullWidth
//                                     id="name"
//                                     name="name"
//                                     label="Name"
//                                     type="text"
//                                     sx={{ marginTop: "10px", background: "#F9F9F9" }}
//                                     value={formik.values.name}
//                                     onChange={formik.handleChange}
    
//                                 />
//                             </Box>
    
    
    
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Box mt={2.5}>
//                                 <Button >
//                                     <ClearIcon />
//                                 </Button>
    
//                             </Box>
//                         </Grid>
//                         <Button variant="contained" onClick={handleAdd} sx={{ marginLeft: '20px', marginTop: '10px' }}>Add More</Button>
    
//                     </Grid>
//                     <Box>
//                     <Grid container spacing={2}>
//                         <Grid item xs={4}>
    
//                             <TextField
//                                 fullWidth
//                                 id="role2"
//                                 name="role2"
//                                 label="Role"
//                                 type='text'
//                                 sx={{ marginTop: "10px", background: "#F9F9F9" }}
//                                 value={formik.values.role2}
//                                 onChange={formik.handleChange}
    
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <Box >
//                                 <TextField
//                                     fullWidth
//                                     id="name2"
//                                     name="name2"
//                                     label="Name"
//                                     type="text"
//                                     sx={{ marginTop: "10px", background: "#F9F9F9" }}
//                                     value={formik.values.name2}
//                                     onChange={formik.handleChange}
    
//                                 />
//                             </Box>
    
    
    
//                         </Grid>
//                         <Grid item xs={2}>
//                             <Box mt={2.5}>
//                                 <Button >
//                                     <ClearIcon />
//                                 </Button>
    
//                             </Box>
//                         </Grid>
//                         <Button variant="contained" sx={{ marginLeft: '20px', marginTop: '10px' }}>Add More</Button>
    
//                     </Grid>
//                     </Box>
//                     <Box textAlign="center" marginTop="25px" marginBottom="15px">
    
//                         <Button variant="contained" sx={{
//                             width: { xs: "108px", sm: "165px", md: "230px" },
//                             height: { xs: "48px", sm: "48px", md: "50px" }, fontWeight: 700,
//                             fontSize: { xs: '16px', md: '20px' }, textTransform: 'capitalize', background: '#f73378'
//                         }} className="loginbtn" fullWidth disableElevation type='submit'>
//                             Submit
//                         </Button>
//                     </Box>
//                 </Box>
//             </div>
//         )
// }

// export default test
