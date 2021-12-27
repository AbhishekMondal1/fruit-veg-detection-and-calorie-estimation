import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "./nutrition.css";

import SwiperCore, { Navigation, EffectCards, Pagination, EffectCreative } from "swiper";
SwiperCore.use([Navigation]);
// SwiperCore.use([EffectCards]);
SwiperCore.use([Pagination]);
SwiperCore.use([EffectCreative]);
  
const Nutrition = ({ predictionData }) => {
  const [nutritionValue, setNutritionValue] = useState([]);
  const [fruitNames, setFruitNames] = useState([]);
  const [fruitQuery, setFruitQuery] = useState({});
  const [CALORIENINJA_API, setCALORIENINJA_API] = useState("");
  const [CALORIENINJA_API_KEY, setCALORIENINJA_API_KEY] = useState("");

  console.table(predictionData);
  // get api keys
useEffect(() => {
  async function getCNApi() {
    try {
      const res = await axios.get("http://localhost:8080/api/cna");
      setCALORIENINJA_API(res.data.value);
    } catch (error) {
      console.log(error);
    }
  }
  async function getCNKey() {
    try {
      const res = await axios.get("http://localhost:8080/api/cnakey");
      setCALORIENINJA_API_KEY(res.data.value);
    } catch (error) {
      console.log(error);
    }
  }
  getCNApi();
  getCNKey();
}, []);
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
      <Swiper
        // spaceBetween={50}
        // slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        effect={"creative"}
        grabCursor={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        {nutritionValue &&
          nutritionValue.map((n) => (
            <SwiperSlide key={n.name}>
              <div key={n.name} className="nutrition-container">
                <div className="nutrition-row">
                  {/* <div className="nutrition-item">Name:</div>{" "} */}
                  <div className="object-name"> {n.name} </div><br/>
                </div>
                  <div className="object-nutrition"> Nutrition</div>
                <div className="nutrition-row">
                  <div className="nutrition-item">Calories:</div>{" "}
                  <div className="nutrition-value"> {n.calories} kcal </div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-item">Carbohydrates total:</div>{" "}
                  <div className="nutrition-value">
                    {" "}
                    {n.carbohydrates_total_g} g{" "}
                  </div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-item">Protein:</div>{" "}
                  <div className="nutrition-value"> {n.protein_g} g </div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-item">Fat (total):</div>{" "}
                  <div className="nutrition-value"> {n.fat_total_g} g </div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-item">Sugar:</div>{" "}
                  <div className="nutrition-value"> {n.sugar_g} g </div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-item">Fiber:</div>{" "}
                  <div className="nutrition-value"> {n.fiber_g} g </div>
                </div>
                <div className="nutrition-row">
                  <div className="nutrition-item">Serving size:</div>{" "}
                  <div className="nutrition-value"> {n.serving_size_g} g </div>
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
                  <div className="nutrition-value"> {n.fat_saturated_g} g </div>
                </div>

                <div className="nutrition-row">
                  <div className="nutrition-item">Cholesterol:</div>{" "}
                  <div className="nutrition-value"> {n.cholesterol_mg} mg </div>
                </div>
                <br />
                {/* <hr /> */}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Nutrition;
