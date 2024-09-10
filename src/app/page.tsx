import SmoothScroll from "./smooth-scroll";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="bg-white w-full h-[600px]"></div>
      <SmoothScroll />
      <div className="bg-white w-full h-[600px]"></div>
    </div>
  );
}
