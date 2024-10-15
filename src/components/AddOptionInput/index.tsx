import { FC, useState } from "react";

type AddOptionInputProps = {
  onAddOption: (option: string) => void;
};

const AddOptionInput: FC<AddOptionInputProps> = ({ onAddOption }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      onAddOption(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Add new option"
    />
  );
};

export default AddOptionInput;
