import { useState } from "react";

import SectionHeading from "../../components/SectionHeading/SectionHeading";

import { siteConfig } from "../../data/siteConfig";


const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: ""
};


const initialErrors = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function FieldError({ name, touched, errors }) {

  if (!touched[name] || !errors[name]) {
    return null;
  }

  return (
    <p
      id={`${name}-error`}
      className="mt-2 text-xs text-red-400"
      role="alert"
    >
      {errors[name]}
    </p>
  );

}


function Contact() {

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState(initialErrors);

  const [touched, setTouched] = useState({});

  const [status, setStatus] = useState(null);


  // =================================
  // 1. VALIDATE INDIVIDUAL FIELD
  // =================================

  const validateField = (name, value) => {

    const trimmedValue = value.trim();

    switch (name) {

      case "name":

        if (!trimmedValue) {
          return "Name is required.";
        }

        if (trimmedValue.length < 2) {
          return "Name must contain at least 2 characters.";
        }

        return "";


      case "email":

        if (!trimmedValue) {
          return "Email is required.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
          return "Please enter a valid email address.";
        }

        return "";


      case "subject":

        if (!trimmedValue) {
          return "Subject is required.";
        }

        return "";


      case "message":

        if (!trimmedValue) {
          return "Message is required.";
        }

        if (trimmedValue.length < 20) {
          return "Message must contain at least 20 characters.";
        }

        return "";


      default:
        return "";

    }

  };


  // =================================
  // 2. VALIDATE ENTIRE FORM
  // =================================

  const validateForm = (data) => {

    const newErrors = {};

    Object.keys(data).forEach((field) => {

      newErrors[field] = validateField(
        field,
        data[field]
      );

    });

    return newErrors;

  };


  // =================================
  // 3. HANDLE INPUT CHANGES
  // =================================

  const handleChange = (event) => {

    const { name, value } = event.target;


    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));


    // Revalidate fields that have already been touched

    if (touched[name]) {

      setErrors((previous) => ({
        ...previous,
        [name]: validateField(name, value)
      }));

    }


    // Clear previous submission message

    setStatus(null);

  };


  // =================================
  // 4. HANDLE FIELD BLUR
  // =================================

  const handleBlur = (event) => {

    const { name, value } = event.target;


    setTouched((previous) => ({
      ...previous,
      [name]: true
    }));


    setErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value)
    }));

  };


  // =================================
  // 5. HANDLE FORM SUBMISSION
  // =================================

  const handleSubmit = (event) => {

    event.preventDefault();


    const newErrors = validateForm(formData);

    setErrors(newErrors);


    // Mark all fields as touched

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });


    // Stop if validation fails

    const hasErrors = Object.values(newErrors).some(
      (error) => error !== ""
    );

    if (hasErrors) {
      return;
    }


    // Check whether a recipient email is configured

    if (!siteConfig.email.trim()) {

      setStatus({
        type: "error",
        message:
          "Contact email is not configured yet. Please add your email in siteConfig.js."
      });

      return;

    }


// Prepare Gmail compose URL

const emailBody = `
Hello ${siteConfig.name},

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

const params = new URLSearchParams({
  view: "cm",
  fs: "1",
  to: siteConfig.email,
  su: formData.subject,
  body: emailBody
});

const gmailUrl =
  `https://mail.google.com/mail/?${params.toString()}`;


// Open Gmail in a new tab

window.open(
  gmailUrl,
  "_blank",
  "noopener,noreferrer"
);


    setStatus({
      type: "success",
      message:
        "Your Gmail website should open with your message prepared. Please review and send it there."
    });

  };


  // =================================
  // 6. REUSABLE INPUT STYLING
  // =================================

  const getInputClass = (field) => {

    const hasError = touched[field] && errors[field];

    return `
      w-full rounded-xl border
      ${hasError ? "border-red-400/60" : "border-line"}
      bg-background/70
      px-4 py-3.5
      text-sm text-foreground
      placeholder:text-muted/60
      outline-none
      transition
      focus:border-accent/60
      focus:ring-2
      focus:ring-accent/10
    `;

  };


  // =================================
  // 7. REUSABLE FIELD ERROR
  // =================================

  const FieldError = ({ name }) => {

    if (!touched[name] || !errors[name]) {
      return null;
    }

    return (
      <p className="mt-2 text-xs text-red-400" role="alert">
        {errors[name]}
      </p>
    );

  };


  return (

    <section
      id="contact"
      className="scroll-mt-20 px-5 pt-8 pb-20 sm:px-8 md:pt-10 md:pb-24"
    >

      <div className="mx-auto max-w-7xl">


        {/* SECTION HEADING */}

        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's start a conversation."
          description="Have an opportunity, project idea or simply want to connect? I'd be happy to hear from you."
        />


        {/* MAIN GRID */}

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">


          {/* LEFT COLUMN - CONTACT INFORMATION */}

          <div className="rounded-card border border-line bg-surface/60 p-6 sm:p-8">

            <p className="text-xs font-bold tracking-[0.2em] text-accent-teal">
              CONTACT INFORMATION
            </p>


            <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
              Let's connect.
            </h3>


            <p className="mt-4 text-sm leading-7 text-muted">
              I'm always interested in connecting with people in technology,
              discussing development opportunities and exploring interesting ideas.
            </p>


            {/* Location */}

            <div className="mt-10 flex items-start gap-4">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-background text-accent-teal">

                <span>⌖</span>

              </div>


              <div>

                <p className="text-xs text-muted">
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold text-foreground">
                  {siteConfig.location}
                </p>

              </div>

            </div>


            {/* Email */}

            {siteConfig.email && (

              <div className="mt-6 flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-background text-accent-teal">
                  @
                </div>

                <div className="min-w-0">

                  <p className="text-xs text-muted">
                    Email
                  </p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block break-all text-sm font-semibold text-foreground transition hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>

                </div>

              </div>

            )}


            {/* Social Links */}

            <div className="mt-10 border-t border-line pt-7">

              <p className="text-xs font-bold tracking-widest text-foreground">
                FIND ME ONLINE
              </p>


              <div className="mt-5 flex flex-wrap gap-3">

                {siteConfig.githubUrl && (

                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line px-4 py-2.5 text-sm font-medium text-muted transition hover:border-accent/50 hover:text-accent"
                  >
                    GitHub ↗
                  </a>

                )}


                {siteConfig.linkedinUrl && (

                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-line px-4 py-2.5 text-sm font-medium text-muted transition hover:border-accent/50 hover:text-accent"
                  >
                    LinkedIn ↗
                  </a>

                )}

              </div>

            </div>

          </div>


          {/* RIGHT COLUMN - CONTACT FORM */}

          <div className="rounded-card border border-line bg-surface/70 p-6 sm:p-8">

            <div className="mb-8">

              <p className="text-xs font-bold tracking-[0.2em] text-accent-teal">
                SEND A MESSAGE
              </p>

              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                I'd love to hear from you.
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                Fill in the details below and prepare a message through your email application.
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >

              {/* NAME */}

              <div>

                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  className={getInputClass("name")}
                  aria-invalid={Boolean(touched.name && errors.name)}
                  aria-describedby="name-error"
                />

                <FieldError name="name" touched={touched} errors={errors} />

              </div>


              {/* EMAIL */}

              <div>

                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                  className={getInputClass("email")}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby="email-error"
                />

                <FieldError name="email" touched={touched} errors={errors} />

              </div>


              {/* SUBJECT */}

              <div>

                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="What would you like to discuss?"
                  className={getInputClass("subject")}
                  aria-invalid={Boolean(touched.subject && errors.subject)}
                  aria-describedby="subject-error"
                />

                <FieldError name="subject" touched={touched} errors={errors} />

              </div>


              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Write your message here..."
                  className={`${getInputClass("message")} resize-y`}
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby="message-error"
                />

                <FieldError name="message" touched={touched} errors={errors} />

              </div>


              {/* SUBMISSION STATUS */}

              {status && (

                <div
                  role="status"
                  className={`rounded-xl border p-4 text-sm leading-6 ${
                    status.type === "error"
                      ? "border-red-400/30 bg-red-400/10 text-red-300"
                      : "border-accent-teal/30 bg-accent-teal/10 text-accent-teal"
                  }`}
                >
                  {status.message}
                </div>

              )}


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-indigo-200 sm:w-auto"
              >

                Prepare Message

                <span>↗</span>

              </button>

              <p className="text-xs leading-6 text-muted">
                Your browser will open Gmail website.
                You can review and send the prepared message from there.
              </p>

            </form>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;