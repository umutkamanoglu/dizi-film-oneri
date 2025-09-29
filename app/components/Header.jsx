import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white h-20 flex items-center justify-between p-2 px-5 border border-x-0 border-t-0 border-black/15">
      <h3 className="font-medium text-lg">Dizi Film Önerileri</h3>
      <form>
        <div className="relative">
          <input
            type="text"
            placeholder="Ara..."
            className="border border-black/15 rounded-full px-8 w-lg py-2 focus:outline-none"
          />
          <FaSearch
            className="ml-2 absolute top-1/2 transform -translate-y-1/2 left-1"
            fill="#7f7f7f"
          />
        </div>
      </form>
      <span>theme switch</span>
    </header>
  );
}
