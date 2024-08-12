import useGetAll from "../../async/hooks/useGetAll";
import CardData from "./common/CardData";
import { useState } from "react";
import { Button } from "react-bootstrap";


const Entertainment = () => {
  const [pageSize,setPageSize]=useState(6)
  const { data, loading, totalResults } = useGetAll("entertainment", pageSize);
  return (
    <>
    <CardData data={data} loading={loading}/>
    <div className="loadmoreDiv">
    <Button onClick={()=>setPageSize(prev=>prev+6)}>Load More</Button>
    </div>
    </>
  )
}

export default Entertainment