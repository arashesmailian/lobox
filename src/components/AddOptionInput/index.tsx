import { type FC, type KeyboardEvent, useState } from "react";

import styles from "./styles.module.scss";

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
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      className={styles.input}
      value={inputValue}
      onChange={onChange}
      onKeyDown={handleKeyPress}
      placeholder="Add new option"
    />
  );
};

export default AddOptionInput;
