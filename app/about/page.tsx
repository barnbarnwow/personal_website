export default function About() {
  return (
    <main className="min-h-screen">
      <div className="md:flex justify-center md:border-y">
        {/* About Image */}
        <div className="block my-2 md:w-2/5">
          <img
            className="object-cover aspect-square"
            src={"/carousel/ribbons.jpg"}
            alt="Photo by Jamie Street on Unsplash"
          ></img>
        </div>
        {/* About Text */}
        <div className="mx-8 md:m-0 md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-3xl font-bold">
            About Me
          </h1>
          <p className="indent-8 md:text-lg md:px-20 mt-1 md:mt-1">
            I am a dedicated professional committed to delivering high-quality
            web solutions. My focus is on creating user-friendly and visually
            appealing websites that meet the unique needs of my clients.
            clients.
          </p>
          <p className="indent-8 md:text-lg md:px-20 md:mt-1">
            Although I am fairly new to the industry, I pride myself on my
            ability to transform ideas into reality, ensuring that every project
            I undertake is executed with precision and care.
          </p>
          <p className="indent-8 md:text-lg md:px-20 md:mt-1">
            I hope you can join me on this journey as I continue to learn about
            the boundaries of web development.
          </p>
        </div>
      </div>
    </main>
  );
}
