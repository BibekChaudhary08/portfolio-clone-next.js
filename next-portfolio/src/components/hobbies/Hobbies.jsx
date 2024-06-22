import Link from "next/link";

const Hobbies = () => {
  return (
    <div className="bg-cover bg-center mt-24 bg-[url('https://arnicopanday.com/wp-content/themes/yootheme/cache/74/photographer-74cb05a2.webp')] h-[80vh]">
      <div className="px-6 pb-20 lg:px-8 flex items-center justify-center text-center h-full">
        <div className="max-w-2xl text-white flex items-center justify-center flex-col">
          <h1 className="font-bold text-2xl">
            I enjoy photography, hiking, mountain biking, driving curvy mountain roads, exploring new places, gardening, and playing with my kids.
          </h1>
          <div className="mt-10 flex items-center justify-center space-x-4 font-bold">
            <Link href="/" className="underline">Read More About Me</Link>
            <Link href="/" className="underline">CV</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies;
