import React, { useState } from "react";

function Component3() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [category, setCategory] = useState("");

  // const storeWeight = (e) => {
  //   setWeight(parseFloat(e.target.value));
  //   console.log(weight);
  // };

  // const storeHeight = (e) => {
  //   setHeight(parseFloat(e.target.value));
  //   console.log(height);
  // };

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      bmi = weight / (height * height);
      setResult(bmi);

      if (bmi < 18.5) {
        console.log("Underweight");
        setCategory("Under Weight");
        // result = "Under Weight";
        // imageSrc = "under.jfif";
      } else if (bmi >= 18.5 || bmi < 25) {
        console.log("Normal Weight");
        setCategory("Normal Weight");
        // result = "Normal Weight";
        // imageSrc = "normal.jfif";
      } else if (bmi >= 25 || bmi < 30) {
        console.log("Overweight");
        setCategory("Over Weight");
        // result = "Over Weight";
        // imageSrc = "overweight.jfif";
      } else {
        console.log("Obese");
        setCategory("Obese");
        // result = "Obese";
        // imageSrc = "obese.png";
      }
    } else {
      setResult("Invalid input. Please enter valid weight and height.");
      setCategory("");
    }
  };
  // const resultDiv = document.getElementById("result");
  // let text ="";
  // let imageSrc ="";
  // var weight = parseFloat(document.getElementById("w").value);
  // var height = parseFloat(document.getElementById("h").value);

  // console.log("weight: " + weight + "height: " + height);
  // var bmi = weight / height ** 2;

  // console.log("BMI: " + bmi);

  // document.getElementById('res').innerText = "BMI is: "+bmi;

  // resultDiv.innerHTML =`<h2>${text}</h2>`;
  // resultDiv.innerHTML += `<img src="${imageSrc}" alt="${text}">`;

  return (
    <>
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calculateBMI}>
          <label htmlFor="w">Enter weight in kg: </label>
          <input
            type="text"
            id="w"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="h">Enter height in meters</label>
          <input
            type="text"
            id="h"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Calculate</button>
          {result && (
            <div id="result">
              <h4>Your BMI: {result}</h4>
              {category && <p>Category: {category}</p>}
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Component3;
