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

let allPlans = document.querySelectorAll(".plan-box");
allPlans.forEach((plan) => {
  plan.addEventListener("click", (e) => {
    allPlans.forEach((plan) => {
      plan.classList.remove("chosed");
    });
    e.currentTarget.classList.add("chosed");
  });
});
let allAddOns = document.querySelectorAll(".add-on");
let addOnCheckboxes = document.querySelectorAll(".checkbox");
allAddOns.forEach((addOn) => {
  addOn.addEventListener("click", () => {
    addOn.classList.toggle("active-add-on");
  });
});

// Monthly/Yearly
let allPlanBillings = document.querySelectorAll(".billing");
let allAddOnsBillins = document.querySelectorAll(".add-on-bill");

let monthlyYearly = new Object({
  planBillingOne: parseInt(allPlanBillings[0].getAttribute("data-bill")),
  planBillingTwo: parseInt(allPlanBillings[1].getAttribute("data-bill")),
  planBillingThree: parseInt(allPlanBillings[2].getAttribute("data-bill")),
  addOnBillingOne: parseInt(allAddOnsBillins[0].getAttribute("data-addOnBill")),
  addOnBillingTwo: parseInt(allAddOnsBillins[1].getAttribute("data-addOnBill")),
  addOnBillingThree: parseInt(
    allAddOnsBillins[2].getAttribute("data-addOnBill")
  ),
});

let monthlyYearlyToggleSwitch = document.querySelector(".switch");

let mode = null;
monthlyYearlyToggleSwitch.addEventListener("click", () => {
  monthlyYearlyToggleSwitch.classList.toggle("checked");
  var element = document.getElementById("mode");
  element.classList.toggle("yearly");
  element.classList.toggle("monthly");
  let planBillOne = monthlyYearly.planBillingOne * 10;
  let planBillTwo = monthlyYearly.planBillingTwo * 10;
  let planBillThree = monthlyYearly.planBillingThree * 10;
  let addOnBillOne = monthlyYearly.addOnBillingOne * 10;
  let addOnBillTwo = monthlyYearly.addOnBillingTwo * 10;
  let addOnBillThree = monthlyYearly.addOnBillingThree * 10;
  if (
    element.classList.contains("monthly") &&
    !element.classList.contains("yearly")
  ) {
    mode = "yearly";
  }
  if (
    !element.classList.contains("monthly") &&
    element.classList.contains("yearly")
  ) {
    mode = "monthly";
  }
  if (mode == "yearly") {
    // Plans Yearly Billings
    allPlanBillings[0].setAttribute("data-bill", `${planBillOne}`);
    allPlanBillings[1].setAttribute("data-bill", `${planBillTwo}`);
    allPlanBillings[2].setAttribute("data-bill", `${planBillThree}`);
    allPlanBillings[0].textContent = `${planBillOne}$/yr`;
    allPlanBillings[1].textContent = `${planBillTwo}$/yr`;
    allPlanBillings[2].textContent = `${planBillThree}$/yr`;

    // Add Ons Yearly Billings
    allAddOnsBillins[0].setAttribute("data-addOnBill", `${addOnBillOne}`);
    allAddOnsBillins[1].setAttribute("data-addOnBill", `${addOnBillTwo}`);
    allAddOnsBillins[2].setAttribute("data-addOnBill", `${addOnBillThree}`);
    allAddOnsBillins[0].textContent = `${addOnBillOne}$/yr`;
    allAddOnsBillins[1].textContent = `${addOnBillTwo}$/yr`;
    allAddOnsBillins[2].textContent = `${addOnBillThree}$/yr`;
  } else {
    // Plans Monthly Billings
    allPlanBillings[0].setAttribute("data-bill", `${planBillOne / 10}`);
    allPlanBillings[1].setAttribute("data-bill", `${planBillTwo / 10}`);
    allPlanBillings[2].setAttribute("data-bill", `${planBillThree / 10}`);
    allPlanBillings[0].textContent = `${planBillOne / 10}$/mo`;
    allPlanBillings[1].textContent = `${planBillTwo / 10}$/mo`;
    allPlanBillings[2].textContent = `${planBillThree / 10}$/mo`;

    // Add Ons Monthly Billings
    allAddOnsBillins[0].setAttribute("data-addOnBill", `${addOnBillOne / 10}`);
    allAddOnsBillins[1].setAttribute("data-addOnBill", `${addOnBillTwo / 10}`);
    allAddOnsBillins[2].setAttribute(
      "data-addOnBill",
      `${addOnBillThree / 10}`
    );
    allAddOnsBillins[0].textContent = `${addOnBillOne / 10}$/mo`;
    allAddOnsBillins[1].textContent = `${addOnBillTwo / 10}$/mo`;
    allAddOnsBillins[2].textContent = `${addOnBillThree / 10}$/mo`;
  }
});

// Next Step Button
allNextStepButtons.forEach((nextButton) => {
  nextButton.addEventListener("click", () => {
    // Info Step
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
        p(
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
            p(
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
        p(
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
        p(
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
            p(
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
    // Plan Step
    if (nextButton.classList.contains("plan-btn")) {
      planStep.classList.remove("active");
      addOnsStep.classList.add("active");
      if (addOnsStep.classList.contains("active")) {
        allStepsButtons[1].classList.remove("active");
        allStepsButtons[2].classList.add("active");
      }
      if (
        !allPlans[0].classList.contains("chosed") &&
        !allPlans[1].classList.contains("chosed") &&
        !allPlans[2].classList.contains("chosed")
      ) {
        planStep.classList.add("active");
        addOnsStep.classList.remove("active");
        allStepsButtons[1].classList.add("active");
        allStepsButtons[2].classList.remove("active");
      }
    }
    if (nextButton.classList.contains("add-ons-btn")) {
      addOnsStep.classList.remove("active");
      summaryStep.classList.add("active");
      if (summaryStep.classList.contains("active")) {
        allStepsButtons[2].classList.remove("active");
        allStepsButtons[3].classList.add("active");
      }
      let chosedPlan = document.querySelector(".chosed");
      let chosedPlanType = chosedPlan.classList[1];
      let chosedPlanBill = document
        .querySelector(".chosed .billing")
        .getAttribute("data-bill");
      let chosedAddOn = document.querySelectorAll(".active-add-on");
      chosedAddOn.forEach((addOn) => {
        let chosedAddOnTitle = addOn.getAttribute("data-addOnTitle");
        let allChosedAddOnBill = document.querySelectorAll(".add-on-bill");
        allChosedAddOnBill.forEach((addOnBill) => {
          let addOnBillAtr = addOnBill.getAttribute("data-addOnBill");
          console.log(
            `${chosedPlanType} ${chosedPlanBill} ${chosedAddOnTitle} ${addOnBillAtr}`
          );
          let gk = document.querySelector(".gk");
          gk.textContent = `${chosedPlanType} ${chosedPlanBill} ${chosedAddOnTitle} ${addOnBillAtr}`;
        });
      });
    }
    if (nextButton.classList.contains("summary-btn")) {
      console.log("summary");
    }
  });
});
// Go Back Button
let goBackButtons = document.querySelectorAll(".go-back");
goBackButtons.forEach((goBackButton) => {
  goBackButton.addEventListener("click", () => {
    if (goBackButton.classList.contains("plan-back")) {
      infoStep.classList.add("active");
      planStep.classList.remove("active");
    }
    if (goBackButton.classList.contains("add-ons-back")) {
      planStep.classList.add("active");
      addOnsStep.classList.remove("active");
    }
    if (goBackButton.classList.contains("summary-back")) {
      addOnsStep.classList.add("active");
      summaryStep.classList.remove("active");
    }
  });
});

function InputdetectError(
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
