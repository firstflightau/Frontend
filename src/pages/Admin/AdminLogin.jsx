import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline"; // Heroicons for icons
import logo from "../../assets/images/logo/logo.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const inputRefs = {
    email: useRef(null),
    password: useRef(null),
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
    setFormError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.password) newErrors.password = "password is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      inputRefs[firstErrorField].current.focus();
      return;
    }

    setLoading(true);
    try {
      if (
        formData.email === "admin@gmail.com" &&
        formData.password == "admin123"
      ) {
        // console.log(email, password, "credential");
        sessionStorage.setItem("AdminLogin", true);
        navigate("/admin");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setFormError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="login-area section-padding h-screen flex justify-center items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="login-card shadow-lg">
                <div className="logo mb-10">
                  <a href="/" className="mb-2 d-block">
                    <img src={logo} alt="logo" className="changeLogo" />
                  </a>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      ref={inputRefs.email}
                      className={`bg-white border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm absolute -bottom-5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-6 relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        ref={inputRefs.password}
                        className={`bg-white border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10`}
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm absolute -bottom-5">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  {formError && (
                    <p className="text-red-500 text-sm text-center mb-4">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="bg-secondary-6000 text-gray-50 transition-all ease-in w-full py-2 text-base font-medium rounded-md border-2 border-secondary-6000 hover:bg-transparent hover:text-secondary-6000"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Register"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
