import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center  items-center h-screen bg-white">
      <main className="flex flex-col items-center">
        <h1 className="text-2xl font-bold font-light text-black">charlotte.tomaszewska@gmail.com</h1>
        <Link href="https://www.instagram.com/charlottetomas/" className="text-black text-2xl py-12 font-light">@charlottetomas</Link>
        <h1 className="text-2xl font-bold font-light text-black">+48 692 209 198</h1>
        <h1 className="text-2xl font-bold font-light text-black">+33 749 483 878</h1>
      </main>
    </div>
  );
}