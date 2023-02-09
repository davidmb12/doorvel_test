import { DataContext } from "@/pages";
import {   Grid,  Pagination, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useContext, useEffect, useState } from "react";

export const ChildElementsBox = ({parentId}) => {
    const {childData} = useContext(DataContext);
    const [currentSelected,setCurrentSelected] = useState(0);
    const [data,setData] = useState(childData[0]);

    useEffect(() => {
        const filteredData = data.filter(child =>child.amenity_parent == parentId);
        setData(filteredData);
    }, [])
    
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
                          </Typography>
                        </Container>
                        
                      </Grid>
                      
                    </Grid>
                  </Grid>):(<Grid item xs={12} sm container></Grid>)
            }
            
            <Pagination count={data.length} onChange={(e,value)=>handleOnPageChange(value-1)}></Pagination>
           
        </>
      );
    
}
