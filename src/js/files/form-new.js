// === FORM === //
// const form = document.forms["form"];
// if (form) {
//   const formArr = Array.from(form);
//   const validFormArr = [];
//   const button = form.elements["button"];

//   formArr.forEach((el) => {
//     if (el.hasAttribute("data-reg")) {
//       el.setAttribute("is-valid", "0");
//       validFormArr.push(el);
//     }
//   });

//   form.addEventListener("input", inputHandler);
//   button.addEventListener("click", buttonHandler);

//   function inputHandler({ target }) {
//     if (target.hasAttribute("data-reg")) {
//       inputCheck(target);
//     }
//   }

//   function inputCheck(el) {
//     const inputValue = el.value;
//     const inputReg = el.getAttribute("data-reg");
//     const reg = new RegExp(inputReg);
//     if (reg.test(inputValue)) {
//       el.setAttribute("is-valid", "1");
//       el.style.border = "2px solid rgb(0, 196, 0)";
//     } else {
//       el.setAttribute("is-valid", "0");
//       el.style.border = "2px solid rgb(255, 0, 0)";
//     }
//   }

//   function buttonHandler(e) {
//     const allValid = [];
//     validFormArr.forEach((el) => {
//       allValid.push(el.getAttribute("is-valid"));
//     });
//     const isAllValid = allValid.reduce((acc, current) => {
//       return acc && current;
//     });

//     if (!Boolean(Number(isAllValid))) {
//       e.preventDefault();
// 	  }
// 	}
// }

//+++//

const form = document.forms["form"];

if (form) {
  const formElements = Array.from(form.elements);
  const validFormElements = formElements.filter((el) => el.hasAttribute("data-reg"));
  const button = form.elements["button"];

  validFormElements.forEach((el) => {
      el.setAttribute("is-valid", "0");
  });

  form.addEventListener("input", function(e) {
    const { target } = e;

    if (target.hasAttribute("data-reg")) {
      inputCheck(target);
    }
  });

  button.addEventListener("click", function(e) {
    const allValid = validFormElements.map((el) => el.getAttribute("is-valid"));
    const isAllValid = allValid.reduce((acc, current) => acc && current === "1" ? true : false);

    if (!isAllValid) {
      e.preventDefault();
      
      const invalidElements = validFormElements.filter((el) => el.getAttribute("is-valid") === "0");
      invalidElements.forEach((el) => el.style.border = "1px solid rgb(255, 0, 0)");
      alert(`The following fields are invalid: ${invalidElements.map(el => el.name || el.id).join(", ")}`);
    }
  });

  function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    
    if (reg.test(inputValue)) {
      el.setAttribute("is-valid", "1");
      el.style.border = "1px solid rgb(0, 196, 0)";
    } else {
      el.setAttribute("is-valid", "0");
      el.style.border = "1px solid rgb(255, 0, 0)";
    }
  }
}
