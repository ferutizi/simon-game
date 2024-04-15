export default function Home() {
  const lightButtonStyle = "w-60 h-60 border-4 button-shadow border-gray-950 cursor-pointer opacity-90 active:saturate-150 active:opacity-100 transition-all ease-out duration-50"
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <article className="relative">
        <div className="grid grid-cols-2 rounded-full">
          <div className={`${lightButtonStyle} rounded-ss-full bg-red-600`}></div>
          <div className={`${lightButtonStyle} rounded-se-full bg-blue-600`}></div>
          <div className={`${lightButtonStyle} rounded-es-full bg-yellow-400`}></div>
          <div className={`${lightButtonStyle} rounded-ee-full bg-green-600`}></div>
        </div>
        <div className="absolute w-32 h-32 rounded-full border-8 active:border-[10px] border-gray-300 active:border-gray-100 button-shadow_center bg-slate-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer active:saturate-150 transition-all ease-in-out duration-300">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-950 font-bold text-2xl">START!</p>
        </div>
      </article>
    </main>
  );
}
