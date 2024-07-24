import {useState, useEffect} from 'react';



const useFetch = (url) => {
 
const [data, setData] = useState(null);
const [error, setError]= useState(null);
const [isPending, setIsPending]= useState(true);

useEffect(()=>{
const abortCont= new AbortController();

fetch(url, {signal:abortCont.signal})
.then(res=>{
    if(!res.ok){
        throw error("Couldn't fetch data");
    }
    return res.json();
})
.then(data=>{
    setData(data);
    setError(null);
    setIsPending(false);
})
.catch(err=>{
    if(err.message==="AbortError"){
        console.log("Message aborted");
    }
    else{
        setError(err.message);
        setIsPending(false);
    }

})
return ()=>{
    abortCont.abort();
}
},[url]);

return {data, error, isPending};

}
 
export default useFetch;