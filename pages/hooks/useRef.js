import React, { useEffect, useState, useRef } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)
    const prevCount = useRef(0)
    useEffect(() => {
      // This runs every time AFTER Counter is rendered.
      prevCount.current = count
    })
    return (
      <div className="flex flex-col justify-center items-center m-8">
        <div>
          Prev: {prevCount.current}, Count: {count}
        </div>
        <button className="bg-purple-700 px-6 text-white rounded-md hover:bg-purple-500"
          onClick={() => setCount((c) => c + 1)}>+1</button>
      </div>
    )
}

