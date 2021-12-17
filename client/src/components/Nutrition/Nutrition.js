import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./nutrition.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Nutrition = ({ predictionData }) => {
  const [nutritionValue, setNutritionValue] = useState([]);
  const [fruitNames, setFruitNames] = useState([]);
  const [fruitQuery, setFruitQuery] = useState({});
  const [slideTrue, setSlideTrue] = useState(false);
  const CALORIENINJA_API = process.env.REACT_APP_CALORIENINJA_API;
  const CALORIENINJA_API_KEY = process.env.REACT_APP_CALORIENINJA_API_KEY;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
              <Carousel
             swipeable={true}
             draggable={false}
             responsive={responsive}
             minimumTouchDrag={10}
             removeArrowOnDeviceType='mobile'>
             
        {nutritionValue && nutritionValue.map((n) => (
            <div key={n.name} className="nutrition-container">
              <div className="nutrition-row">
                {/* <div className="nutrition-item">Name:</div>{" "} */}
                <div className="nutrition-value"> {n.name} </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Calories:</div>{" "}
                <div className="nutrition-value"> {n.calories} kcal </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Protein:</div>{" "}
                <div className="nutrition-value"> {n.protein_g} grams </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Carbohydrates total:</div>{" "}
                <div className="nutrition-value">
                  {" "}
                  {n.carbohydrates_total_g} grams{" "}
                </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Sugar:</div>{" "}
                <div className="nutrition-value"> {n.sugar_g} grams </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Fiber:</div>{" "}
                <div className="nutrition-value"> {n.fiber_g} grams </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Serving_size:</div>{" "}
                <div className="nutrition-value"> {n.serving_size_g} grams </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Sodium:</div>{" "}
                <div className="nutrition-value"> {n.sodium_mg} mg </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Potassium:</div>{" "}
                <div className="nutrition-value"> {n.potassium_mg} mg </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Fat (saturated):</div>{" "}
                <div className="nutrition-value"> {n.fat_saturated_g} grams </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Fat (total):</div>{" "}
                <div className="nutrition-value"> {n.fat_total_g} grams </div>
              </div>
              <div className="nutrition-row">
                <div className="nutrition-item">Cholesterol:</div>{" "}
                <div className="nutrition-value"> {n.cholesterol_mg} mg </div>
              </div>
              <br />
              <hr />
            </div>
          ))}
        </Carousel>        
    </div>
  );
};

export default Nutrition;
