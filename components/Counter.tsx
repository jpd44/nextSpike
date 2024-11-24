'use client';

import { useState } from "react";

export default function Counter() {
    const [count, setCount]=useState(0);
    
    return(
        <div className="flex flex-col items-center w-[100px] text-7xl">
            <p className="text-5xl font-bold">{count}</p>

            <button className="bg-blue-500 text-lg rounded text-white px-4 p-4" onClick={()=> setCount(count+1)}>Increment count</button>
        </div>
    )
}