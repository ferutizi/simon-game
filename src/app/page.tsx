export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <article className="relative">
        <div className="grid grid-cols-2 rounded-full">
          <div className="w-60 h-60 rounded-ss-full border-4 button-shadow border-gray-950 bg-red-600 cursor-pointer opacity-90 active:saturate-150 active:opacity-100"></div>
          <div className="w-60 h-60 rounded-se-full border-4 button-shadow border-gray-950 bg-blue-600 cursor-pointer opacity-90 active:saturate-150 active:opacity-100"></div>
          <div className="w-60 h-60 rounded-es-full border-4 button-shadow border-gray-950 bg-yellow-400 cursor-pointer opacity-90 active:saturate-150 active:opacity-100"></div>
          <div className="w-60 h-60 rounded-ee-full border-4 button-shadow border-gray-950 bg-green-600 cursor-pointer opacity-90 active:saturate-150 active:opacity-100"></div>
        </div>
        <div className="absolute w-32 h-32 rounded-full border-8 border-gray-300 button-shadow_center bg-slate-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer active:saturate-150">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-950 font-bold text-2xl">START!</p>
        </div>
      </article>
    </main>
  );
}
