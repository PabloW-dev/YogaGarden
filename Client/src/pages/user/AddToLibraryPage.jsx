import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

import ToolBar from "../../generalComponents/ToolBar";



export default function AddToLibraryPage() {

  const session = false;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [responseMessage, setResponseMessage] = useState({
    type: "",
    message: ""
  });

  const [type, setType] = useState("");

  const [validation, setValidation] = useState({
    name: "",
    summary: "",
    benefit: "",
    contraindication: "",
    chakra: "",
    image: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    benefit: [],
    contraindication: [],
    chakra: "",
    image: null
  });

  const [benefit, setBenefit] = useState("");
  const [contraindication, setContraindication] = useState("");

  const timeoutRefs = useRef({
    name: null,
    summary: null,
    benefit: null,
    contraindication: null
  });

  const imageInputRef = useRef(null);





  function handleTextChange(e) {
    const { name, value } = e.target;
    clearTimeout(timeoutRefs.current[name]);

    if (value === "") {
      setValidation({
        ...validation,
        [name]: ""
      });

      setFormData({
        ...formData,
        [name]: value
      });

      return;
    }

    if (
      !["name", "summary"].includes(name) || (
      !/^[a-zA-ZÀ-ÿ' -]*$/.test(value) ||
      /^\s/.test(value) ||
      /\s{2,}/.test(value))
    ) {
      setValidation({
        ...validation,
        [name]: "invalid"
      });

      timeoutRefs.current[name] = setTimeout(() => {
        if(formData[name] === "") {
          setValidation(prev => ({
            ...prev,
            [name]: ""
          }));

          return;
        }

        setValidation(prev => ({
          ...prev,
          [name]: "pending"
        }));
      }, 500);

      return;
    }

    setValidation({
      ...validation,
      [name]: "pending"
    });

    setFormData({
      ...formData,
      [name]: value
    });
  }






  function handleTextArrayChange(e) {
    const { name, value } = e.target;
    clearTimeout(timeoutRefs.current[name]);

    if (value === "") {
      setValidation({
        ...validation,
        [name]: ""
      });

      if(name === "benefit") setBenefit("");
      if(name === "contraindication") setContraindication("");

      return;
    }

    if (
      !["benefit", "contraindication"].includes(name) || (
      !/^[a-zA-ZÀ-ÿ' -]*$/.test(value) ||
      /^\s/.test(value) ||
      /\s{2,}/.test(value))
    ) {
      setValidation({
        ...validation,
        [name]: "invalid"
      });

      timeoutRefs.current[name] = setTimeout(() => {
        if((name === "benefit" && benefit === "") || (name === "contraindication" && contraindication === "")) {
          setValidation(prev => ({
            ...prev,
            [name]: ""
          }));

          return;
        }

        setValidation(prev => ({
          ...prev,
          [name]: "pending"
        }));
      }, 500);

      return;
    }

    setValidation({
      ...validation,
      [name]: "pending"
    });

    if(name === "benefit") setBenefit(value);
    if(name === "contraindication") setContraindication(value);
  }

  function handleAddValue(name, value) {
    setFormData({
      ...formData,
      [name]: [
        ...formData[name],
        value
      ]
    });
    
    setValidation({
      ...validation,
      [name]: ""
    })
    
    if(name === "benefit") setBenefit("");
    if(name === "contraindication") setContraindication("");
  }

  function arrayDisabled(name, value) {
    if (
      (name === "benefit" && formData.benefit.length >= 3) ||
      (name === "contraindication" && formData.contraindication.length >= 2) ||
      validation[name] !== "pending"
    ) return true;

    if (
      formData[name].some(
        item => normalizeValue(item) === normalizeValue(value)
      )
    ) return true;

    return false;
  }

  function normalizeValue(value) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function handleRemoveValue(name, index) {
    setFormData({
      ...formData,
      [name]: formData[name].filter((_, i) => i !== index)
    });
  }







  function addChakra(value) {
    if (value === "") {
      setValidation({
        ...validation,
        chakra: ""
      });

      setFormData({
        ...formData,
        chakra: value
      });

      return;
    }

    setValidation({
      ...validation,
      chakra: "confirmed"
    });

    setFormData({
      ...formData,
      chakra: value
    });
  }





  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setValidation({
        ...validation,
        image: ""
      });

      setFormData({
        ...formData,
        image: null
      });

      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setValidation({
        ...validation,
        image: "invalid"
      });

      setFormData({
        ...formData,
        image: null
      });

      e.target.value = "";

      return;
    }

    setFormData({
      ...formData,
      image: file
    });

    setValidation({
      ...validation,
      image: "confirmed"
    });
  }

  function deleteFile() {
    setFormData({
      ...formData,
      image: null
    });

    setValidation({
      ...validation,
      image: ""
    });

    imageInputRef.current.value = "";
  }













  const hasName = formData.name.trim().length > 0;
  const hasSummary = formData.summary.trim().length > 0;
  const hasBenefits = formData.benefit.length > 0;
  const hasContraindications = formData.contraindication.length > 0;
  const hasChakra = formData.chakra.length > 0;

  function isSubmitDisabled() {
    if (
      (!(hasName && validation.name === "confirmed")) || 
      (!(hasSummary && validation.summary === "confirmed")) ||
      !hasBenefits || !hasContraindications || !hasChakra || !session
    ) return true;
    

    return false;
  }







  async function handleSubmit(e) {
    e.preventDefault();

    if(!session || isSubmitting) return;

    setIsSubmitting(true);

    const request = new FormData();
  
    request.append("type", type);
    request.append("name", formData.name);
    request.append("summary", formData.summary);

    formData.benefit.forEach((benefit) => {
      request.append("benefits", benefit);
    });

    formData.contraindication.forEach((contraindication) => {
      request.append("contraindications", contraindication);
    });

    request.append("primaryChakra", formData.chakra);

    if (formData.image) {
      request.append("image", formData.image);
    }

    try {
      const response = await fetch("/api/library-requests", {
        method: "POST",
        body: request
      });

      console.log("Library request response:", response.status, response.statusText);

      if(!response.ok) {
        throw new Error("Failed to submit request");
      }

      const data = await response.json();

      setResponseMessage({
        type: data.type, 
        message: data.message
      });

    } catch(error) {
      console.error("Library request failed.", {
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
    <div className="add-to-library">
      <header className="add-to-library__header">
        <h2>AddToLibrary</h2>

        <NavLink
          to="/library"
          target="_blank"
          rel="noopener noreferrer"
          className="add-to-library__header--link"
        >
          To Library
        </NavLink>
      </header>

      <ToolBar 
        key={type} 
        component={"add-to-library"} 
        type={type} 
        ignoreOutsideId="add-to-library-type" 
      />
      
      <form className="add-to-library__basic">
        <h4>Select the group:</h4>

        <select 
          id="add-to-library-type" 
          className="add-to-library__basic--list"
          value={type}
          onChange={(e) => setType(e.target.value)}
          autoComplete="off"
        >
          <option value="">Select a type</option>

          <option value="focusing">Focusing</option>
          <option value="pranayama">Pranayama</option>
          <option value="stretching">Stretching</option>
          <option value="heating">Heating</option>
          <option value="asanas">Asanas</option>
          <option value="meditation">Meditation</option>
          <option value="relaxation">Relaxation</option>
        </select>

        <span>Please, before making a request,<br /> consider checking if it already exists<br /> by clicking the magnifying glass button.</span>

        <span>This feature requires an active session. <br /> Please, log in before using it</span>
      </form>

      {type && (
        <div className="add-to-library__radial">
          <form className="add-to-library__content"
            onSubmit={handleSubmit}
          >










            <div className="add-to-library__content--name">
              <p>Name:</p>
              <div className="add-to-library__content--name-CNT">
                <input className={`name 
                  ${validation.name === "invalid" ? "invalid" : ""} 
                  ${validation.name === "pending" ? "valid" : ""}
                  ${validation.name === "confirmed" ? "confirmed" : ""}
                `}
                  aria-label=
                    "Name. Only letters, spaces, dashes and apostrophes are allowed."
                  maxLength={100}
                  type="text"
                  name="name"
                  required
                  placeholder="name"
                  value={formData.name}
                  autoComplete="off"
                  onChange={handleTextChange}
                  onFocus={() => {
                    setValidation({
                      ...validation,
                      name: ""
                    });
                  }}
                  onBlur={() => {
                    if(hasName) {
                      setValidation({
                        ...validation,
                        name: "pending"
                      });
                    }
                  }}
                />

                {validation?.name === "pending" && (
                  <div className="validation-wrapper">
                    <button
                      type="button"
                      className="validation-pending"
                      aria-label="Please, click the button to confirmate the content of your input"
                      onClick={() => setValidation({
                        ...validation,
                        name: "confirmed"
                      })}
                    >
                      🔔
                    </button>

                    <span className="validation-tooltip">
                      Check your input and <br /> click to confirm.
                    </span>
                  </div>
                )}

                {validation?.name === "confirmed" && (
                  <span
                    className="validation-valid"
                    aria-label="Name is valid and reviewed"
                  >
                    ✓
                  </span>
                )}
              </div>
            </div>
            









            <div className="add-to-library__content--summary">
              <p>Summary:</p>
              <div className="add-to-library__content--summary-CNT">
                <div className="add-to-library__content--summary-AREA">
                  <textarea className={`summary 
                    ${validation.summary === "invalid" ? "invalid" : ""} 
                    ${validation.summary === "pending" ? "valid" : ""}
                    ${validation.summary === "confirmed" ? "confirmed" : ""}
                  `}
                    aria-label=
                      "Summary. Only letters, spaces, dashes and apostrophes are allowed."
                    placeholder="summary"
                    maxLength={200}
                    name="summary"
                    required
                    autoComplete="off"
                    value={formData.summary}
                    onChange={handleTextChange}
                    onFocus={() => {
                      setValidation({
                        ...validation,
                        summary: ""
                      });
                    }}
                    onBlur={() => {
                      if(hasSummary) {
                        setValidation({
                          ...validation,
                          summary: "pending"
                        });
                      }
                    }}
                  />

                  <small>{formData.summary.length}/200</small>
                </div>
              {validation?.summary === "pending" && (
                <div className="validation-wrapper">
                  <button
                    type="button"
                    className="validation-pending"
                    aria-label="Please, click the button to confirmate the content of your input"
                    onClick={() => setValidation({
                      ...validation,
                      summary: "confirmed"
                    })}
                  >
                    🔔
                  </button>

                  <span className="validation-tooltip">
                    Check your input and click to confirm.
                  </span>
                </div>
              )}

              {validation?.summary === "confirmed" && (
                <span
                  className="validation-valid"
                  aria-label="Summary is valid and reviewed"
                >
                  ✓
                </span>
              )}
              </div>
            </div>
            









            <div className="add-to-library__content--benefits">
              <p>Benefits:</p>
              <div className="add-to-library__content--benefits-CNT">
                <div className="add-to-library__content--benefits-INT">
                  <input className={`benefit 
                    ${validation.benefit === "invalid" ? "invalid" : ""} 
                    ${validation.benefit === "pending" ? "valid" : ""}
                  `}
                    aria-label=
                      "Benefit. Only letters, spaces, dashes and apostrophes are allowed."
                    type="text"
                    placeholder="benefit"
                    name="benefit"
                    autoComplete="off"
                    value={benefit}
                    onChange={handleTextArrayChange}
                    onFocus={() => {
                      setValidation({
                        ...validation,
                        benefit: ""
                      });
                    }}
                    onBlur={() => {
                      if(benefit !== "") {
                        setValidation({
                          ...validation,
                          benefit: "pending"
                        });
                      }
                    }}
                  />
                  
                  {formData.benefit.length === 0 && (
                    <small>At least one benefit is required.</small>
                  )}
                </div>
              
                <button
                  type="button"
                  disabled={arrayDisabled("benefit", benefit)}
                  onClick={() => handleAddValue("benefit", benefit)}
                >
                  🔔 Add Benefit
                </button>  
              </div>
              {formData.benefit.length > 0 && (
                <ul>
                  {formData.benefit.map((item, index) => (
                    <li key={index}>
                        <span className="array-item">
                            {item}
                        </span>
                        <span className="validation-valid">✓</span>
                        <div className="validation-wrapper">
                          <button className="validation-delete"
                            type="button"
                            onClick={() => handleRemoveValue("benefit", index)}
                          >
                            ❌
                          </button>

                          <span className="validation-delete-tooltip">
                            Delete Element
                          </span>
                        </div>
                      </li>
                  ))}
                </ul>
              )}
            </div>












            <div className="add-to-library__content--contraindications">
              <p>Contraindications:</p>
              <div className="add-to-library__content--contraindications-CNT">
                <div className="add-to-library__content--contraindications-INT">
                  <input className={`contraindication 
                    ${validation.contraindication === "invalid" ? "invalid" : ""} 
                    ${validation.contraindication === "pending" ? "valid" : ""}
                  `}
                    aria-label=
                      "Contraindication. Only letters, spaces, dashes and apostrophes are allowed."
                    type="text"
                    placeholder="contraindication"
                    name="contraindication"
                    autoComplete="off"
                    value={contraindication}
                    onChange={handleTextArrayChange}
                    onFocus={() => {
                      setValidation({
                        ...validation,
                        contraindication: ""
                      });
                    }}
                    onBlur={() => {
                      if(contraindication !== "") {
                        setValidation({
                          ...validation,
                          contraindication: "pending"
                        });
                      }
                    }}
                  />
                  
                  {formData.contraindication.length === 0 && (
                    <small>At least one contraindication is required.</small>
                  )}
                </div>
                
                <button
                  type="button"
                  disabled={arrayDisabled("contraindication", contraindication)}
                  onClick={() => handleAddValue("contraindication", contraindication)}
                >
                  🔔 Add Contraindication
                </button>
              </div>
              

              {formData.contraindication.length > 0 && (
                <ul>
                  {formData.contraindication.map((item, index) => (
                    <li key={index}>
                        <span className="array-item">
                            {item}
                        </span>
                        <span className="validation-valid">✓</span>
                        <div className="validation-wrapper">
                          <button className="validation-delete"
                            type="button"
                            onClick={() => handleRemoveValue("contraindication", index)}
                          >
                            ❌
                          </button>

                          <span className="validation-delete-tooltip">
                            Delete Element
                          </span>
                        </div>
                      </li>
                  ))}
                </ul>
              )}
            </div>
            













            <div className="add-to-library__content--chakra">
              <p>Primary Chakra:</p>

              <div className="add-to-library__content--chakra-CNT">
                <select 
                  name="chakra"
                  autoComplete="off"
                  required
                  value={formData.chakra}
                  onChange={(e) => addChakra(e.target.value)}
                >
                  <option value="">-Select Option-</option>
                  <option value="root">Root</option>
                  <option value="sacral">Sacral</option>
                  <option value="solarPlexus">Solar Plexus</option>
                  <option value="heart">Heart</option>
                  <option value="thoat">Thoat</option>
                  <option value="thirdEye">Thrid Eye</option>
                  <option value="crown">Crown</option>
                </select>

                {validation?.chakra === "confirmed" && (
                  <span className="validation-valid">✓</span>
                )}
              </div>
            </div>















            <div className="add-to-library__content--image">
              <div className="add-to-library__content--image-CNT">
                <p>Image:</p>
                <input 
                  ref={imageInputRef}
                  type="file" 
                  name="image"
                  accept="image/png,image/jpeg,image/webp"
                  autoComplete="off"
                  onChange={handleImageChange}
                />

                <small>The image must be smaller than 2 MB. <br /> Only .png/.jpg/.webp are allowed</small>
              
                {validation.image === "invalid" && (
                  <small className="invalid-message">
                    The selected image is too large. Maximum size is 2 MB.
                  </small>
                )}   
              </div>

              {validation.image === "confirmed" && (
                <span className="validation-valid">✓</span>
              )}

              {formData.image && (
                <>
                  <button className="validation-delete"
                    type="button"
                    onClick={deleteFile}
                  >
                    ❌
                  </button>

                  <span className="validation-delete-tooltip">
                    Delete Image
                  </span>
                </>
              )}
              
            </div>
            













            <button className="add-to-library__content--submit"
              type="submit"
              disabled={isSubmitDisabled() || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send email"}
            </button>

            {responseMessage.message && (
              <p>{responseMessage.message}</p>
            )}
          </form>
        </div>
      )}
    </div>
  )
}
