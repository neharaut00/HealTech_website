import React from "react";

function ContactUs() {
  return (
    <div className="mx-28 my-20 py-12">
      <div className="sm:w-[100%] md:[100%] lg:w-[75%] leading-tight pb-16">
        <h1 className="text-[64px] font-inter text-primary_font font-bold">
          Love to hear from you, Get in touch 👋🏻
        </h1>
      </div>
      <div>
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="first_name" class="text-field-label">
                Your name
              </label>
              <input
                type="text"
                id="first_name"
                class="text-field"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label class="text-field-label">
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="text-field"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label for="phone" class="text-field-label">
              Your mobile no
              </label>
              <input
                type="tel"
                id="phone"
                class="text-field"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <div>
              <label class="text-field-label">
              What you are interested
              </label>
              <select name="cars" id="interest" class="text-field">
                <option value="volvo">Product</option>
                <option value="saab">Services</option>
                <option value="mercedes">Enquiry</option>
                <option value="audi">Join Us</option>
              </select>
             
            </div>
          </div>
          <div class="mb-6">
            <label class="text-field-label">
              Message
            </label>
            <input
              type="textarea"
              id="message"
              class="text-field h-28"
              required
            />
          </div>
          <button className="btn-yellow min-w-[50%] mt-8" type="submit">
            Just Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
