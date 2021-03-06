import React from "react";
import Select from "react-select";
import styled from "styled-components";

const SelectComponent = styled.div`
  width: 300px;
  margin-right: 5px;
  margin-top: 0px;
  height: 32px;
  input {
    min-height: 18px !important;
  }
  @media (max-width: 980px) {
    width: 100%;
  }
`;

const theme = (theme) => ({
  ...theme,
  borderRadius: 8,
  colors: {
    ...theme.colors,
  },
});

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted #ccc",
    color: state.isSelected ? "#fff" : "#666",
    backgroundColor: state.isSelected ? "#6E7D60" : "#fff",
    padding: 5,
  }),
  control: (provided) => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    border: "1px solid #ddd",
    color: "#ccc",
    // height: "32px",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    borderRadius: "4px",
    // backgroundColor: "green",
    opacity: state.isDisabled ? 0.5 : 1,
  }),
};

function DropDown(props) {
  return (
    <SelectComponent>
      <Select defaultValue={props.defaultValue} theme={theme} styles={customStyles} onChange={props.onChange} options={props.options} />
    </SelectComponent>
  );
}

export default DropDown;
