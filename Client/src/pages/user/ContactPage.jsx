import { useState } from "react";
import { NavLink } from "react-router-dom";

const emptyForm = {
  anonimousname: "",
  notanemail: "",
  subject: "",
  message: ""
};

export default function ContactPage() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [responseMessage, setResponseMessage] = useState({
    type: "",
    message: ""
  });

  

  const [formData, setFormData] = useState(() => {
    const savedForm = sessionStorage.getItem("contactForm");

    return savedForm
      ? JSON.parse(savedForm)
      : emptyForm;
  });

  function normalizeValue(value) {
    return value.trim().replace(/\s+/g, " ");
  }

  function handleTextChange(e) {
    const { name, value } = e.target;

    const newFormData = {
      ...formData,
      [name]: value
    };

    setFormData(newFormData);

    sessionStorage.setItem(
      "contactForm",
      JSON.stringify(newFormData)
    );
  }

  function handleClear() {
    const clearForm = {
      ...formData,
      subject: "",
      message: ""
    };

    setFormData(clearForm);
    sessionStorage.setItem(
      "contactForm",
      JSON.stringify(clearForm)
    );
  }

  const hasName = formData.anonimousname.trim().length > 0;
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                  formData.notanemail.trim());
  const hasSubject = formData.subject.trim().length > 0;
  const hasMessage = formData.message.trim().length > 0;


  function isSubmitDisabled() {
    if (
      !hasName ||
      !hasEmail ||
      !hasSubject ||
      !hasMessage
    ) return true;
    
    return false;
  }


  



  async function handleSubmit(e) {
    e.preventDefault();

    if(isSubmitting) return;

    setIsSubmitting(true);

    const request = {
      name: normalizeValue(formData.anonimousname),
      email: formData.notanemail.trim().toLowerCase(),
      subject: normalizeValue(formData.subject),
      message: formData.message.trim()
    };

    if (
      !request.name ||
      !request.email ||
      !request.subject ||
      !request.message
    ) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      });

      console.log("Contact request response:", response.status, response.statusText);

      if(!response.ok) {
        throw new Error("Failed to submit request");
      }

      const data = await response.json();

      setResponseMessage({
        type: data.type, 
        message: data.message
      });

      setFormData(emptyForm);
      
      sessionStorage.removeItem("contactForm");

    } catch (error) {
      console.error("Contact request failed.", {
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
    <div className="contact">
      <div className="contact__header">
        <h1>Contact</h1>

        <p>Have a question? Get in touch.</p>
      </div>

      <div className="contact__body">
        <div className="contact__body--questions">
          <div className="contact__body--questions-FAQ">
            <h3>FAQ:</h3>

            <div>
              <h4>What is YogaGarden?</h4>

              <p>YogaGarden is an educational platform focused on the study and practice of yoga, with particular emphasis on Jñana Yoga, research and critical reflection.</p>

              <h4>What are YogaGarden courses?</h4>

              <p>Courses are presented as “states of the question”: structured overviews of what is currently known about a particular subject, including relevant evidence, interpretations and unresolved questions.</p>

              <h4>Are the courses suitable for beginners?</h4>

              <p>Yes. Courses are designed to introduce a subject clearly while also providing enough context for students who want to explore it further.</p>

              <h4>Can I create my own yoga classes?</h4>

              <p>Yes. Registered users can use the class builder to create sequences based on the techniques available in the YogaGarden library.</p>

              <h4>Can I suggest a technique for the library?</h4>

              <p>Yes. Registered users can suggest techniques that are not currently included. Suggestions are reviewed by YogaGarden before they can be added to the library. You can make a suggestion <NavLink to="/add-to-library">here</NavLink>.</p>

              <h4>Does YogaGarden provide medical or professional advice?</h4>

              <p>No. YogaGarden provides educational information about yoga and its practice. Its content is not a substitute for medical advice or individualized professional instruction.</p>

              <div className="space"></div>
            </div>
          </div>

          <div className="contact__body--questions-MLS">
            <h3>General Enquiries</h3>

            <p>Questions about YogaGarden, the platform or how it works?:</p>

            <span>hello@yogagarden.com</span>

            <h3>Courses and research</h3>

            <p>Questions about our research, sources, courses or a specific topic?:</p>

            <span>research@yogagarden.com</span>
          </div>
        </div>

        <div className="contact__body--mail"> 
          <h2>Send a Message</h2>
          <small>* Required fields. Your information is saved while this browser tab remains open.</small>

          <form className="contact__body--mail-FRM"
            onSubmit={handleSubmit}
          >
            <div className="data">
              <div>
                <span>*</span>

                <input 
                  type="text"
                  name="anonimousname"
                  maxLength={50}
                  autoComplete="off"
                  aria-label="Name"
                  required
                  placeholder=" name"
                  value={formData.anonimousname}
                  onChange={handleTextChange}
                />
              </div>
              
              <div>
                <span>*</span>

                <input 
                  autoComplete="new-password"
                  type="email"
                  name="notanemail"
                  maxLength={254}
                  required
                  
                  aria-label="Email address"
                  placeholder=" email"
                  value={formData.notanemail}
                  onChange={handleTextChange}
                />
              </div>
            </div>

            <div>
              <span>*</span>

              <input
                type="text"
                name="subject"
                maxLength={150}
                aria-label=
                  "Subject"
                required
                autoComplete="off"
                placeholder=" subject"
                value={formData.subject}
                onChange={handleTextChange}
              />
            </div>
            
            <div className="message">
              <p>Message:</p>
              
              <textarea
                aria-label=
                  "Message"
                placeholder=" Write your message here"
                maxLength={800}
                name="message"
                required
                autoComplete="off"
                value={formData.message}
                onChange={handleTextChange}
              />
            </div>


            <div className="buttons">
              <button
                className="buttons__clear"
                type="button"
                onClick={handleClear}
              >
                Clear Message
              </button>
              

              <button
                type="submit"
                disabled={isSubmitDisabled() || isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send email"}
              </button>
            </div>
            
            {responseMessage.message && (
              <p>{responseMessage.message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
