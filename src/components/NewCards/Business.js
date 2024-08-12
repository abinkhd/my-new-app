import useGetAll from "../../async/hooks/useGetAll";
import CardData from "./common/CardData";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Business = () => {
  const [pageSize, setPageSize] = useState(6);
  const { data, loading, totalResults } = useGetAll("business", pageSize);
  return (
    <>
      <CardData data={data} loading={loading} />
      <div className="loadmoreDiv">
    <Button onClick={()=>setPageSize(prev=>prev+6)}>Load More</Button>
    </div>
    </>
  );
};

export default Business;
