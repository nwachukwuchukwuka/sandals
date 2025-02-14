import award from "../assets/award.webp";
import award_logo_1 from "../assets/award_logo_1.svg";
import award_logo_2 from "../assets/award_logo_2.png";
import award_logo_3 from "../assets/award_logo_3.svg";
import award_logo_4 from "../assets/award_logo_4.avif";
import award_logo_5 from "../assets/award_logo_5.avif";


const awardsData = [
  {
    logo: award_logo_1,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  },
  {
    logo: award_logo_2,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  },
  {
    logo: award_logo_3,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  }, 
  {
    logo: award_logo_4,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  },
  {
    logo: award_logo_5,
    background: award,
    title: ["BEST INCLUDED AMENITY", "READERS' CHOICE", "SCUBA DIVING"],
    subtitle: "ISLANDS ALL-INCLUSIVE AWARDS 2020"
  } 
];

const Awards = () => {
  return (
    <div className="py-[100px] flex gap-10]">
      {awardsData.map((awardItem, index) => (
        <div key={index} className="w-[400px]">
          <div className="flex justify-center items-end -mb-4 mr-6 ">
            <img src={awardItem.logo} alt="award_logo_1" className="w-[120px] h-[120px]" />
          </div>
          <div
            style={{
              backgroundImage: `url(${awardItem.background})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "400px",
            }}
          >
            <div className="text-center p-[20px] mr-6">
              {awardItem.title.map((line, i) => (
                <h1 key={i}>{line}</h1>
              ))}
              <p className="text-[11px]">{awardItem.subtitle}</p>                                                                    
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Awards;


