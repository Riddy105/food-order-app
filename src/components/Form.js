import React, { useRef, useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

const nameInputReducerFn = (state, action) => {
  if (action.type == "UPDATE_VALUE") {
    return {
      ...state,
      enteredName: action.value,
      isValid: action.value.trim().length > 0,
    };
  }
  if (action.type == "SUBMIT" || action.type == "BLUR") {
    return {
      ...state,
      wasTouched: true,
      isValid: state.enteredName.trim().length > 0,
    };
  }
};
const Form = () => {
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);
  const [nameInput, nameInputDispatchFn] = useReducer(nameInputReducerFn, {
    enteredName: "",
    isValid: false,
    wasTouched: false,
  });
  useEffect(() => {
    if (nameInput.isValid) {
      setBtnIsDisabled(false);
    } else {
      setBtnIsDisabled(true);
    }
  }, [nameInput.isValid]);
  const nameChangeHandler = (e) => {
    nameInputDispatchFn({ type: "UPDATE_VALUE", value: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    nameInputDispatchFn({ type: "SUBMIT" });
  };
  const nameBlurHandler = (e) => {
    nameInputDispatchFn({ type: "BLUR" });
  };
  // You wanna throw an error in an input field only when your validation logic isn't satisfied (input is invalid) and that input has been touched.
  // This will prevent us from throwing errors at a user that hasn't even had the chance to input anything. wasTouched state most time controlled by
  // blur event.
  return (
    <form
      action=""
      className="bg-white text-black-100 w-3/5 p-4"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className={`h-10 border-2 border-black focus:bg-purple-300 focus:border-red-300 w-1/2 ${
            !nameInput.isValid && nameInput.wasTouched
              ? "bg-red-200 focus:bg-red-200"
              : ""
          }`}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {!nameInput.isValid && nameInput.wasTouched && (
          <p className="text-[#F00]">Name cannot be blank</p>
        )}
      </div>
      <button
        className="p-3 bg-blue-700 mt-4 ml-auto block disabled:bg-[#ccc]"
        disabled={btnIsDisabled ? "disabled" : ""}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
