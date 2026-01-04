'use client'
import React, { useState } from "react";
import Container from "../shared/Container";
import Button from "../Reuseable/Button";

export default function Banner() {
      
  return (
    <section
      className="w-full md:min-h-[calc(100vh-100px)] bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/ed3c46_ea68a5d166eb4c1abb4ab49ea28252ce~mv2.png')",
      }}
    >
      {/* Top Content */}
      <Container className="flex flex-1 justify-start w-full mx-auto">
  <div className=" flex-1 flex justify-start items-center">
        <div className="  px-6 text-white ">
      
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              Edit Sports Videos Like a Pro
            </h1>

            <p className="text-sm md:text-lg text-gray-200 mb-6">
              Create stunning sports edits with professional effects, smooth
              transitions, and cinematic visuals.
            </p>

            <div className="flex gap-4">
                <Button size = "md">Get Started</Button>
                <Button variant = "secondary" size = "md" >Learn More</Button>

            </div>
          
        </div>

          
      </div>
      </Container>

    
      {/* Bottom Auto-Scroll Stats */}
       <div className=" overflow-hidden pb-8">
      <div
        className={`flex w-max whitespace-nowrap text-white text-sm md:text-xl font-semibold cursor-pointer animate-marquee`}
      >
        {/* First set */}
        <span className="mx-8"> 500+ Projects Completed</span>
        <span className="mx-8"> 120+ Happy Clients</span>
        <span className="mx-8"> $250K+ Revenue Generated</span>
        <span className="mx-8"> 5+ Years Experience</span>

        {/* Duplicate set (ONLY once) */}
        <span className="mx-8"> 500+ Projects Completed</span>
        <span className="mx-8"> 120+ Happy Clients</span>
        <span className="mx-8"> $250K+ Revenue Generated</span>
        <span className="mx-8"> 5+ Years Experience</span>
        <span className="mx-8"> 500+ Projects Completed</span>
        <span className="mx-8"> 120+ Happy Clients</span>
        <span className="mx-8"> $250K+ Revenue Generated</span>
        <span className="mx-8"> 5+ Years Experience</span>
        <span className="mx-8"> 500+ Projects Completed</span>
        <span className="mx-8"> 120+ Happy Clients</span>
        <span className="mx-8"> $250K+ Revenue Generated</span>
        <span className="mx-8"> 5+ Years Experience</span>
      </div>
    </div>
    </section>
  );
}


