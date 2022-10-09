// Selection html elements
const formElement = document.querySelector("form");
const heightValueFromElement = document.querySelector("#height");
const weightValueFromElement = document.querySelector("#weight");
const headerResultFromElement = document.querySelector(".result").firstElementChild;
const bmiValueElement = document.querySelector("#value");
const bmiCategoryElement = document.querySelector("#category");
// Attach event listener to the button
formElement.addEventListener("submit", (event) => {
    event.preventDefault();

// function to find BMI
    const findBMI = (weight, height) => {
    return (weight / Math.pow(height / 100, 2)).toFixed(1);
    }

    // function to find Category
    const findCategory = (bmival) => {
        const bmiCategories = {
            Underweight: bmival < 18.5,
            Normal: bmival >= 18.5 && bmival <= 24.9,
            Overweight: bmival >= 25 && bmival <= 29.9,
            Obesity: bmival >= 30
	};
    return Object.keys(bmiCategories).find((key) => bmiCategories[key]);
    }

    const [weight, height] = [weightValueFromElement.value, heightValueFromElement.value];
    const bmiValue = findBMI(weight, height);
	const bmiCategory = findCategory(bmiValue);

    // Update content
	headerResultFromElement.classList.remove("hidden");
	bmiValueElement.textContent = bmiValue;
	bmiCategoryElement.textContent = bmiCategory;

	// Reset input field
	formElement.reset();
});