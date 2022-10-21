export default function Hero({ heading, message }) {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed w-screen mb-12 bg-center bg-cover custom-image ">
      {/* overlay */}
      <div
        className="absolute h-screen w-screen top-0 left-0 bottom-0 right-0
                  bg-black/40 z-[2]"
      />
      <div className="p-5 sm:p-5 text-white z-[2] sm:ml-[-10rem] mt-[-10rem]">
        <h2 className="text-4xl sm:text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">book</button>
      </div>
    </div>
  );
}
