import React from 'react';


const ProductCard = ({el}) => {
    //https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cC27Z2eQJXjII2Bw7D4BDCsTCr1.jpg
    return (
       
        <div className=" xl:w-[250px] xl:h-[400px] xl:gap-2 max-xl:gap-[20px] rounded-2xl xl:pb-[40px] flex items-center xl:flex-col max-lg:w-[550px] max-lg:h-[250px]  bg-zinc-950">
                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img"  className='rounded-2xl xl:w-full xl:h-[95%] max-lg:w-[140px]  '  />
<div className="">
<h1 className='lg:text-[20px] max-md:text-[18px] font-bold font-serif  text-white '>{el.title}</h1>
       <p className='xl:hidden max-lg:block text-sm py-[10px]'><i>{el.overview.slice(0,50)}</i></p>
       <button className='xl:hidden max-lg:block text-[14px] bg-red-700 p-[5px]'>Оформить подписку</button>
</div>
      </div>
    );
};

export default ProductCard; 