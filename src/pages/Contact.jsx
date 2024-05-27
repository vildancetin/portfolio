export default function Contact() {
  return (
    <div className="mt-24 contact">
      <div className="font-poppins flex justify-center items-center flex-col mt-6">
        <p className="text-blue text-2xl font-medium">Send me a message!</p>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      </div>
      <form action="#" className="mt-12">
        {/* email and name */}
        <div className="flex gap-4 justify-center items-center">
          <div className="w-1/3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-blue text-left"
            >
              Your Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full rounded-md  text-sm shadow-sm p-2 focus:ring-2 focus:outline-none focus:ring-blue ring-1 ring-orange "
              placeholder="Enter your name"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-blue text-left "
            >
              {" "}
              Email{" "}
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md text-sm shadow-sm p-2 focus:ring-2 focus:outline-none focus:ring-blue ring-1 ring-orange"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        {/* message */}
        <div className="mt-6">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-blue"
          >
            {" "}
            Your message{" "}
          </label>

          <textarea
            type="email"
            id="Email"
            name="email"
            rows={4}
            cols={50}
            className="mt-1 w-2/3 rounded-md text-sm shadow-sm focus:ring-2 focus:outline-none focus:ring-blue p-3 ring-1 ring-orange "
          />
        </div>

        <div className="mt-6">
          <button className="inline-block shrink-0 rounded-md border bg-blue px-12 py-3 text-sm font-medium text-white transition  hover:bg-orange focus:outline-none focus:ring active:text-blue">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
