function ContactUs() {
  return (
    <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center p-20 pt-40">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-center text-5xl font-bold text-[#311F09] md:text-start">
          Contact us
        </h2>
        <p className="mb-10 max-w-[400px] text-center text-lg text-[#6F5439] md:text-xl">
          We love hearing from our customers. Feel free to share your experience
          or ask
          <br /> any questions you may have.
        </p>
      </div>

      <form className="flex w-full max-w-[400px] flex-col justify-between gap-6">
        <input
          className="rounded-lg border px-6 py-2 text-base"
          id="firstName"
          type="text"
          placeholder="First name"
        />
        <input
          className="rounded-lg border px-6 py-2 text-base"
          id="lastName"
          type="text"
          placeholder="Last name"
        />
        <input
          className="rounded-lg border px-6 py-2 text-base"
          id="email"
          type="email"
          placeholder="Email address"
        />
        <input
          className="rounded-lg border px-6 py-2 text-base"
          id="subject"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="max-h-[200px] min-h-[150px] rounded-lg border px-6 py-2 text-base"
          id="message"
          type="text"
          rows={5}
          placeholder="Message"
        />
        <button className="rounded-xl bg-red-500 p-4 text-xl font-semibold text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
