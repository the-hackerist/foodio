function ContactUs() {
  return (
    <div className="p-20 pt-40 flex flex-col items-center justify-center max-w-[800px] mx-auto">
      <div className="flex items-center justify-center flex-col gap-10">
        <h2 className="text-5xl text-[#311F09] font-bold text-center md:text-start">
          Contact us
        </h2>
        <p className="text-[#6F5439] text-lg md:text-xl text-center mb-10 max-w-[400px]">
          We love hearing from our customers. Feel free to share your experience
          or ask
          <br /> any questions you may have.
        </p>
      </div>

      <form className="flex flex-col justify-between gap-6 w-full max-w-[400px]">
        <input
          className="py-2 px-6 border text-base rounded-lg"
          id="firstName"
          type="text"
          placeholder="First name"
        />
        <input
          className="py-2 px-6 border text-base rounded-lg"
          id="lastName"
          type="text"
          placeholder="Last name"
        />
        <input
          className="py-2 px-6 border text-base rounded-lg"
          id="email"
          type="email"
          placeholder="Email address"
        />
        <input
          className="py-2 px-6 border text-base rounded-lg"
          id="subject"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="py-2 px-6 border text-base rounded-lg min-h-[150px] max-h-[200px]"
          id="message"
          type="text"
          rows={5}
          placeholder="Message"
        />
        <button className="text-xl font-semibold text-white bg-red-500 rounded-xl p-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
