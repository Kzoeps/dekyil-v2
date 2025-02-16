import Image from "next/image";
import DroneImage from "@/public/drone.webp"

export default function Home() {
  return (
     
    <main className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={DroneImage}
          alt="Dekyl Guest House"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="mb-4 text-6xl font-bold">Enjoy Bumthang</h1>
        <p className="text-lg uppercase tracking-wider">Live with a scenic view of the Bumthang valley</p>
      </div>
    </main>  );
}
