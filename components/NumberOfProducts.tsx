"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface CounterProps {
    minValue?: number;
    maxValue?: number;
}

const NumberOfProducts: React.FC<CounterProps> = ({ minValue = 0, maxValue = 10 }) => {

    const router = useRouter()

    const [count, setCount] = useState<number>(minValue);

    const increment = () => {
        if (count <= maxValue) {
            setCount(count + 1);
            const params = new URLSearchParams(window.location.search);
            params.set('quantity', (count + 1).toString());
            router.push(`?${params.toString()}`);
        }
    };

    const decrement = () => {
        if (count >= minValue) {
            setCount(count - 1);
            const params = new URLSearchParams(window.location.search);
            params.set('quantity', (count - 1).toString());
            router.push(`?${params.toString()}`);
        }
    };

    return (
        <div className='border flex justify-center mt-2 w-[100%] m-auto'>
            <Button className='rounded-md w-full text-lg' onClick={decrement} disabled={count <= minValue}>
                -
            </Button>

            <Input className='border-none p-0 text-center' type="text" value={count} />

            <Button className='rounded-md w-full text-lg' onClick={increment} disabled={count >= maxValue}>
                +
            </Button>
        </div>
    );
};


export default NumberOfProducts;
