// import { useState } from "react";
// import RatingStars from "../shared/RatingStars";

// const RatingForm = ({ onSubmit }: { onSubmit?: (rating: number) => void }) => {
//   const [rating, setRating] = useState(0);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit?.(rating);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex items-center gap-4 my-4">
//       <RatingStars value={rating} onChange={setRating} />
//       <button
//         type="submit"
//         className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
//       >
//         Submit Rating
//       </button>
//     </form>
//   );
// };

// export default RatingForm;
