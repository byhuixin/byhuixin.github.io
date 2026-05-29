// ─── Contact.tsx ────────────────────────────────────────────────────────────
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_xfus2ew";
const EMAILJS_TEMPLATE_ID = "template_hzwgi6s";
const EMAILJS_PUBLIC_KEY = "vRkabgw9woHHZzmjn";

type Status = "idle" | "sending" | "success" | "error";

interface FieldErrors {
  from_name?: string;
  reply_to?: string;
  message?: string;
}

const validate = (
  name: string,
  email: string,
  message: string,
): FieldErrors => {
  const errors: FieldErrors = {};
  if (!name.trim()) {
    errors.from_name = "Name can't be empty.";
  }
  if (!email.trim()) {
    errors.reply_to = "Email can't be empty.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.reply_to = "That doesn't look like a valid email.";
  }
  if (!message.trim()) {
    errors.message = "Message can't be empty.";
  }
  return errors;
};

export const Contact = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  // Track touched so errors only show after a field has been interacted with
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const getFieldValue = (fieldName: string) =>
    (
      formRef.current?.elements.namedItem(fieldName) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null
    )?.value ?? "";

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const newErrors = validate(
      getFieldValue("from_name"),
      getFieldValue("reply_to"),
      getFieldValue("message"),
    );
    setErrors(newErrors);
  };

  const handleChange = (fieldName: string) => {
    // Re-validate live only once the field has been touched
    if (!touched[fieldName]) return;
    const newErrors = validate(
      getFieldValue("from_name"),
      getFieldValue("reply_to"),
      getFieldValue("message"),
    );
    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    // Mark all fields as touched so every error surfaces on submit attempt
    setTouched({ from_name: true, reply_to: true, message: true });

    const newErrors = validate(
      getFieldValue("from_name"),
      getFieldValue("reply_to"),
      getFieldValue("message"),
    );
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current?.reset();
      setTouched({});
      setErrors({});
      // Let "Sent ✓" show briefly, then re-enable for another message
      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const btnLabel =
    status === "sending"
      ? "Sending…"
      : status === "success"
        ? "Sent ✓"
        : status === "error"
          ? "Try again →"
          : "Send it →";

  // Reusable inline error element
  const FieldError = ({ field }: { field: keyof FieldErrors }) =>
    touched[field] && errors[field] ? (
      <span
        role="alert"
        style={{
          display: "block",
          fontSize: "0.78rem",
          color: "var(--primary-warm)",
          marginTop: "0.3rem",
          letterSpacing: "0.01em",
        }}
      >
        {errors[field]}
      </span>
    ) : null;

  // Border highlight for invalid fields
  const fieldStyle = (field: keyof FieldErrors): React.CSSProperties =>
    touched[field] && errors[field]
      ? { boxShadow: "0 0 0 1.5px var(--primary-warm)" }
      : {};

  return (
    <section id="contact" className="section section-wrapper">
      {/* ── Mobile botanical — top-right of heading, mobile only ── */}
      <div
        className="contact-botanical contact-botanical--mobile"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            opacity="0.9"
            stroke="#6b7f52"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M60 280 Q62 220 68 180 Q76 140 70 100 Q66 70 74 40"
              strokeWidth="1.4"
            />
            <path d="M68 180 Q90 160 102 145" strokeWidth="1" />
            <path d="M70 155 Q48 138 38 122" strokeWidth="1" />
            <path d="M69 120 Q92 105 106 92" strokeWidth="0.9" />
            <path d="M70 100 Q52 82 44 68" strokeWidth="0.9" />
            <path d="M72 70 Q90 55 98 40" strokeWidth="0.8" />
            <ellipse
              cx="106"
              cy="90"
              rx="10"
              ry="16"
              transform="rotate(35 106 90)"
              fill="#6b7f52"
              opacity="0.55"
              stroke="none"
            />
            <ellipse
              cx="37"
              cy="120"
              rx="9"
              ry="15"
              transform="rotate(-30 37 120)"
              fill="#6b7f52"
              opacity="0.5"
              stroke="none"
            />
            <ellipse
              cx="102"
              cy="143"
              rx="9"
              ry="14"
              transform="rotate(40 102 143)"
              fill="#6b7f52"
              opacity="0.45"
              stroke="none"
            />
            <ellipse
              cx="40"
              cy="68"
              rx="8"
              ry="13"
              transform="rotate(-20 40 68)"
              fill="#6b7f52"
              opacity="0.45"
              stroke="none"
            />
            <ellipse
              cx="98"
              cy="38"
              rx="8"
              ry="13"
              transform="rotate(30 98 38)"
              fill="#6b7f52"
              opacity="0.4"
              stroke="none"
            />
            <ellipse
              cx="74"
              cy="38"
              rx="9"
              ry="14"
              transform="rotate(10 74 38)"
              fill="#6b7f52"
              opacity="0.5"
              stroke="none"
            />
            <circle
              cx="74"
              cy="38"
              r="3.5"
              fill="#b85c38"
              opacity="0.3"
              stroke="none"
            />
            <circle
              cx="40"
              cy="68"
              r="3"
              fill="#b85c38"
              opacity="0.25"
              stroke="none"
            />
          </g>
        </svg>
      </div>
      {/* ── Left botanical — anchored beside heading column ── */}
      <div
        className="contact-botanical contact-botanical--left"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            opacity="0.3"
            stroke="#6b7f52"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M60 280 Q58 220 52 180 Q44 140 50 100 Q54 70 46 40"
              strokeWidth="1.4"
            />
            <path d="M52 180 Q30 160 18 145" strokeWidth="1" />
            <path d="M50 155 Q72 138 82 122" strokeWidth="1" />
            <path d="M51 120 Q28 105 14 92" strokeWidth="0.9" />
            <path d="M50 100 Q68 82 76 68" strokeWidth="0.9" />
            <path d="M48 70 Q30 55 22 40" strokeWidth="0.8" />
            <ellipse
              cx="14"
              cy="90"
              rx="10"
              ry="16"
              transform="rotate(-35 14 90)"
              fill="#6b7f52"
              opacity="0.55"
              stroke="none"
            />
            <ellipse
              cx="83"
              cy="120"
              rx="9"
              ry="15"
              transform="rotate(30 83 120)"
              fill="#6b7f52"
              opacity="0.5"
              stroke="none"
            />
            <ellipse
              cx="18"
              cy="143"
              rx="9"
              ry="14"
              transform="rotate(-40 18 143)"
              fill="#6b7f52"
              opacity="0.45"
              stroke="none"
            />
            <ellipse
              cx="80"
              cy="68"
              rx="8"
              ry="13"
              transform="rotate(20 80 68)"
              fill="#6b7f52"
              opacity="0.45"
              stroke="none"
            />
            <ellipse
              cx="22"
              cy="38"
              rx="8"
              ry="13"
              transform="rotate(-30 22 38)"
              fill="#6b7f52"
              opacity="0.4"
              stroke="none"
            />
            <ellipse
              cx="46"
              cy="38"
              rx="9"
              ry="14"
              transform="rotate(-10 46 38)"
              fill="#6b7f52"
              opacity="0.5"
              stroke="none"
            />
            <circle
              cx="46"
              cy="38"
              r="3.5"
              fill="#b85c38"
              opacity="0.35"
              stroke="none"
            />
            <circle
              cx="80"
              cy="68"
              r="3"
              fill="#b85c38"
              opacity="0.28"
              stroke="none"
            />
            <circle
              cx="83"
              cy="120"
              r="2.5"
              fill="#b85c38"
              opacity="0.25"
              stroke="none"
            />
          </g>
        </svg>
      </div>

      {/* ── Right botanical — anchored beside form column ── */}
      <div
        className="contact-botanical contact-botanical--right"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 120 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            opacity="0.22"
            stroke="#6b7f52"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M60 280 Q62 220 68 180 Q76 140 70 100 Q66 70 74 40"
              strokeWidth="1.4"
            />
            <path d="M68 180 Q90 160 102 145" strokeWidth="1" />
            <path d="M70 155 Q48 138 38 122" strokeWidth="1" />
            <path d="M69 120 Q92 105 106 92" strokeWidth="0.9" />
            <path d="M70 100 Q52 82 44 68" strokeWidth="0.9" />
            <path d="M72 70 Q90 55 98 40" strokeWidth="0.8" />
            <ellipse
              cx="106"
              cy="90"
              rx="10"
              ry="16"
              transform="rotate(35 106 90)"
              fill="#6b7f52"
              opacity="0.55"
              stroke="none"
            />
            <ellipse
              cx="37"
              cy="120"
              rx="9"
              ry="15"
              transform="rotate(-30 37 120)"
              fill="#6b7f52"
              opacity="0.5"
              stroke="none"
            />
            <ellipse
              cx="102"
              cy="143"
              rx="9"
              ry="14"
              transform="rotate(40 102 143)"
              fill="#6b7f52"
              opacity="0.45"
              stroke="none"
            />
            <ellipse
              cx="40"
              cy="68"
              rx="8"
              ry="13"
              transform="rotate(-20 40 68)"
              fill="#6b7f52"
              opacity="0.45"
              stroke="none"
            />
            <ellipse
              cx="98"
              cy="38"
              rx="8"
              ry="13"
              transform="rotate(30 98 38)"
              fill="#6b7f52"
              opacity="0.4"
              stroke="none"
            />
            <ellipse
              cx="74"
              cy="38"
              rx="9"
              ry="14"
              transform="rotate(10 74 38)"
              fill="#6b7f52"
              opacity="0.5"
              stroke="none"
            />
            <circle
              cx="74"
              cy="38"
              r="3.5"
              fill="#b85c38"
              opacity="0.3"
              stroke="none"
            />
            <circle
              cx="40"
              cy="68"
              r="3"
              fill="#b85c38"
              opacity="0.25"
              stroke="none"
            />
          </g>
        </svg>
      </div>

      <div className="container">
        <div className="contact-layout">
          {/* ── Row 1, Col 1: label + heading ── */}
          <div className="contact-left-header">
            <p className="sec-label">Contact Me</p>
            <h2 className="contact-heading">
              Let's build something{" "}
              <em className="contact-heading__em">meaningful</em>
            </h2>
          </div>

          {/* ── Row 1, Col 2: form intro ── */}
          <p className="contact-form-intro">
            Got something on your mind? Let's figure it out together.
          </p>

          {/* ── Row 2, Col 1: subtext + contact rows ── */}
          <div className="contact-left">
            <p className="contact-subtext">
              I'm open to freelance, full-time, collaborations or just a good
              conversation. If something's on your mind, I'd love to hear it.
            </p>

            <div className="contact-rows">
              <a href="mailto:tyhadthye16@gmail.com" className="contact-row">
                <div className="contact-row__icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <p className="contact-row__label">Email</p>
                  <p className="contact-row__value">zh.huixinn@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/zhanghuixin"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
              >
                <div className="contact-row__icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="contact-row__label">LinkedIn</p>
                  <p className="contact-row__value">/in/zhanghuixin</p>
                </div>
              </a>
            </div>
          </div>

          {/* ── Row 2, Col 2: form ── */}
          <div className="contact-right">
            <form
              ref={formRef}
              className="contact-form-inner"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="c-name">
                    Name
                  </label>
                  <input
                    id="c-name"
                    name="from_name"
                    type="text"
                    className="contact-field__input"
                    style={fieldStyle("from_name")}
                    onBlur={() => handleBlur("from_name")}
                    onChange={() => handleChange("from_name")}
                    aria-describedby={errors.from_name ? "err-name" : undefined}
                    aria-invalid={!!(touched.from_name && errors.from_name)}
                  />
                  <span id="err-name">
                    <FieldError field="from_name" />
                  </span>
                </div>

                <div className="contact-field">
                  <label className="contact-field__label" htmlFor="c-email">
                    Email
                  </label>
                  <input
                    id="c-email"
                    name="reply_to"
                    type="email"
                    className="contact-field__input"
                    style={fieldStyle("reply_to")}
                    onBlur={() => handleBlur("reply_to")}
                    onChange={() => handleChange("reply_to")}
                    aria-describedby={errors.reply_to ? "err-email" : undefined}
                    aria-invalid={!!(touched.reply_to && errors.reply_to)}
                  />
                  <span id="err-email">
                    <FieldError field="reply_to" />
                  </span>
                </div>
              </div>

              <div className="contact-field contact-field--grow">
                <label className="contact-field__label" htmlFor="c-message">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  className="contact-field__textarea"
                  rows={4}
                  style={fieldStyle("message")}
                  onBlur={() => handleBlur("message")}
                  onChange={() => handleChange("message")}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  aria-invalid={!!(touched.message && errors.message)}
                />
                <span id="err-message">
                  <FieldError field="message" />
                </span>
              </div>

              {/* Send error nudge */}
              {status === "error" && (
                <p
                  role="alert"
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--primary-warm)",
                    margin: 0,
                  }}
                >
                  Something went wrong — please try again or email directly.
                </p>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={status === "sending"}
              >
                {btnLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ── Autofill colour override ── */}
      <style>{`
        .contact-field__input:-webkit-autofill,
        .contact-field__input:-webkit-autofill:hover,
        .contact-field__input:-webkit-autofill:focus,
        .contact-field__input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 9999px #f0ebe1 inset !important;
          box-shadow: 0 0 0 9999px #f0ebe1 inset !important;
          -webkit-text-fill-color: var(--neutral-charcoal) !important;
        }
      `}</style>
    </section>
  );
};
