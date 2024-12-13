import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Donate() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className='future-projects text-darkgreen font-extrabold flex flex-col justify-center items-center lg:flex-row lg:justify-around w-full lg:p-14'>
        <div id='left' className='lg:w-1/2 py-8 flex justify-center'>
          <h1 className='text-3xl'>Support Our Mission</h1>
        </div>
        <div id='right' className='lg:w-1/2 w-3/4 mb-8 lg:mb-0 flex justify-center items-center flex-col rounded-3xl text-white bg-lightgreen p-8'>
          <h1 className='font-extrabold text-3xl'>
              Donate Now!
          </h1>
          <br />
          <p className='text-darkgreen'>Every seed we plant, every mind we nourish, every step we take toward preserving our world— you are our reason why. This is more than a cause; it’s a movement. Your support is a promise, a vision of a world where every step forward blooms with hope and lasting change. 
<br />
Let’s create that future, together.</p>
          <br />
          <button
            onClick={()=>setOpen(prev=>!prev)}
            className='flex items-center justify-between w-full text-left font-bold text-lg bg-darkgreen text-white p-4 rounded-lg hover:bg-opacity-90 transition duration-300'
          >
            {open?"Hide":"View"} Payment Details {open ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
          </button>
          {open && (
            <p className='mt-4 leading-9 text-darkgreen'>
              Account Name: M/S SUSTAINABLE ENVIRONMENT EDUCATION FOUNDATION CHARITABLE TRUST 
              <br />
Account No: 074722010000566
<br />
IFSC Code: UBIN0907472
<br />
Branch Name: Union Bank, Vasanthanagar
<br />
            </p>
          )}
          <br />
          <br />
          <div className='md:hidden w-3/4'>
            <a href="upi://pay?pa=QR919663669740-0566@unionbankofindia&pn=SUSTAINABLE%20ENVIRONMENT%20EDUCATION%20FOUNDATION%20CHARITABLE%20TRUST&cu=INR&tr=FINACLE_QRCODE&mc=0000&mode=02&purpose=00&sign=MEQCIEJFQsmMzb4puLVI1ShGR1uVcxCEL7Fp2nBBLiMA2S8+AiA7BbAHRMnq6pM7GAfLPB0yNG783pO6BCYfjhdIyuaqfA==">
              <button className='std-btn'>UPI Payment</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donate
