import useFormState from "../store/useFormState";

const Inputitems = ({ setOpen, input, type, title, description }) => {
    const add = useFormState((state) => state.addInput);

   const handleAddAndClose = (type) => {
    add(type);      // Inputu əlavə et
    setOpen(false); // Modalı bağla
  };
  return (

    <button  onClick={()=> handleAddAndClose(input)} className="flex items-center justify-start p-1 rounded-lg gap-4 w-[200px] h-[60px]  border border-gray-200">
      <h1 className="bg-[#f7f9fa]  rounded-lg flex items-center justify-center w-[40px] h-[40px]">{type}</h1>
      <div className="flex flex-col ">
        <h1 className="text-[12px] font-bold">{title}</h1>
        <p className="text-[10px]">{description}</p>
      </div>
    </button>
  )
}

export default Inputitems