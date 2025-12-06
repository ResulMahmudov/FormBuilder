import { CloseOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react'
import Inputs from './input/Inputs';
import useFormState from './store/useFormState';

const Modul = () => {
  const [open, setOpen] = useState(false);

  const form = useFormState((state) => state.inputList);
  const update = useFormState((state) => state.updateInput);
  const removebtn = useFormState((state) => state.remove);


  const handleInputChange = (id, event) => {
    const value = event.target.value;
    update(id, value);
  };



  const hasInputs = form.length > 0;

  return (
    <div>
      {!hasInputs && (
        <button onClick={() => setOpen(true)}>

          <div className="group flex justify-center items-center hover:bg-white relative top-[150px] hover:scale-110 transition-transform duration-300 w-[460px] h-[250px] text-gray-400 border-[1px] border-dashed border-gray- rounded-2xl">
            <div className=" text-xl  flex items-center justify-center transition group-hover:bg-blue-50 w-[50px] h-[50px] rounded group-hover:text-blue-700  ">
              <PlusOutlined />
            </div>

          </div>

          {/* Modal */}
        </button>
      )}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center  top-[-40px]">
          <div className="bg-white p-6 rounded-xl w-[500px]">

            <div className='flex items-center justify-between border-b '>
              <h1>Add Field</h1>
              <button
                className=" text-gray-400 hover:bg-gray-200 w-[30px] h-[30px] rounded-lg hover:text-gray-600 mb-2 text-sm"
                onClick={() => setOpen(false)}
              >
                <CloseOutlined />
              </button>
            </div>
            <div className='mt-4'>
              <Inputs setOpen={setOpen} />
            </div>
          </div>
        </div>
      )}




      <div className='mt-4 flex  items-center justify-center flex-col gap-4'>
        {form.map((item) => (
            <div key={item.id}  className=" group flex items-start justify-start gap-[20px]">
              <div className=" p-4  bg-white rounded-lg shadow-sm  ">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New {item.type.toUpperCase()}
                </label>
                <input
                  // Inputun tipini state-dən alırıq (item.type)
                  type={item.type}
                  placeholder={`Dəyəri daxil edin... (${item.type})`}
                  // Inputun dəyərini state-dən alırıq
                  value={item.value}
                  // Dəyişiklik olanda state-i yeniləyirik
                  onChange={(e) => handleInputChange(item.id, e)}
                  className="mt-1 block w-[450px] border rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button onClick={() => removebtn(item.id)} className=" p-4 bg-white rounded-lg shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <DeleteOutlined />
              </button>
            </div>
          
        ))}
        {hasInputs && (
          <button
            onClick={() => setOpen(true)}
            className="mt-4 bg-gray-200 text-gray-700 p-1 rounded-lg flex items-center hover:bg-gray-300 transition"
          >
            <PlusOutlined className='mr-2'/> Add
          </button>
        )}
      </div>
   
    </div>
  );
}

export default Modul