import './App.css';

function App() {
  return (
    <div className="text-center">
      <body>
        {/* <!-- Default colors --> */}
        <p className='text-red-500 font-bold'>Tailwind is awesome</p>
        {/* --------------------------------------------- Custom colors --------------------------*/}
        <p className='text-yellowSichmine font-bold'>Sichmine color test</p>
        <p className='text-blackSichmine font-bold font-bold'>This is the black Sichmine's color</p>
        {/* <!-- white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  --> */}
        <p className='text-amber-400 font-bold'>This is the Amber color i found it beautiful</p>
        <p className='text-yellow-500 font-bold'>I suppose yellow-500 is also interseting and good-looking</p>
        {/* <!-- Text Colors --> */}
        <p className='text-lime-500 font-bold'>This is the text lime-500</p>
        <p className='text-lime-400 font-bold'>This is the text lime-400</p>
        <p className='text-emerald-500 font-bold'>This is the emerald-500 color </p>
        <p className='text-emerald-400 font-bold'>This is the best emerald-400 color</p>
        <p className='text-teal-500 font-bold'>This is the teal color of text one of the most beautiful</p>
        <p className='text-teal-400 font-bold'>This is the teal color of text is also one of the most beautiful</p>
        <p className='text-cyan-500 font-bold'>This is the cyan color really good</p>
        <p className='text-cyan-400 font-bold'>This is the cyan-400 color i really like it</p>
        <p className='text-sky-500 font-bold text-2xl'>This is the sky color that is really appeals to me</p>
        <p className='text-violet-700 font-bold text-3xl'>This is my favourite color. I really like it because in Timeactions Markus had this type of colour on the wings</p>
        <p className='text-purple-600 font-bold text-3xl'>This is the purple color which is similiar to the previous one</p>
        <p className='text-pink-600 text-3xl font-bold'>This is the pink color and it is supposed to be girls' color but i also like it</p>
        <p className='text-rose-600 text-3xl font-bold'>This is the rose colour</p>
        {/* <!-- Background Colors --> */}
        <p className='w-1/3 bg-purple-500 m-auto'>Background color</p>
        <p className='w-1/3 bg-violet-500 m-auto'>Background color</p>
        <p className='w-1/3 bg-yellow-500 m-auto'>Background color</p>
        <p className='w-1/3 bg-amber-500 m-auto'>Background color</p>
        <p className='w-1/3 bg-yellowSichmine m-auto'>Background color</p>
        <p className='w-1/3 bg-blackSichmine m-auto text-white'>Background color</p>
        {/* <!-- Text Underline --> */}
        <p className='underline decoration-red-500 underline-offset-8'>This is the decorated and underline text</p>
        <p className='underline decoration-purple-600 underline-offset-4'>This is the underlined 4 text</p>
        <p className='underline decoration-yellowSichmine underline-offset-3'>This is the Sichmine's underlined color</p>
        <p className='underline decoration-cyan-500 underline-offset-2'>This is the cyan colour</p>
        {/* <!-- Border Colors --> */}
        <div className='w-1/5 m-auto border-4 border-rose-500'>This is the border</div>
        <div className='w-1/4 m-auto border-4 border-cyan-500'>This is the indigo border</div>
        <div className='w-1/6 m-auto border-8 border-emerald-600'>This is the emerald color</div>
        <div className='w-1/6 m-auto border-4 border-yellowSichmine '>This is the yellowSichmine</div>
        {/* <!-- Divide Colors --> */}
        <div className='w-1/6 m-auto divide-y divide-blue-400'>
          This is divide colour by axis y
          <div> 1 </div>
          <div> 2 </div>
          <div> 3 </div>
        </div>
        <div className='flex justify-between w-1/4 m-auto divide-x divide-yellowSichmine'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        {/* <!-- Outline Colors --> */}
        <div className='flex justify-between w-1/2 m-auto'>
        <input className='block outline outline-offset-2 outline-yellowSichmine text-white bg-slate-700 border border-4 border-slate-700'/>
        <input className='block outline outline-offset-2 outline-violet-500 text-white bg-slate-700'/>
        </div>
        {/* <!-- Box Shadow Colors (Opacity defaults to 100, but you can set it)--> */}
        <button className='shadow-lg shadow-violet-400 bg-cyan-400 '>Subscribe</button>
        {/* <!-- Accent Colors --> */}
        <input type='checkbox' className='accent-emerald-500'/>
        <input type='checkbox' className='accent-purple-500'/>
        {/* <!-- Arbitrary Colors --> */}
        <div className='bg-[rgb(255,0,0)]'>Arbitrary colors rgb</div>
        <div className='bg-[#FF00FF]'>Arbitrary colors hex</div>
        <div className='bg-[steelblue]'>Arbitrary colors root</div>
      </body>
    </div>
  );
}

export default App;
