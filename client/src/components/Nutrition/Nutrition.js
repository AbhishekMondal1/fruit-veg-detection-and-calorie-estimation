import React, { useEffect, useState } from "react";
import axios from "axios";

const Nutrition = ({ predictionData }) => {
  const [nutritionValue, setNutritionValue] = useState([]);
  const [fruitNames, setFruitNames] = useState([])
  const CALORIENINJA_API = process.env.REACT_APP_CALORIENINJA_API;
  const CALORIENINJA_API_KEY = process.env.REACT_APP_CALORIENINJA_API_KEY;

  console.table(predictionData);
  
  useEffect(() => {
    const getFruitNames = async () => {
      const name = [];
      await predictionData.forEach((p) => {
        name.push(p.tagName);
      })
      setFruitNames(name);
    }
    getFruitNames();
    
  }, [predictionData])
  
  useEffect(() => {
    console.warn(fruitNames);
    const getNutrition = async (query) => {
      try {
        const res = await axios.get(CALORIENINJA_API + query, {
          headers: {
            "X-Api-Key": CALORIENINJA_API_KEY,
            // "contentType": "application/json"
          },
        });
        console.log(res.data.items);
        setNutritionValue(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(fruitNames.join(', 1 '));
    fruitNames.length > 0 && getNutrition(fruitNames.join(', 1 '));
  }, [predictionData, fruitNames]);
    
  return (
    <div>
      {nutritionValue &&
        nutritionValue.map((n) => (
          <div>
            <p>calories - {n.calories}</p>
            <p>name - {n.name}</p>
            <p>protein - {n.protein_g}</p>
            <p>carbohydrates_total_g - {n.carbohydrates_total_g}</p>
          </div>
        ))}
    </div>
  );
};

export default Nutrition;
