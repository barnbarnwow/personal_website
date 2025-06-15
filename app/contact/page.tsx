import Header from "../components/header";
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col p-8">
        <h2 className="text-lg mb-4">Contact Me</h2>
        <p className="mb-4 text-sm">
          Feel free to reach out via email or connect with me on social media.
        </p>
        <ul className="">
          <li>
            Email me at:{" "}
            <a className="font-blue-500" href="mailto: barneyjesse@gmail.com">
              barneyjesse@gmail.com
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
