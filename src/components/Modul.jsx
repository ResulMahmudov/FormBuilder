import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react'
import Inputs from './input/Inputs';

const Modul = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>

        <div className="group flex justify-center items-center hover:bg-white relative top-[-250px] hover:scale-110 transition-transform duration-300 w-[460px] h-[250px] text-gray-400 border-[1px] border-dashed border-gray-500 rounded-2xl">
          <div className=" text-xl  flex items-center justify-center transition group-hover:bg-blue-50 w-[50px] h-[50px] rounded group-hover:text-blue-700  ">
            <PlusOutlined />
          </div>

        </div>

        {/* Modal */}
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center  top-[-40px]">
          <div className="bg-white p-6 rounded-xl w-[500px]">

            <div  className='flex items-center justify-between border-b '>
              <h1>Add Field</h1>
               <button
              className=" text-gray-400 hover:bg-gray-200 w-[30px] h-[30px] rounded-lg hover:text-gray-600 mb-2 text-sm"
              onClick={() => setOpen(false)}
            >
              <CloseOutlined />
            </button>
            </div>
           <div className='mt-4'>
             <Inputs/>
           </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modul