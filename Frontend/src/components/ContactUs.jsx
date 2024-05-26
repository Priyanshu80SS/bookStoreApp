const ContactUs = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col h-screen items-center justify-center">
        <h3 className="font-bold text-lg">Contact Us</h3>
        <div className="mt-4 space-y-2">
          <span>Name</span>
          <br />
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-80 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        {/* Email */}
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        <div className="mt-4 space-y-2">
          <span>Message</span>
          <br />
          <textarea
            placeholder="Type your message"
            className="w-80 h-30 px-3 py-2 border rounded-md outline-none resize-none"
          ></textarea>
          <br />
          <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
