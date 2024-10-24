import react from "react";
import SingleItem from "./SingleItem";


function FinalItem({ caData }) {


  return (
    <>

      {caData.map(item => (
        <SingleItem key={item.id} item={item}
        />
      ))}


    </>
  );
}

export default FinalItem;
