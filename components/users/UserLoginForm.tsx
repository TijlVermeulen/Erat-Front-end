"use client";

import React, { useState } from "react";

const UserLoginForm: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const validate = (): boolean => {
    return true;
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const user = { username: name, password };
  };

  return (
    <div className="max-w-sm m-auto">
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label
              htmlFor="nameInput"
              className="block mb-2 text-sm font-medium"
            >
              Username:
            </label>
          </div>
          <div className="block mb-2 text-sm font-medium">
            <input
              id="nameInput"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
            />
          </div>
        </div>
        <div className="mt-2">
          <div>
            <label
              htmlFor="passwordInput"
              className="block mb-2 text-sm font-medium"
            >
              Password:
            </label>
          </div>
          <div className="block mb-2 text-sm font-medium">
            <input
              id="passwordInput"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5"
            />
          </div>
        </div>
        <div className="row">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserLoginForm;
