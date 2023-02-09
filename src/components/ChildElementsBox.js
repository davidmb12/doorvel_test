import { fetchDataChild } from "@/helpers/fetchData";
import { Image } from "@mui/icons-material";
import {  ButtonBase, Grid, ListItem, Pagination, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";

export const ChildElementsBox = ({parent}) => {
    const [data, setData] = useState([]);
    const [currentSelected,setCurrentSelected] = useState(0);

    useEffect(()=>{
        fetchDataChild(parent,setData);
    },[]);

    const handleOnPageChange =(selected)=>{
        setCurrentSelected(selected);
    }
    return (
        
        <>
            {
                data.length > 0 ? (
                <Grid container spacing={2} margin={2} >
                    <Grid item xs={12} sm container >
                      <Grid item xs container direction="column" spacing={2} className=''>
                        <Container>
                          <Typography gutterBottom variant="subtitle1" component="div">
                            {data[currentSelected]['name']}
                          </Typography>
                            {data[currentSelected]['id']}
                          <Typography variant="body2" gutterBottom>
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {data[currentSelected]['']}
                          </Typography>
                        </Container>
                        <Grid item>
                          
                        </Grid>
                      </Grid>
                      
                    </Grid>
                  </Grid>):(<Grid item xs={12} sm container></Grid>)
            }
            
            <Pagination count={data.length} onChange={(e,value)=>handleOnPageChange(value-1)}></Pagination>
           
        </>
      );
    
}
