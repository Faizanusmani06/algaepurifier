import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex flex-row p-10 justify-between bg-green-400 sticky top-0 z-50">
      <div className="flex gap-2">
        <img src="https://res.cloudinary.com/dooi3sikb/image/upload/v1715343410/algaepurifier/m4e4e23sus3mxsuwctu8.png" className="h-[50px] w-[50px]"/>
        <h1 className="text-3xl font-bold tracking-tighter mt-2 opacity-80"><a href="/">AlgaePurifier</a></h1>
      </div>
      <div className="flex gap-5 text-gray-900 m-2 text-2xl">
        <Link to="/"><h2 className="hover:text-orange-400 cursor-grab font-semibold opacity-80">Home</h2></Link>
        <Link to="/advantages"><h2 className="hover:text-orange-400 cursor-grab font-semibold opacity-80">About</h2></Link>
       <a href="#footer"> <h2 className="hover:text-orange-400 cursor-grab font-semibold opacity-80">Contact</h2></a>
      </div>
    </div>
  );
}

export default Navbar;
