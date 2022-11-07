import React from 'react';
import Navbar from '../components/Navbar'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";


let result = 10;
const fetchData = (setItems, items) => {
 
axios
  .get(`https://randomuser.me/api/?results=${result}`)
  .then((res) => {
     setItems([...items, ...res.data.results]);
     result = result + 1;
  });
};

const refresh = (setItems) => {};

function Home() {

  const [items, setItems] = React.useState([]);
 
  React.useEffect(()=>{
   fetchData(setItems,items)
  },[])


  return (
    <>
      <Navbar />
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={() => {
          fetchData(setItems, items);
        }}
        hasMore={true}
        loader={<h4 className='p-8 text-red-600'>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollThreshold="50px"
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={.4}
      >
        
       <div style={{ minHeight: "100vh"  }}>
         {items.map((user) => (
          <div className='m-8'>
            <div style={{display:"flex"}} className="justify-between m-5">
              <div className="mx-auto" style={{display:"flex"}}>
                <div className='sm:px-4 w-full lg:w-80 text-center place-items-center border-inherit border-2'>
                  <h5 className='font-serif text-xl p-4'>{user.name.first} {user.name.last}</h5>
                </div>
                <div className='sm:px-4 w-full text-center border-inherit border-2'>
                  <p className='font-serif text-xl p-4'>{user.email}</p>
                </div>
              </div>
              <img src={user.picture.large} height="200px" width="200px"  />
            </div>
            <hr/>
           </div>
         ))}
       </div>
      </InfiniteScroll>
    </>
  )
}

export default Home




