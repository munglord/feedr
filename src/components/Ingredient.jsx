import {
  Card,
  CardMedia,
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";

import { IMAGE_100, IMAGE_500 } from "../constants/urls";
import { getIngredient } from "../utils/api";

const IngredientWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

const Ingredient = ({ ingredientId }) => {
  const [ingredient, setIngredient] = useState(null);
  useEffect(() => {
    try {
      async function fetchIngredient() {
        const result = await getIngredient(ingredientId);
        console.log(result);
        setIngredient(result?.data);
      }
      fetchIngredient();
    } catch (err) {
      console.log(err);
    }
  }, [ingredientId]);

  return ingredient ? (
    <IngredientWrapper variant="outlined">
      <BrowserView>
        <CardMedia
          component="image"
          sx={{ height: 320, width: 500 }}
          image={`${IMAGE_500}${ingredient?.image}`}
        />
      </BrowserView>
      <MobileView>
        <CardMedia
          component="image"
          sx={{ height: 93, width: 140 }}
          image={`${IMAGE_100}${ingredient?.image}`}
        />
      </MobileView>

      <Typography variant="h4">{ingredient?.name}</Typography>
      <Divider />
      <Typography variant="h6">Nutritional information</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nutrient</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Percent of your daily needs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredient?.nutrition?.nutrients?.map((nutrient) => (
            <TableRow
              key={nutrient?.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{nutrient?.name}</TableCell>
              <TableCell>
                {nutrient?.amount}
                {nutrient?.unit}
              </TableCell>
              <TableCell>{nutrient?.percentOfDailyNeeds}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </IngredientWrapper>
  ) : (
    <CircularProgress />
  );
};
export default Ingredient;
