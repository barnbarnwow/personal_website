import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-4 py-4 text-center bg-gray-50 text-gray-700 border-t border-gray-200">
      <small>
        &copy; {new Date().getFullYear()} JPoint. All rights reserved.{" "}
        <Link href="test">test button</Link>
      </small>
    </footer>
  );
}
