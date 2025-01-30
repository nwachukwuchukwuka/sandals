// import React from 'react'

// const Reviews = () => {
//     return (
//         <div>
//             <div className="relative grid grid-cols-3 gap-4 overflow-hidden">
//                 {reviews
//                     .slice(currentReviewIndex, currentReviewIndex + 3)
//                     .map((review, index) => (
//                         <Card key={index} className="shadow-lg">
//                             <CardContent>
//                                 <h3 className="text-lg font-bold">{review.title}</h3>
//                                 <p className="text-sm text-gray-500">
//                                     {review.location}
//                                 </p>
//                                 <p className="text-yellow-500">{"★".repeat(review.stars)}</p>
//                                 <p>{review.description}</p>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 <button
//                     className="absolute left-0 bg-blue-500 text-white p-2 rounded-full"
//                     onClick={handleReviewPrev}
//                 >
//                     ❮
//                 </button>
//                 <button
//                     className="absolute right-0 bg-blue-500 text-white p-2 rounded-full"
//                     onClick={handleReviewNext}
//                 >
//                     ❯
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Reviews

import React from 'react'

const Reviews = () => {
  return (
    <div>Reviews</div>
  )
}

export default Reviews