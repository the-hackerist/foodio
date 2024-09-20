function ContactUs() {
  return (
    <div className="p-20 pt-40 flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center flex-col gap-10">
        <h2 className="text-6xl text-[#311F09] font-bold">Contact us</h2>
        <p className="text-[#6F5439] text-xl text-center mb-10">
          We love hearing from our customers. Feel free to share your experience
          or ask
          <br /> any questions you may have.
        </p>
      </div>
      <form className="flex flex-col justify-between gap-4 w-[500px]">
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
          className="py-2 px-6 border text-base rounded-lg"
          id="message"
          type="text"
          rows={4}
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
