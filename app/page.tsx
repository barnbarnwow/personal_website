import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-4 md:px-10">
        <div
          style={{
            backgroundImage: "url('/crowd.avif')",
            backgroundSize: "cover",
          }}
          className="bg-teal-700 bg-blend-multiply bg-cover bg-center bg-no-repeat w-full md:w-2/5 h-64 md:h-96 flex items-center justify-center rounded-lg my-4 md:my-8 shadow-sm/40"
        >
          <h2 className="text-4xl md:mb-2 text-center text-shadow-xs">
            Welcome to My Portfolio
          </h2>
        </div>
        <div className="m-8">
          <p className="text-center text-lg md:text-2xl">
            Thank you for visiting my portfolio. This webiste is intended to
            serve two purposes: one as a personal portfolio of webistes that
            I've developed over my short career as a web developer. And as a
            medium for self expression. I hope that you will forgive me if the
            appearance of the site or its contents are too 'artsy' or
            pretentious. The point of this site is precisely that, but without
            coming off as too much... of that.
          </p>
        </div>
      </main>
    </>
  );
}
