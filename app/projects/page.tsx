export default function Projects() {
  return (
    <main className="min-h-screen">
      <div className="md:flex justify-center md:border-y">
        {/* Projects Image */}
        <div className="block my-2 md:w-2/5">
          <img
            className="object-cover aspect-square"
            src={"/carousel/carousel3.jpg"}
            alt="Projects"
          ></img>
        </div>
        {/* Projects Text */}
        <div className="md:m-0 md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-3xl font-bold">
            My Projects
          </h1>
          <p className="indent-8 md:text-lg md:px-20 mt-1 md:mt-1">
            I take pride in my work and am excited to share some of my recent
            projects with you. Each project is a testament to my commitment to
            quality and innovation.
          </p>
          <p className="indent-8 md:text-lg md:px-20 md:mt-1">
            From small business websites to large-scale applications, I have the
            expertise to bring your vision to life.
          </p>
          <p className="indent-8 md:text-lg md:px-20 md:mt-1">
            Explore my portfolio to see how I can help you achieve your goals.
          </p>
        </div>
      </div>
    </main>
  );
}
