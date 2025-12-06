import useFormState from "../store/useFormState";

const Preview = () => {
  const update = useFormState((state) => state.updateInput);
  const form = useFormState((state) => state.inputList);
  const handleInputChange = (id, event) => {
    const value = event.target.value;
    update(id, value);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="mt-4 flex flex-col gap-4 bg-[#fafafa] rounded-lg p-10">
        <div>
          <h1 className="font-bold text-[30px]">Untitled Form</h1>
          <p className="text-[12px]">Please fill out the details below.</p>
        </div>
        <div className="flex flex-col  items-center">
          {form.map((item) => (
          <div key={item.id} className="p-4">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New {item.type.toUpperCase()}
              </label>

              <input
                type={item.type}
                value={item.value}
                onChange={(e) => handleInputChange(item.id, e)}
                className="mt-1 block w-[450px]  rounded-md shadow-sm p-2 bg-gray-100"
              />

            </div>

          </div>
        ))}
        <button className="bg-white">Sumit</button>
        </div>

        {/* Əgər heç input yoxdursa */}
        {form.length === 0 && (
          <p className="text-gray-500 italic">Hazırda önizləmək üçün heç bir input sahəsi yoxdur.</p>
        )}

      </div>
    </div>
  );
};

export default Preview;