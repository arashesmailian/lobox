import AddOptionInput from "components/AddOptionInput";
import { useState } from "react";
import DropDownMultiple from "../../components/DropdownMultiple/DropdownMultiple";
import React from "react";
import styles from "./styles.module.scss";

const Home = () => {
  const [options, setOptions] = useState<string[]>([
    "Education 🎓",
    "Yeeeah, Science! 🔮",
    "Art 🎭",
    "Sport ⚽",
    "Games 🎮",
    "Health 🏥",
  ]);

  const handleAddOption = (option: string) => {
    setOptions([...options, option]);
  };
  return (
    <div className={styles.container}>
      <AddOptionInput onAddOption={handleAddOption} />
      <DropDownMultiple data={options} title="Science" />
    </div>
  );
};

export default Home;
