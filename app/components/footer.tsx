export default function Footer() {
  return (
    <footer className="text-white p-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <p className="text-xs">Built with Next.js and Tailwind CSS</p>
    </footer>
  );
}
