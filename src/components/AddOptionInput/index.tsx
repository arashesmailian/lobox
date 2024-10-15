import React from "react";
import { FC, useState } from "react";
import styles from "./styles.module.scss";

type AddOptionInputProps = {
  onAddOption: (option: string) => void;
};

const AddOptionInput: FC<AddOptionInputProps> = ({ onAddOption }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim()) {
      onAddOption(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      className={styles.input}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Add new option"
    />
  );
};

export default AddOptionInput;
