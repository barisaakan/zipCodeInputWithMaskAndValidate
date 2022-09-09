import { useState } from "react";
import "./styles.css";

export default function ZipBox() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isZipCodeValid, setIsZipCodeValid] = useState<boolean>(true);
  const [showValidation, setShowValidation] = useState<boolean>(false);

  function maskInput(value: string) {
    var lastChar = value[value.length - 1];
    var reg = /^[0-9]*$/;
    if (reg.test(lastChar) && value.length <= 5) return value;
    else return value.slice(0, -1);
  }

  function validate() {
    setShowValidation(true);
    setIsZipCodeValid(/^[0-9]{5}(?:-[0-9]{4})?$/.test(inputValue));
  }

  return (
    <div>
      <label>
        Zip Code:
        <input
          type="text"
          value={inputValue}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setInputValue(maskInput(e.currentTarget.value));
          }}
        />
      </label>
      <button onClick={validate}>Validate</button>
      {showValidation && (
        <span className={isZipCodeValid ? "valid" : "invalid"}>
          {isZipCodeValid ? "Zipcode is valid." : "Zipcode is invalid!"}
        </span>
      )}
    </div>
  );
}
