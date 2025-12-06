import { create } from 'zustand';

const useFormState = create((set) => ({
  inputList: [],

  addInput: (inputType) =>
    set((state) => ({
      inputList: [
        ...state.inputList,
        {
          id: Date.now(),
          type: inputType,
          value: inputType === 'number' ? 0 : '',
        },
      ],
    })),

  updateInput: (id, newValue) =>
    set((state) => ({
      inputList: state.inputList.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      ),
    })),

  remove: (id) =>
    set((state) => ({
      inputList: state.inputList.filter((item) => item.id !== id),
    })),
}));

export default useFormState;
