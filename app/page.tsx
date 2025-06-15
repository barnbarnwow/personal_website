import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <Header />
      <p className="mt-auto text-xl">
        This is a simple website built using the Next.js framework.
      </p>
    </main>
  );
}
