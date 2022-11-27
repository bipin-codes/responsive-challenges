import React from "react";
import { HTMLInputTypeAttribute } from "react";
import { Input, InputLabel, InputContainer, AckContainer } from "./styles";
const InputField: React.FC<{
  name: string;
  type: HTMLInputTypeAttribute;
  icon: string;
  placeholder: string;
}> = ({ name, type, icon, placeholder }) => (
  <Input>
    <InputLabel>{name}</InputLabel>
    <InputContainer>
      <span className="material-symbols-outlined">{icon}</span>
      <input placeholder={placeholder} type={type} />
    </InputContainer>
  </Input>
);

const SelectInput: React.FC<{
  name: string;
  icon: string;
  placeholder: string;
}> = ({ name, icon, placeholder }) => (
  <Input>
    <InputLabel>{name}</InputLabel>
    <InputContainer>
      <span className="material-symbols-outlined">{icon}</span>
      <select>
        <option>{placeholder}</option>
      </select>
    </InputContainer>
  </Input>
);

const Ack: React.FC<{ msg: string }> = ({ msg }) => (
  <AckContainer>
    <input type={"checkbox"} />
    <span>{msg}</span>
  </AckContainer>
);

export { InputField, SelectInput, Ack };
