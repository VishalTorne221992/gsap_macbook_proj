import React from 'react'
import useMacbookStore from '../store';

const ProductViewer = () => {

    const { color, scale} = useMacbookStore();
  return (
    <section>
           <h2>Take a closer look</h2>

            <div className='controls'>
               <p className="info">MacbookPro 16" in Space Black</p>

               <div className='flex-center gap-5 mt-5'>
                   <div className='color-control'>
                       <div className='bg-neutral-300' />
                       <div className='bg-neutral-900' />
                   </div>

                   <div className='size-control'>
                       <div className='bg-neutral-300' />
                       <div className='bg-neutral-900' />
                   </div>

               </div> 
            </div> 
    </section>
  )
}

export default ProductViewer