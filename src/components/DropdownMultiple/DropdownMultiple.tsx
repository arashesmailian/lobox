import { FC, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./DropDownMultiple.module.scss";

interface Props {
  data: string[];
  title: string;
}

const DropdownMultiple: FC<Props> = ({ data, title }) => {
  // logics for dropdown auto closing
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const clickEventListener = (e) => {
    if (!dropdownRef?.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const handleSelectOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selected) => selected !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("mouseup", clickEventListener);
    }
    return () => {
      window.removeEventListener("mouseup", clickEventListener);
    };
  }, [isOpen]);

  const handleToggleDropDown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={dropdownRef} className={styles.container}>
      <div
        className={clsx(
          styles.dropDownContainer,
          isOpen ? styles.dropDownActive : styles.notActive
        )}
        onClick={handleToggleDropDown}
      >
        {selectedOptions.join(", ") || title}
        <div className={clsx(styles.arrow, isOpen ? styles.arrowActive : null)}>
          <svg
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4.76514L10 9.76514"
              stroke="#464749"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M16 4.76514L10 9.76514"
              stroke="#464749"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div
        className={clsx(
          styles.dropdown_list,
          isOpen ? styles.maxHeight : styles.minHeight
        )}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className={
              selectedOptions.includes(item) ? styles.isSelected : null
            }
            onClick={() => handleSelectOption(item)}
          >
            {item}
            {selectedOptions.includes(item) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275z"
                />
              </svg>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};

export default DropdownMultiple;
