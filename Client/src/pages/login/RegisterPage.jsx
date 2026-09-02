import { useState } from "react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nameCheck, setNameCheck] = useState(null);
  const [emailCheck, setEmailCheck] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [responseMessage, setResponseMessage] = useState({
    type: "",
    message: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const passwordLength = formData.password.length;

  const validPassword = passwordLength >= 40 && passwordLength <= 64;
  const validConfirmPassword = formData.confirmPassword === formData.password; 


  function normalizeValue(value) {
    return value.trim().replace(/\s+/g, " ");
  }

  function handleTextChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === "name") {
      setNameCheck(null);
    }

    if (name === "email") {
      setEmailCheck(null);
    }
  }



  async function checkName() {
    const name = normalizeValue(formData.name);

    if (!name) {
      setNameCheck(null);
      return;
    }

    try {
      const response = await fetch("/api/register/check-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      const data = await response.json();

      setNameCheck(data.available); //esto tiene que devolver el true o false
    } catch (error) {
      console.error("Name check failed.", error);
      setNameCheck(null);
    }
  }

  async function checkEmail() {
    const email = normalizeValue(formData.email);

    if (!email) {
      setEmailCheck(null);
      return;
    }

    try {
      const response = await fetch("/api/register/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      setEmailCheck(data.available);
    } catch (error) {
      console.error("Email check failed.", error);
      setEmailCheck(null);
    }
  }





  const hasName = formData.name.trim().length > 0 && nameCheck === true;
  const hasEmail = formData.email.trim().length > 0 && emailCheck === true;
  const hasPassword = validPassword;
  const hasConfirmPassword = validConfirmPassword;

  function isSubmitDisabled() {
    if (
      !hasName ||
      !hasEmail ||
      !hasPassword ||
      !hasConfirmPassword
    ) return true;
    
    return false;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);

    const request = {
      name: normalizeValue(formData.name),
      email: normalizeValue(formData.email),
      password: formData.password
    };

    if (
      !request.name ||
      !request.email ||
      !request.password
    ) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      });

      console.log("Register request response:", response.status, response.statusText);

      if(!response.ok) {
        throw new Error("Failed to submit request");
      }

      const data = await response.json();

      setResponseMessage({
        type: data.type, 
        message: data.message
      });

    } catch (error) {
      console.error("Register request failed.", {
        name: error.name,
        message: error.message,
        online: navigator.onLine,
        stack: error.stack
      });

      setResponseMessage({
        type: "error", 
        message: "Failed to submit request."
      });

    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <div className="register">
      <div className="register__background">
        <div className="register__header">
          <h1>Create your account</h1>
          <small>Begin your journey with YogaGarden.</small>
        </div>

        <form className="register__form"
          aria-labelledby="register-title"
          onSubmit={handleSubmit}
        >

          <div className="register__form--data">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                name="name"
                type="text"
                maxLength={50}
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleTextChange}
              />

              
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={256}
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleTextChange}
              />
            </div>
          </div>
          
          <div className="register__form--checks">
            <button
              type="button"
              className={`check-button ${
                nameCheck === true
                  ? "check-button--valid"
                  : nameCheck === false
                    ? "check-button--invalid"
                    : ""
              }`}
              onClick={() => checkName()}
            >
              Check Name
            </button>

            <button
              type="button"
              className={`check-button ${
                emailCheck === true
                  ? "check-button--valid"
                  : emailCheck === false
                    ? "check-button--invalid"
                    : ""
              }`}
              onClick={() => checkEmail()}
            >
              Check Email
            </button>
          </div>

          <div className="register__form--password">
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                maxLength={64}
                minLength={40}
                required
                autoComplete="new-password"
                value={formData.password}
                onChange={handleTextChange}
              />
              
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? "⚿" : "👁"}
              </button>
            </div>

            <div>
              <label htmlFor="confirm-password">Confirm:</label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                maxLength={64}
                minLength={40}
                required
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleTextChange}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(prev => !prev)}
              >
                {showConfirmPassword ? "⚿" : "👁"}
              </button>
            </div>
          </div>

          
          <p>40–64 characters · <span>{passwordLength} → {validPassword ? "✅" : "❌"}</span> Use a long phrase that you can remember. Avoid obvious or common phrases.</p> 
          
          
          <button type="submit" className="register-button"
            disabled={isSubmitDisabled() || isSubmitting}
          >
            {isSubmitting ? "Sending request..." : "Create Account"}
          </button>

          {responseMessage.message && (
            <p>{responseMessage.message}</p>
          )}
        </form>

        <div className="register__footer">
          <p>
            Already have an account?
            <span> Log In</span>
          </p>
        </div>
      </div>
    </div>
  )
}
