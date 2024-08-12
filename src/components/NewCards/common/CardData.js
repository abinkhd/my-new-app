import React from 'react'
import MyCard from "./MyCard";
import Spinner from "react-bootstrap/Spinner";
const CardData = ({data,loading}) => {
  // console.log(data.map((map,index)=>index));
  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="container">
          <div className="row">
            {data.map((d) => (
              <div className="col-sm" key={d[0]}>
                <MyCard 
                  data={d}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CardData