import React , { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);

    return (
        <div>
<div className="flex flex-col items-center h-full justify-center">
            <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
            <div>
                <button onClick={increment} className="text-xl font-semibold px-4 py-2 bg-rose-600 text-white rounded">
                    Increment +
                </button>
                <button onClick={decrement} className="text-xl font-semibold px-4 py-2 bg-slate-600 text-white rounded ml-2">
                    Decrement -
                </button>
            </div>
        </div>
        </div>
    )
}

export default Counter;