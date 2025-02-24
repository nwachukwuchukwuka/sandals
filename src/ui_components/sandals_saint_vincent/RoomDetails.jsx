import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { roomDetails } from "./constants/roomDetails";
import { useNavbar } from "./context/NavbarContext";

const RoomDetails = () => {
  const { roomId } = useParams();
  const { setIsNavbarVisible } = useNavbar();

  useEffect(() => {
    // Hide navbar when component mounts
    setIsNavbarVisible(false);

    // Show navbar when component unmounts
    return () => setIsNavbarVisible(true);
  }, []);

  // Find the specific room from roomDetails array
  const room = roomDetails.find((room) => room.id === roomId);

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="max-w-[85%] mx-auto px-4 py-8 pt-[100px]">
      {/* Room Images */}
      {/* <div className="mb-8">
        {room.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Room view ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div> */}
      <div className="mb-8">
        {room.images.length > 0 && (
          <img
            src={room.images[0].src}
            alt="Room view 1"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Room Details */}
      <div className="space-y-2 flex gap-[40px]">
        <div className="max-w-[70%]">
          <div>
            <p className=" text-sm capitalize">
              sandals saint vincent, argyle, saint vincent
            </p>
            <p className="font-semibold text-[24px]">{room.title}</p>
            {/* <p className="text-gray-600">{room.description}</p> */}
          </div>

          <div className="my-4">
            <p className="text-gray-600">{room.details}</p>
          </div>
          <div className="mt-2">
            <p className="">
              <span className="font-semibold">Room Views:</span> Pool, Tropical
              Garden
            </p>
            <p className="">
              <span className="font-semibold">Category Code:</span> LX
            </p>
            <p className="">
              <span className="font-semibold">Room Bedding:</span> 1 King Bed
            </p>
          </div>
        </div>

        <div>
          <div className="flex gap-4">
            <div>
              {room.icons.map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-2"
                >
                  {Icon}
                </div>
              ))}
            </div>
            <div>
              {room.iconText.map((text, index) => (
                <p key={index} className="h-12 text-gray-600">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { roomDetails } from "./constants/roomDetails";
// import { useNavbar } from "./context/NavbarContext";

// const RoomDetails = () => {
//   const { roomId } = useParams();
//   const { setIsNavbarVisible } = useNavbar();

//   useEffect(() => {
//     // Hide navbar when component mounts
//     setIsNavbarVisible(false);

//     // Show navbar when component unmounts
//     return () => setIsNavbarVisible(true);
//   }, []);

//   // Find the specific room from roomDetails array
//   const room = roomDetails.find((room) => room.id === roomId);

//   if (!room) {
//     return <div>Room not found</div>;
//   }

//   return (
//     <div className="max-w-[85%] mx-auto px-4 py-8 pt-[100px]">
//       {/* Room Images */}
//       {/* <div className="mb-8">
//         {room.images.map((image, index) => (
//           <img
//             key={index}
//             src={image.src}
//             alt={`Room view ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         ))}
//       </div> */}
//       <div className="mb-8">
//         {room.images.length > 0 && (
//           <img
//             src={room.images[0].src}
//             alt="Room view 1"
//             className="w-full h-full object-cover"
//           />
//         )}
//       </div>

//       {/* Room Details */}
//       <div className="space-y-2 flex">
//         <div className="max-w-[70%]">
//           <div>
//             <p className=" text-sm capitalize">
//               sandals saint vincent, argyle, saint vincent
//             </p>
//             <p className="font-semibold text-[24px]">{room.title}</p>
//           </div>

//           <div>
//             <p className="text-gray-600">{room.details}</p>
//           </div>
//         </div>
//         <div>
//           <div className="">
//             {room.icons.map((Icon, index) => (
//               <div
//                 key={index}
//                 className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
//               >
//                 {Icon}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomDetails;
