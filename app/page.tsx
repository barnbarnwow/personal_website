export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="md:flex justify-center md:border-y">
        {/* Hero Image */}
        <div className="block my-2 md:w-2/5">
          <img className="object-cover aspect-square" src={"/tower.jpg"}></img>
        </div>
        {/* Hero Text */}
        <div className="md:m-0 md:w-1/2 flex flex-col items-center justify-center">
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
      <div className="justify-center mt-5">
        <h2 className="text-center w-full font-bold mb-4">
          This is Two Cols of Text
        </h2>
        <div className="md:flex justify-center">
          <div className="bg-red-500 m-1 p-4 md:flex-col">
            <h3 className="text-center font-bold">Subheader of Header 2</h3>
            <p>This is the filler text for the first subheader</p>
          </div>
          <div className="bg-red-500 m-1 p-4 md:flex-col">
            <h3 className="text-center font-bold">Subheader of Header 2</h3>
            <p>This is the filler text for the second subheader</p>
          </div>
        </div>
      </div>
    </main>
  );
}
