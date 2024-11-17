import React, { useEffect, useState } from 'react'
import { CrossIcon } from 'lucide-react';


const SearchComponent = () => {

    const items = [{ id: 1, name: "Adurite King of the Night", rate: "$579.00", quantity: 160000 }, { id: 2, name: "Purple Queen of the Light", rate: "$324.00", quantity: 90000 }, { id: 3, name: "Silver Emperor of the Dawn", rate: "$275.00", quantity: 75300 }, { id: 4, name: "Gold Emperor of the Night", rate: "$198.00", quantity: 54200 }, { id: 5, name: "Emerald Guardian of the Forest", rate: "$310.00", quantity: 82000 }, { id: 6, name: "Crimson Duke of the Evening", rate: "$450.00", quantity: 105000 }, { id: 7, name: "Sapphire Prince of the Night", rate: "$390.00", quantity: 94000 }, { id: 8, name: "Ruby Monarch of the Sun", rate: "$650.00", quantity: 180000 }];

    const [filtered, setFiltered] = useState(items);
    const [value, setValue] = useState('')

    useEffect(() => {
        setFiltered(items.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())));
    }, [value])

    return (
        <div>
            <div className='bg-gray-800 mt-24 ml-24 mr-24 rounded-full flex justify-between'>
                <input type='text' className='text-white bg-gray-800 w-max p-5' onChange={(e) => setValue(e.target.value)} placeholder='Enter text here' />
                <CrossIcon color='gray' className='m-5' />
            </div>


            <div className="suggestions bg-gray-800 rounded-lg h-max mt-4 ml-24 mr-24">

                <p className='text-gray-300 p-8'>Suggestions: {filtered.length}</p>

                {filtered.map((item) => {

                    return (
                        <ol key={item.id}>
                            <div className='bg-gray-800 hover:bg-gray-600 p-5'>
                                <li>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <img src="https://picsum.photos/50" alt="" className='w-10 h-10 ml-4 rounded-lg' />
                                            <div className='ml-4'>
                                                <h3 className='text-white'>{item.name}</h3>
                                                <p className='text-gray-400'>{item.rate}</p>
                                            </div>
                                        </div>
                                        <p className='text-gray-400'>{item.quantity}</p>
                                    </div>
                                </li>
                            </div>
                        </ol>
                    )
                })}


            </div>
        </div>
    )
}

export default SearchComponent