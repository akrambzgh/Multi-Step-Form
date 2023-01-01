let allStepsButtons = document.querySelectorAll(".step-btn");
let allSteps = document.querySelectorAll(".step-box");
allStepsButtons.forEach((stepButton) => {
  stepButton.addEventListener("click", (e) => {
    allStepsButtons.forEach((stepButton) => {
      stepButton.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    allSteps.forEach((step) => {
      if (
        stepButton.getAttribute("data-stepType") ==
        step.getAttribute("data-sectionType")
      ) {
        allSteps.forEach((step) => {
          step.classList.remove("active");
        });
        step.classList.add("active");
      }
    });
  });
});

let allNextStepButtons = document.querySelectorAll(".next");

let nameInput = document.getElementById("name");
let emailAddressInput = document.getElementById("email-address");
let phoneNumberInput = document.getElementById("phone-number");

let nameErrorText = document.querySelector(".name-error");
let emailAddressErrorText = document.querySelector(".email-error");
let phoneNumberErrorText = document.querySelector(".phone-error");

let infoStep = document.querySelector(".info");
let planStep = document.querySelector(".plan");
let addOnsStep = document.querySelector(".add-ons");
let summaryStep = document.querySelector(".summary");

allNextStepButtons.forEach((nextButton) => {
  nextButton.addEventListener("click", () => {
    if (nextButton.classList.contains("info-btn")) {
      nameErrorText.classList.remove("show");
      nameInput.classList.remove("error");
      emailAddressInput.classList.remove("error");
      emailAddressErrorText.classList.remove("show");
      phoneNumberInput.classList.remove("error");
      phoneNumberErrorText.classList.remove("show");
      infoStep.classList.remove("active");
      planStep.classList.add("active");
      if (planStep.classList.contains("active")) {
        allStepsButtons[0].classList.remove("active");
        allStepsButtons[1].classList.add("active");
      }
      // Name Input
      if (nameInput.value == "") {
        detectError(
          nameInput,
          nameErrorText,
          infoStep,
          planStep,
          allStepsButtons[0],
          allStepsButtons[1]
        );
      }
      let nameInputArray = nameInput.value.split("");
      for (let i = 0; i < nameInputArray.length; i++) {
        const nameInputArrayElement = nameInputArray[i];
        let numbers = "0123456789";
        let numbersArray = numbers.split("");
        for (let n = 0; n < numbersArray.length; n++) {
          const numbersInputArrayElement = numbersArray[n];
          if (nameInputArrayElement == numbersInputArrayElement) {
            detectError(
              nameInput,
              nameErrorText,
              infoStep,
              planStep,
              allStepsButtons[0],
              allStepsButtons[1]
            );
          }
        }
      }
      // Email Address Input
      if (emailAddressInput.value == "") {
        detectError(
          emailAddressInput,
          emailAddressErrorText,
          infoStep,
          planStep,
          allStepsButtons[0],
          allStepsButtons[1]
        );
      }
      // Phone Number Input
      if (phoneNumberInput.value == "") {
        detectError(
          phoneNumberInput,
          phoneNumberErrorText,
          infoStep,
          planStep,
          allStepsButtons[0],
          allStepsButtons[1]
        );
      }
      let phoneNumberInputArray = phoneNumberInput.value.split("");
      for (let i = 0; i < phoneNumberInputArray.length; i++) {
        const phoneNumberInputArrayElement = phoneNumberInputArray[i];
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lettersArray = letters.split("");
        for (let n = 0; n < lettersArray.length; n++) {
          const lettersArrayElement = lettersArray[n];
          if (
            phoneNumberInputArrayElement == lettersArrayElement ||
            phoneNumberInputArrayElement == lettersArrayElement.toLowerCase()
          ) {
            detectError(
              phoneNumberInput,
              phoneNumberErrorText,
              infoStep,
              planStep,
              allStepsButtons[0],
              allStepsButtons[1]
            );
          }
        }
      }
    }
    if (nextButton.classList.contains("plan-btn")) {
      console.log("plan");
    }
    if (nextButton.classList.contains("add-ons-btn")) {
      console.log("add-ons");
    }
    if (nextButton.classList.contains("summary-btn")) {
      console.log("summary");
    }
  });
});
function detectError(
  input,
  errorText,
  stepBoxOne,
  stepBoxTwo,
  stepsButtonOne,
  stepsButtonTwo
) {
  errorText.classList.add("show");
  input.classList.add("error");
  stepBoxOne.classList.add("active");
  stepBoxTwo.classList.remove("active");
  stepsButtonOne.classList.add("active");
  stepsButtonTwo.classList.remove("active");
}

// Monthly/Yearly
let allBillings = document.querySelectorAll(".billing");

let allPlans = document.querySelectorAll(".plan");
allPlans.forEach((plan) => {
  plan.addEventListener("click", (e) => {
    allPlans.forEach((plan) => {
      plan.classList.remove("chosed");
    });
    e.currentTarget.classList.add("chosed");
    console.log(e);
  });
});

const monthlyYearly = new Object({
  billingOne: allBillings[0],
  billingTwo: allBillings[1],
  billingThree: allBillings[2],
});
