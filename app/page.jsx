'use client'

// import SessionCard from "@components/SessionCard";
// import Feed from "@components/Feed";
// import ReactGrid from "@components/ReactGrid";
// import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useToast } from "@hooks/use-toast";
export default function Home() {

  const checkRegistered = (id) => {
    const value = registeredEvents.some(event => event._id === id)
    return value
  }


  return (
    <>
    <section className="w-2/3 flex-center flex-col mb-16 ">
    <h1 className="head_text text-center black_gradient py-2 ">
      Prevent Misdiagnosis of Diabetes
    </h1>
    <br/>
    <p className="desc text-center">
      Medicare is a website created aiming to reduce the number of misdiagnosis of Type 1 diabetes over Type 2 diabetes. 
    </p>
    <div className="flex-center gap-4 mt-8">
      <button className="black_btn">
        Jump to Input Section
      </button>
      <button className="outline_btn">
        Learn More
      </button>
    </div>
    </section>
    
    
    </>

  );
}