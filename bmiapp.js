 const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stops form from refreshing page

    const weight = parseFloat(form.elements[0].value);
    const heightFeet = parseFloat(form.elements[1].value);

    if (isNaN(weight) || isNaN(heightFeet) || weight <= 0 || heightFeet <= 0) {
      alert("Please enter valid positive numbers!");
      return;
    }

    // convert height from feet to meters (1 foot = 0.3048 meters)
    const heightMeters = heightFeet * 0.3048;

    const bmi = weight / (heightMeters * heightMeters);
    const result = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) category = "Underweight 🥗";
    else if (bmi < 24.9) category = "Normal weight 💪";
    else if (bmi < 29.9) category = "Overweight ⚠️";
    else category = "Obese 🚨";

    // create or update result section
    let output = document.querySelector("#result");
    if (!output) {
      output = document.createElement("p");
      output.id = "result";
      form.appendChild(output);
    }

    output.textContent = `Your BMI is ${result} (${category})`;
  });

