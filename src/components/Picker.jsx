import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { debounce } from "@mui/material/utils";

import { searchIngredients } from "../utils/api";
import Ingredient from "./Ingredient";

const StyledBody = styled.div`
  background-colour: grey;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Picker = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  const fetch = useMemo(
    () =>
      debounce(async (request, callback) => {
        const result = await searchIngredients(request);
        console.log("result = ", result);
        const processResults = (resultArray) =>
          resultArray.map((resultItem) => ({
            ...resultItem,
            label: resultItem.name,
          }));
        callback(processResults(result?.data?.results));
      }, 400),
    []
  );

  useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(inputValue, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <StyledBody>
      <Autocomplete
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        sx={{ width: 300 }}
        options={options}
        renderInput={(params) => <TextField {...params} label="Food" />}
        filterOptions={(x) => x}
      />
      {value ? <Ingredient ingredientId={value?.id} /> : <h1>Select a food</h1>}
    </StyledBody>
  );
};

export default Picker;
