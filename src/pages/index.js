import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from './navbar';
import  CustomNav  from './customNav';
import Card from './components/card';
import Map from './components/dynamicMap';
import { useEffect,useState } from 'react';
import { getdata } from './Data/data';


export default function Home() {
  
  const [userData, setData] = useState(null);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
        (newPos) => setPosition(newPos),
        console.error
      );
      async function fetchData() {
        const c = await getdata();
        setData(c);
      }
      fetchData();
    }, []);
  return (
    <div className="container-xl">
      <Navbar />
      <CustomNav className='z-10'/>
      <div className="mx-5 my-2 px-2 container-lg h-full p-5 grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="grid gap-0 lg:grid-cols-2 sm:grid-cols-2">
          {userData?.map((e)=>{
            return(
              <Card  key={e.price} e={e}/>
            )
          })}
        </div>
        <div className="rounded-2xl mapGrid my-2 py-1">
          <Map className="rounded-2xl z-1" />
        </div>
      </div>
    </div>
  );
}
