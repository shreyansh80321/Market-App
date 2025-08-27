import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signupStyles } from '../assets/dummyStyles';
import { FaArrowLeft, FaCheck, FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
      name:"",
      email: "",
      password: "",
      remember: true,
    });
    const [showPassword, setShowPassword] = useState(false);

    const [showToast, setShowToast] = useState(false);
    const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (showToast) {
    
      const timer = setTimeout(() => {
        setShowToast(false);
        navigate('/login')
      
      }, 2000)
      return () => clearTimeout(timer);
    }
  }, [showToast, navigate])
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
      if (errors[name]) {
        setErrors(prev=>({...prev,[name]:''}))
      }
  };
  
    const validate = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Invalid email format";
      if (!formData.password) newErrors.password = "Password is required";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowToast(true);
    }
  }
  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }))
  }
  return (
    <div className={signupStyles.page}>
      <Link to="/login" className={signupStyles.backLink}>
        <FaArrowLeft className="mr-2" />
        Back To Login
      </Link>
      {showToast && (
        <div className={signupStyles.toast}>
          <FaCheck className="mr-2" />
          Account Created Successfully!
        </div>
      )}
      <div className={signupStyles.signupCard}>
        <div className={signupStyles.logoContainer}>
          <div className={signupStyles.logoOuter}>
            <div className={signupStyles.logoInner}>
              <FaUser className={signupStyles.logoIcon} />
            </div>
          </div>
        </div>
        <h2 className={signupStyles.title}>Create Account</h2>
        <form onSubmit={handleSubmit} className={signupStyles.form}>
          <div className={signupStyles.inputContainer}>
            <FaUser className={signupStyles.inputIcon} />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={signupStyles.input}
            />
            {errors.name && <p className={signupStyles.error}>{errors.name}</p>}
          </div>
          <div className={signupStyles.inputContainer}>
            <FaEnvelope className={signupStyles.inputIcon} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={signupStyles.input}
            />
            {errors.email && (
              <p className={signupStyles.error}>{errors.email}</p>
            )}
          </div>
          <div className={signupStyles.inputContainer}>
            <FaLock className={signupStyles.inputIcon} />
            <input
              type={showPassword.password ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className={signupStyles.passwordInput}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("password")}
              className={signupStyles.toggleButton}
              aria-label={
                showPassword.password ? "Hide Password" : "Show Password"
              }
            >
              {showPassword.password ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className={signupStyles.error}>{errors.password}</p>
            )}
          </div>
          <div className={signupStyles.termsContainer}>
            <label className={signupStyles.termsLabel}>
              <input
                type="checkbox"
                name="remember"
                checked={FormData.remember}
                onChange={handleChange}
                className={signupStyles.termsCheckbox}
              />
              I agreed to the Terms and Conditions
            </label>
          </div>
          <button type="submit" className={signupStyles.submitButton}>
            Sign Up
          </button>
        </form>
        <p className={signupStyles.signinText}>
          Already have an account?{" "}
          <Link to="/login" className={signupStyles.signinLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup