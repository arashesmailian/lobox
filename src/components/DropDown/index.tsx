import { FC, useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import React from "react";

interface Props {
  options: string[];
}

const MultiSelectDropdown: FC<Props> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.multi_select_dropdown} ref={dropdownRef}>
      <div
        className={styles.dropdown_header}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.join(", ") || "Science"}
      </div>
      {isOpen && (
        <div className={styles.dropdown_body}>
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                className={
                  selectedOptions.includes(option) ? styles.selected : ""
                }
                onClick={() => handleSelectOption(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
