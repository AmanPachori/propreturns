import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from './navbar';
import  CustomNav  from './customNav';
import Card from './components/card';
import Map from './components/dynamicMap';
import { useEffect } from 'react';


export default function Home() {

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
        (newPos) => setPosition(newPos),
        console.error
      );
  }, []);
  return (
    <div className='container-xl'>
    <Navbar/>
    <CustomNav/>
    <div className='mx-5 my-2 px-2 container-lg grid grid-cols-2'>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
      <Card />
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className='rounded-2xl my-2 py-1'>
       <Map className='rounded-2xl'/>
      </div>

    </div>
    </div>
  );
}
