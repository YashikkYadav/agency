import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare WhatsApp message text
    const text = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.service}
Message: ${formData.message}
    `.trim();

    // Encode text for URL
    const encodedText = encodeURIComponent(text);

    // Open WhatsApp chat
    window.open(`https://wa.me/919887007362?text=${encodedText}`, "_blank");
  };

  return (
    <form
      className="d-flex flex-column gap-4 h-100 w-100 needs-validation mb-3 form"
      onSubmit={handleSubmit}
    >
      <h4 className="scrollanimation animated fadeInDown adr-9 adl-2">
        Send Us Your Inquiry
      </h4>
      <p>Complete the form below, and we'll respond to you promptly.</p>

      <input
        type="text"
        className="form-control py-3 px-4"
        name="name"
        placeholder="Your Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <div className="invalid-feedback">This field is required.</div>

      <div className="row row-cols-lg-2 row-cols-1">
        <div className="col mb-3 m-xl-0">
          <input
            type="email"
            className="form-control py-3 px-4"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">This field is required.</div>
        </div>
        <div className="col">
          <input
            type="tel"
            className="form-control py-3 px-4"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">This field is required.</div>
        </div>
      </div>

      <select
        name="service"
        className="form-select py-3 px-4"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Your Service Interest
        </option>
        <option value="Social Media Management">Social Media Management</option>
        <option value="Brand Strategy & Development">Brand Strategy & Development</option>
        <option value="Content Creation & Marketing">Content Creation & Marketing</option>
        <option value="Paid Advertising Campaigns">Paid Advertising Campaigns</option>
        <option value="Website Design & Optimization">Website Design & Optimization</option>
        <option value="Digital Marketing Consultation">Digital Marketing Consultation</option>
      </select>

      <textarea
        className="form-control py-3 px-4"
        name="message"
        rows="5"
        placeholder="Your Detailed Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button
        type="submit"
        className="w-max-content btn btn-accent align-self-center mt-3"
      >
        Submit Your Inquiry
      </button>
    </form>
  );
}