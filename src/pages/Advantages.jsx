import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Advantages() {
  return (
    <div>
      <Navbar/>
      <div className="py-[80px]  bg-[url('https://res.cloudinary.com/dooi3sikb/image/upload/v1715379339/algaepurifier/hzm0wckj6ogfobbjvkpb.jpg')]">
        <div className="w-[45%] rounded-lg bg-[#FAFAFA] mx-auto">
          <div className="w-[800px] h-[535px] p-10">
            <h1 className="ml-[200px] font-bold text-2xl mb-4">Advantages of Algae Purifier</h1>
            <ul className="opacity-70 text-lg">
              <li className="my-4"><span className="font-bold">Natural Filtration:</span> Algae naturally filter pollutants and impurities from water, improving its quality.</li>
              <li className="my-4"><span className="font-bold">Oxygen Production:</span> Algae release oxygen through photosynthesis, enhancing the oxygen levels in aquatic environments.</li>
              <li className="my-4"><span className="font-bold">Aesthetic Appeal:</span> Algae can enhance the visual appeal of your home environment, adding a natural and serene touch.</li>
              <li className="my-4"><span className="font-bold">Low Maintenance:</span> Algae purifiers typically require minimal upkeep once established, reducing the need for frequent maintenance.</li>
              <li><span className="font-bold">Sustainable and Cost-Effective:</span> Algae are renewable and cost-effective, making algae home purifiers a sustainable option for water purification.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Advantages
