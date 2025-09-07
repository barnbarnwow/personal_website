export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="md:flex justify-center md:border-y">
        {/* Hero Image */}
        <div className="block my-2 md:w-2/5">
          <img
            className="object-cover aspect-square"
            src={"carousel/chairs.jpg"}
            alt="Photo by Joost Crop on Unsplash"
          ></img>
        </div>
        {/* Hero Text */}
        <div className="mx-8 md:m-0 md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-3xl font-bold">
            Welcome to this space
          </h1>
          <p className="indent-8 md:text-lg md:px-20 mt-1 md:mt-1">
            I&apos;m a web developer from Goodman, MO, focused on creating clear
            and user-friendly websites. I specialize in building online
            platforms that effectively showcase a business&apos;s unique
            offerings, transforming concepts into engaging digital experiences
            with excellent design and reliable features.
          </p>
          <p className="indent-8 md:text-lg md:px-20 md:mt-1">
            My design ethos is predicated on a commitment to designing websites
            that are not only visually arresting and professional, but are also
            optimized for efficient loading. My goal is to communicate
            sophistication and a sincere respect for aesthetic merit.
          </p>
          <p className="indent-8 md:text-lg md:px-20 md:mt-1">
            Let&apos;s create a website for you that looks exceptional, feels
            effortless to use, and quietly earns your customers&apos; trust from
            the very first click.
          </p>
        </div>
      </div>
      {/* Two Columns of Text */}
      <div className="justify-center mt-5">
        <h2 className="text-center w-full bg-gray-700 border-y-1">Overview</h2>
        <div className="md:flex justify-center">
          <div className="bg-red-500 my-1 md:mx-2 p-4">
            <h3 className="text-center font-bold">Key Skills</h3>
            <div className="flex justify-around">
              <ul className="text-center">
                <li className="border-1 my-1 p-1">React</li>
                <li className="border-1 my-1 p-1">Next.js</li>
                <li className="border-1 my-1 p-1">Digital Marketing</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-500 my-1 md:mx-2 p-4">
            <h3 className="text-center font-bold">Professional History</h3>
            <ul className="text-center">
              <li className="border-1 my-1 p-1">
                Missouri Southern State University; BSBA of Marketing
              </li>
              <li className="border-1 my-1 p-1">
                Crowder College; AAS of Business Administration
              </li>
              <li className="border-1 my-1 p-1">
                Cornell University; Financial Management Certificate
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
