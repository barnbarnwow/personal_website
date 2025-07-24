export default function Footer() {
  return (
    <footer className="bottom-0 w-full py-4 text-center bg-gray-50 text-gray-700 border-t border-gray-200">
      <small>
        &copy; {new Date().getFullYear()} JPoint. All rights reserved.
      </small>
    </footer>
  );
}
