import React from 'react'

// function Card({ arr }) {
//   // Props destructuring: directly extract 'arr' from props object
//   console.log(arr);

// function Card({ obj }) {
//   // Accessing object passed via props
//   console.log(obj.name);

function Card(props) {
  // 'props' is an object that contains all values passed from parent component
  // Example:
  // { obj: {name:"Aditya", age:21}, arr:[...], buttonTxt:"..." }

  console.log(props);

  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://picsum.photos/301"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />

        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">

            {/* Accessing nested data from props object */}
            {/* props.obj → object passed from parent */}
            {/* props.obj.name → specific property */}
            <h2 className="text-3xl font-semibold tracking-wide">
              {props.obj.name}
            </h2>

            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio tempora ipsum soluta amet corporis accusantium aliquid
              consectetur eaque!
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {props.buttonTxt || "Visit Me !"}
            {/* Logical OR used for default rendering:
                If props.buttonTxt is undefined, null, or empty → "Visit Me !" displays */}
          </button>

        </div>
      </div>
    </div>
  )
}

export default Card