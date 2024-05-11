import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
function BrainFog() {
  return (
    <div>
      <Navbar />
      <div className="text-[#656565]  bg-[#FAFAFA] w-[70%] mx-auto py-20">
        <div>
          <h1 className="text-4xl font-bold mb-4">Science of Indoor Air Pollution</h1>
          <h2 className="text-2xl font-bold mb-4">
            The aerium unleashes the potential of algae to combat indoor air
            pollution indoors.{" "}
          </h2>
          <p className="mb-4 opacity-90">
            Indoor air quality is comprised of many components. Many traditional
            air purifiers only focus on particulate matter (PM2.5).
            Unfortunately, they fail to remove carbon dioxide (CO2) and volatile
            organic compounds (VOCs). These pollutants accumulate indoors and
            according to the EPA, these levels of indoor pollutants can be 5
            times, and in some cases 100 times, worse indoors than outdoor
            levels.{" "}
          </p>
          <p className="mb-4 opacity-90">Below are a few types of indoor air pollution causes.</p>
          <h2 className="text-2xl font-bold mb-4">Carbon Dioxide (CO2)</h2>
          <p className="mb-4 opacity-90">
            Indoor CO2 levels can be 2-3 times higher (&gt;1,500 ppm) than what
            is naturally occurring outside (420 ppm). This results in headaches,
            reduced mental clarity, long term respiratory problems, and other
            physiological complications.{" "}
          </p>
          <h2 className="text-2xl font-bold mb-4">Volatile Organic Compounds (VOCs)</h2>
          <p className="mb-4 opacity-90">
            VOCs can be found in everyday household products and cleaning
            supplies. These accumulate in poorly ventilated areas and can cause
            skin and respiratory irritation.
          </p>
          <h2 className="text-2xl font-bold mb-4">Particulate matter (PM2.5)</h2>
          <p className="mb-4 opacity-90">
            Particles like dust, mold and bacteria can travel into our lungs and
            airways, causing irritation. Components less than 10 microns are of
            particular concern, because they can be inhaled.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BrainFog;
