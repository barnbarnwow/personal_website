import Carousel from "../components/carousel";

export default function Test() {
  const images = [
    "/carousel/carousel1.jpg",
    "/carousel/carousel2.jpg",
    "/carousel/carousel3.jpg",
    "/carousel/carousel4.jpg",
  ];
  return (
    <div className="flex flex-col justify-center items-center max-w-screen min-h-screen">
      {/* Test Page */}
      <div className="text-center text-green-500">
        <h1 className="text-2xl mb-4">Test Page</h1>
        <p>This is a test page to verify routing and component rendering.</p>
      </div>
      {/* Test Content */}
      <div className="mt-10">
        <div>
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
}
