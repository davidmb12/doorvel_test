export const fetchDataParent = async (setDataCallback)=>
{
    try{
        const res = await fetch(`http://54.177.198.128:8001/api/cat-amenities-parents/?format=json`);
        const newData = await res.json();
        setDataCallback(newData['data']);
    }catch(error){
        console.error(error);
    }
} 

export const fetchDataChild = async (parentId,setDataCallback)=>
{
    try{
        const res = await fetch(`http://54.177.198.128:8001/api/cat-amenities-childs/`);
        const newData = await res.json();
        console.log(newData['results']);
        setDataCallback(newData['results'].filter(child => child.amenity_parent === parentId));
    
    }catch(error){
        console.error(error);
    }
} 