import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div
          style={{
            backgroundImage: "url('/bamboo.jpg')",
            backgroundSize: "cover",
            height: "300px",
          }}
          className="bg-teal-900 bg-blend-multiply"
        >
          <h2 className="pt-9 text-shadow-sm/50 backdrop-contrast-70 size-full text-center">
            Welcome to My Portfolio
          </h2>
        </div>
        <div className="md:flex-1 m-4">
          <p className="text-lg md:text-lg">
            Thank you for visiting my portfolio.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
