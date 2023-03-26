import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import SingleCart from "../SingleCart/SingleCart";

const Cart = () => {
  const [data, setData] = useState([])
  const [showAll, setShowAll] = useState(false);
  const [uniqId, setUniqId] = useState(null);
  const [uniqData, setUniqData] = useState({})

  const seeMore = () =>{
    setShowAll(true);
  }
  const dateSorts =()=>{
    const sortedData = data.sort((a,b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    })
    setData([...data, sortedData])
  }

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqId}`)
    .then(res=>res.json())
    .then(result => setUniqData(result.data)) 
  }, [uniqId]);
  // const {features, image} = data;
  // console.log(data);
  useEffect( ()=>{
    const fetchData = async() =>{
      const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
      const dataResult = await res.json();
      setData(dataResult.data.tools);
    }
    fetchData()
  }, []);
  // const  getIdVal = (id, data) =>{
  //   console.log(id);
  //   console.log(data);
  // }
  return (
    <div className="container mx-auto">
      <span onClick={dateSorts}>
        <Button>Sort By Date</Button>
      </span>
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        data.slice(0, showAll ? 12 : 6).map(singleData => <SingleCart 
          key={singleData.id} 
          data={singleData} 
          getIdVal={setUniqId}
          ></SingleCart>)
      }
      </div>
      {
        !showAll && <span onClick={seeMore}><Button>See More</Button></span>
      }
      <Modal 
      data={uniqData}
      ></Modal>
    </div>
  );
};

export default Cart;
