export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="md:flex justify-center md:border-y">
        {/* Contact Image */}
        <div className="block my-2 md:w-2/5">
          <img
            className="object-cover aspect-square"
            src={"/carousel/bust.jpg"}
            alt="Photo by Jon Tyson on Unsplash"
          ></img>
        </div>
        {/* Contact Text */}
        <div className="mx-8 md:m-0 md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-3xl font-bold">
            Contact Me
          </h1>
          <p className="indent-8 md:text-lg md:px-20 mt-1 md:mt-1">
            If you have any questions or would like to discuss a project, feel
            free to reach out. I am always open to new opportunities and
            collaborations.
          </p>
          <p className="indent-8 md:text-lg md:px-20 md:mt-1">
            You can visit my social media profiles or send me an email to get in
            touch.
          </p>
          {/* Social Media Links */}
          <div>
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/barnbarnwow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
              >
                <img
                  src="github-brands-solid-full.svg"
                  alt="Github Link"
                  className="w-10 h-10 bg-red-500 rounded-sm"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/baranpas-jesse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
              >
                <img
                  src="square-linkedin-brands-solid-full.svg"
                  alt="Github Link"
                  className="w-10 h-10 bg-red-500 rounded-sm"
                />
              </a>
              <a
                href="sendto: barneyjesse@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
              >
                <img
                  src="at-solid-full.svg"
                  alt="Github Link"
                  className="w-10 h-10 bg-red-500 rounded-sm"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
