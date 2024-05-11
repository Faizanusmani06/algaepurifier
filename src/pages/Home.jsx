
import Navbar from "./../components/Navbar"
import Footer from "./../components/Footer"
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="w-full overflow-hidden relative">
      <Navbar/>
      <img src="https://res.cloudinary.com/dooi3sikb/image/upload/v1715343810/algaepurifier/w8wo3wdx0euwrp1vibtb.png" />
      <div className="bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715345295/algaepurifier/tspz1fxppbje8o9gcral.png')] w-full h-full">
        <div className="w-screen h-[550px]">
        <Link to="https://blynk.cloud/dashboard/312901/global/devices/2347653/organization/312901/devices/1103608/dashboard"><button type="button" className="text-white bg-green-600 hover:bg-green-500 font-medium text-lg px-16 mt-2 py-4 text-center ml-[840px]">Get Started</button></Link>
        </div>
      </div>
      <div className="bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715345014/algaepurifier/xqyteoxgmpgivqacaufx.png')] w-full h-full">
        <div className="w-screen h-[550px]">
        <Link to="/advantages"><button type="button" className="text-white bg-gray-600 hover:bg-gray-500 font-medium text-lg px-14 py-2 text-center ml-[840px] mt-[460px]">Learn More</button></Link>
        </div>
      </div>
      <div className="bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715348415/algaepurifier/rdjfgaomh4dhqoxf1ype.png')] w-full h-full">
        <div className="w-screen h-[550px]">
        </div>
      </div>
      <div className="bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715345014/algaepurifier/a4p1v4jlagghriowmxcz.png')] w-full h-full">
        <div className="w-screen mt-10 h-[350px]">
        </div>
      </div>
      <div className="bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715349651/algaepurifier/k9sf2tg9wfwfy2ttqtsk.png')] w-full h-full">
        <div className="h-[800px] ">
        <Link to="/brainfog"><button type="button" className="text-white bg-green-600 hover:bg-green-500 font-medium text-lg px-12 py-4 text-center ml-[20px] mt-[480px]">THINK CLEARER LONGER</button></Link>
        </div>
      </div>
      
      <div className="mb-10 bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715345015/algaepurifier/ovdczppojqgwkmv2ymif.png')] w-full h-full">
        <div className="h-[840px]">
  
        </div>
      </div>
      <div className="mb-10 bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715345016/algaepurifier/qptkbggcmkil9p0hnp05.png')] w-full h-full">
        <div className="h-[300px]">
  
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home
