import { useState } from "react";

import AddOptionInput from "@components/AddOptionInput";
import DropDownMultiple from "@components/DropdownMultiple";

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
      <DropDownMultiple options={options} title="Science" />
    </div>
  );
};

export default Home;
