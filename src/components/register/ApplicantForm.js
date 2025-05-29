import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RegisterApplicant = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_user_id')
      .then((result) => {
          alert("Form submitted successfully!");
          console.log(result.text);
      }, (error) => {
          alert("Error submitting form.");
          console.log(error.text);
      });
  };

  return (
    <>
    <div>
      <Navbar />
    </div>
    <form ref={form} onSubmit={sendEmail} className="container p-4 mt-4">
  <h2 className="mb-4 fw-bold">Register Applicant</h2>

  <div className="mb-3">
    <label className="form-label">Apply For</label>
    <select name="apply_for" className="form-select" required>
      <option value="">--Select--</option>
      <option value="Partner Agreement">Partner Agreement</option>
      <option value="NGO Agreement">NGO Agreement</option>
    </select>
  </div>

  <div className="row g-3">
    <div className="col-md-6">
      <input name="full_name" className="form-control" placeholder="Full Name" required />
    </div>
    <div className="col-md-6">
      <input name="fathers_name" className="form-control" placeholder="Father’s Name" required />
    </div>
    <div className="col-md-6">
      <input type="date" name="dob" className="form-control" required />
    </div>
    <div className="col-md-6">
      <input name="gender" className="form-control" placeholder="Gender" required />
    </div>
    <div className="col-md-6">
      <input name="marital_status" className="form-control" placeholder="Marital Status" required />
    </div>
    <div className="col-md-6">
      <input name="religion" className="form-control" placeholder="Religion" required />
    </div>
    <div className="col-md-6">
      <input name="education" className="form-control" placeholder="Educational Qualification" required />
    </div>
    <div className="col-md-6">
      <input name="experience" className="form-control" placeholder="Experience" />
    </div>
    <div className="col-md-6">
      <input name="blood_group" className="form-control" placeholder="Blood Group" />
    </div>
    <div className="col-md-6">
      <input name="languages" className="form-control" placeholder="Languages Known" />
    </div>
  </div>

  <h3 className="mt-4 mb-3 fw-semibold">Address</h3>
  <div className="row g-3">
    <div className="col-md-6"><input name="house_number" className="form-control" placeholder="House/Door Number" /></div>
    <div className="col-md-6"><input name="street" className="form-control" placeholder="Street Name" /></div>
    <div className="col-md-6"><input name="apartment" className="form-control" placeholder="Individual/Apartment Name" /></div>
    <div className="col-md-6"><input name="village" className="form-control" placeholder="Village" /></div>
    <div className="col-md-6"><input name="mandal" className="form-control" placeholder="Mandal Name" /></div>
    <div className="col-md-6"><input name="district" className="form-control" placeholder="District Name" /></div>
    <div className="col-md-6"><input name="city" className="form-control" placeholder="City" /></div>
    <div className="col-md-6"><input name="ward" className="form-control" placeholder="Ward Name" /></div>
    <div className="col-md-6"><input name="landmark" className="form-control" placeholder="Landmark" /></div>
    <div className="col-md-6"><input name="pincode" className="form-control" placeholder="Pin Code" /></div>
    <div className="col-md-6"><input name="whatsapp" className="form-control" placeholder="WhatsApp Number" /></div>
    <div className="col-md-6"><input name="contact" className="form-control" placeholder="Contact Number" /></div>
    <div className="col-md-6"><input type="email" name="email" className="form-control" placeholder="Email ID" required /></div>
  </div>

  <div className="mt-4">
    <label className="form-label">Address Proof</label>
    <input type="file" name="address_proof" className="form-control" />
  </div>

  <div className="mt-3">
    <label className="form-label">ID Proof</label>
    <input type="file" name="id_proof" className="form-control" />
  </div>

  <div className="mt-3 mb-4">
    <label className="form-label">Selfie Photo</label>
    <input type="file" name="selfie" className="form-control" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    <div>
      <Footer />
    </div>
    </>
  );
};

export default RegisterApplicant;
