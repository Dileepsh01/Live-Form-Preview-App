import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submitteddata, setSubmitteddata] = useState(null);
  const [error, setError] = useState("");
  const [Agree, setAgree] = useState(false);
  const handleinputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // 🔥 typing ke time error remove
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError(" All field are required..⚠️");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email format ⚠️");
      return;
    }

    if (!Agree) {
      setError("Please accept terms ⚠️");
      return;
    }

    setError("");
    setSubmitteddata(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center bg-cyan-700 text-white p-3 rounded-md">
          Form Preview App
        </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form className="mt-6 space-y-5" onSubmit={handlesubmit}>
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={handleinputChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              value={formData.email}
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={handleinputChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Password</label>
            <input
              type="password"
              value={formData.password}
              name="password"
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              onChange={handleinputChange}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={Agree}
              onChange={() => setAgree(!Agree)}
              className="mr-2"
            />
            <span className="text-sm">
              I agree to the{" "}
              <span className="text-cyan-600 underline cursor-pointer">
                terms
              </span>
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300"
          >
            Submit 🚀
          </button>
        </form>

        {submitteddata && (
          <div className="mt-6">
            <h3 className="font-bold">Live Preview:</h3>
            <p>Name: {submitteddata.name}</p>
            <p>Email: {submitteddata.email}</p>
            <p>Password: {"*".repeat(submitteddata.password.length)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
