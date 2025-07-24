import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="md:flex justify-center">
          <div className="inline-block md:w-2/5">
            <img
              className="object-cover aspect-square"
              src={"/tower.jpg"}
            ></img>
          </div>
          {/* Hero Text */}
          <div className="m-4 md:m-0 inline-block md:w-1/2">
            <h1 className="text-2xl text-center md:text-3xl font-bold md:my-3">
              Welcome to this space
            </h1>
            <p className="indent-8 md:text-lg md:px-20 md:mt-4">
              I'm a web developer from Goodman, MO, focused on creating clear
              and user-friendly websites. I specialize in building online
              platforms that effectively showcase a business's unique offerings,
              transforming concepts into engaging digital experiences with
              excellent design and reliable features.
            </p>
            <p className="indent-8 md:text-lg md:px-20 md:mt-4">
              My design ethos is predicated on a commitment to designing
              websites that are not only visually arresting and professional,
              but are also optimized for efficient loading. My goal is to
              communicate sophistication and a sincere respect for aesthetic
              merit.
            </p>
            <p className="indent-8 md:text-lg md:px-20 md:mt-4">
              Let’s create a website for you that looks exceptional, feels
              effortless to use, and quietly earns your customers’ trust from
              the very first click.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
