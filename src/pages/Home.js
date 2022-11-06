import React, {useState, useContext} from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
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

 let navigate = useNavigate()
 let {user} = useContext(AuthContext)
 let [data,setData] = useState({ length: 0 })
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
     loader={<h4 className='p-8'>Loading...</h4>}
     endMessage={
       <p style={{ textAlign: "center" }}>
         <b>Yay! You have seen it all</b>
       </p>
     }
     // below props only if you need pull down functionality
     scrollThreshold="50px"
     refreshFunction={refresh}
     pullDownToRefresh
     pullDownToRefreshThreshold={.4}
   >
     <div style={{ minHeight: "100vh"  }}>
       {items.map((user) => (
        <>
        <div style={{display:"flex"}} className="justify-between m-5">
        <div className="justify-center" >
        <h5>{user.name.first} {user.name.last}</h5>
        <p>{user.email}</p>
        </div>
         <img src={user.picture.large} height="200px" width="200px"  />
         </div>
         <hr/>
         </>
       ))}
     </div>
   </InfiniteScroll>
    </>
  )
}

export default Home




