'use client'

import Image from "next/image"
import Profile from "../../public/vercel.svg";

export default function Home() {

  return (
    <main>
      <Image 
      src={Profile}
      alt="vercel logo"
      height="200"
      width="200"
      />
     {/* It will break
      <img
      src={Profile}
      /> */}

      <img
      src = {Profile.src} // it will work
      />

{/* You will error for below 
Error: Invalid src prop (https://unsplash.com/photos/a-police-car-parked-on-the-side-of-the-road-j0syEjr_l9o) on `next/image`,
hostname "unsplash.com" is not configured under images in your `next.config.js` */}
      <Image
      src={"https://unsplash.com/photos/a-police-car-parked-on-the-side-of-the-road-j0syEjr_l9o"}
      alt="vercel logo"
      height="200"
      width="200"
      />
    </main>
  )
}
