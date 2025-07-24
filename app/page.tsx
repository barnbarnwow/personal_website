import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="m-4 md:px-10 min-h-screen">
        <h1 className="text-2xl text-center md:text-3xl font-bold md:my-3">
          Welcome to this space
        </h1>
        <span className="bg-red-500"></span>
        <img
          className="md:float-start object-cover w-96 aspect-square my-2 md:m-4"
          src={"/tower.jpg"}
        ></img>
        <p className="indent-8 md:text-lg md:px-20 md:mt-4">
          A well-crafted website is no longer optional; it is the first and most
          lasting impression your business leaves in the digital world. For
          discerning customers, design communicates credibility before a single
          word is read. A visually polished, intuitively structured site signals
          that you value their time and understand their expectations. In
          today’s crowded market, trust is built in seconds — and a beautiful,
          well-composed website is one of the most powerful tools to earn it.
        </p>
        <p className="indent-8 md:text-lg md:px-20">
          Equally important is restraint. True sophistication lies in clarity,
          not complexity. A site that loads swiftly, feels purposeful, and
          guides visitors seamlessly reflects a brand that respects efficiency
          and commands confidence. Visitors should never feel lost or
          overwhelmed; instead, every interaction should feel deliberate and
          effortless. In an age where attention is fleeting, an elegant,
          streamlined digital presence is more than good design — it is a
          statement of quality and a quiet promise that your business operates
          with the same precision it displays.
        </p>
        <p className="indent-8 md:text-lg md:px-20">
          Let’s create a website for you that looks exceptional, feels
          effortless to use, and quietly earns your customers’ trust from the
          very first click.
        </p>
      </main>
      <Footer />
    </>
  );
}
