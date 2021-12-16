import React, { useEffect, useState } from "react";
import axios from "axios";

const Nutrition = ({ predictionData }) => {
  const [nutritionValue, setNutritionValue] = useState([]);
  const [fruitNames, setFruitNames] = useState([]);
  const [fruitQuery, setFruitQuery] = useState({});
  const CALORIENINJA_API = process.env.REACT_APP_CALORIENINJA_API;
  const CALORIENINJA_API_KEY = process.env.REACT_APP_CALORIENINJA_API_KEY;

  console.table(predictionData);

  // get fruit, veg names
  useEffect(() => {
    const getFruitNames = async () => {
      const name = [];
      await predictionData.forEach((p) => {
        name.push(p.tagName);
      });
      setFruitNames(name);
    };
    getFruitNames();
  }, [predictionData]);

  // count fruit, veg and join in single query string
  useEffect(() => {
    const getQuery = async () => {
      const counts = {};
      fruitNames.forEach(function (x) {
        counts[x] = (counts[x] || 0) + 1;
      });
      console.log("fruits counts");
      console.table(counts);
      let reqQuery = "";
      for (const i in counts) {
        reqQuery = `${reqQuery}, ${counts[i]} ${i}`;
      }
      setFruitQuery(reqQuery);
      console.log(reqQuery);
    };
    getQuery();
  }, [fruitQuery, nutritionValue]);

  // fetch fruit, veg nutrition values
  useEffect(() => {
    console.log(fruitNames);
    const getNutrition = async (query) => {
      try {
        const res = await axios.get(CALORIENINJA_API + query, {
          headers: {
            "X-Api-Key": CALORIENINJA_API_KEY,
          },
        });
        console.log(res.data.items);
        setNutritionValue(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    console.table(fruitNames);
    fruitNames.length > 0 && getNutrition(fruitQuery);
  }, [predictionData, fruitNames, fruitQuery]);

  return (
    <div>
      {nutritionValue &&
        nutritionValue.map((n) => (
          <div>
            <p>calories: {n.calories}</p>
            <p>name: {n.name}</p>
            <p>protein: {n.protein_g}</p>
            <p>carbohydrates_total_g: {n.carbohydrates_total_g}</p>
            <p>sugar_g: {n.sugar_g}</p>
            <p>fiber_g: {n.fiber_g}</p>
            <p>serving_size_g:{n.serving_size_g}</p>
            <p>sodium_mg: {n.sodium_mg}</p>
            <p>potassium_mg: {n.potassium_mg}</p>
            <p>fat_saturated_g: {n.fat_saturated_g}</p>
            <p>fat_total_g: {n.fat_total_g}</p>
            <p>cholesterol_mg: {n.cholesterol_mg}</p>
            <br />
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Nutrition;
