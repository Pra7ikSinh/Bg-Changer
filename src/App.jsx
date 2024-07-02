import { useState } from 'react'

function App() {

  const [color, setColor] = useState('white');

  return (
    <>
      <div className='w-full h-screen duration-1000' style={{ backgroundColor: color }}>
        <div className='flex flex-col min-h-screen  justify-center items-center font-mono' style={{ color: ['black', 'gray', 'maroon', 'purple', 'olive', 'navy'].includes(color) ? 'white' : 'black'}}>
          <div className='text-6xl'>
            Bg Changer
          </div>
          <div className='p-5'>
            - A Simple Backgrounder Changer App Made With <a href="https://react.dev/" target='_blank' className="font-semibold underline decoration-purple-500">React</a> And <a href="https://tailwindcss.com/" target='_blank' className="font-semibold underline decoration-blue-500">Tailwind</a>.
          </div>
        </div>
        <div className=''>
        </div>

        <div className='fixed bottom-5 flex flex-wrap justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-white bg-black' onClick={() => setColor('black')}>black</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-white' onClick={() => setColor('white')}>white</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-white bg-gray-500' onClick={() => setColor('gray')}>gray</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black' style={{ backgroundColor: 'silver' }} onClick={() => setColor('silver')}>silver</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-white' style={{ backgroundColor: 'maroon' }} onClick={() => setColor('maroon')}>maroon</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-red-500' onClick={() => setColor('red')}>red</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-white bg-purple-500' onClick={() => setColor('purple')}>purple</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-fuchsia-500' onClick={() => setColor('fuchsia')}>fuchsia</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-green-500' onClick={() => setColor('green')}>green</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-lime-500' onClick={() => setColor('lime')}>lime</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-white' style={{ backgroundColor: 'olive' }} onClick={() => setColor('olive')}>olive</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-yellow-500' onClick={() => setColor('yellow')}>yellow</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-white' style={{ backgroundColor: 'navy' }} onClick={() => setColor('navy')}>navy</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-blue-500' onClick={() => setColor('blue')}>blue</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black bg-teal-500' onClick={() => setColor('teal')}>teal</button>
            <button className='outline-none px-4 py-1 rounded-full shadow hover:shadow-lg cursor-pointer text-black' style={{ backgroundColor: 'aqua' }} onClick={() => setColor('aqua')}>aqua</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

