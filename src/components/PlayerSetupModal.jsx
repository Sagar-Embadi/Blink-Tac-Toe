// import React, { useState } from "react";
// import EmojiCategoryModal from "./Emoji";

// export default function PlayerSetupModal({ onStart, player1,player2,setPlayer1,setPlayer2 }) {
//   const [openSelector, setOpenSelector] = useState(null);

//   const handleStart = () => {
//     if (player1?.name && player2?.name && player1?.category && player2?.category) {
//       onStart(true);
//     } else {
//       alert("Please enter names and select categories for both players.");
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40 backdrop-blur-sm">
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-lg">
//           <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
//             Setup Your Game
//           </h2>

//           {/* Player 1 */}
//           <div className="mb-6">
//             <label className="block mb-1 font-medium">Player 1 Name</label>
//             <input
//               type="text"
//               value={player1?.name || ''}
//               onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
//               className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
//               placeholder="e.g. Alice"
//             />
//             <button
//               onClick={() => setOpenSelector("player1")}
//               className="mt-3 w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
//             >
//               {player1?.category
//                 ? `Change: ${player1.category}`
//                 : "Choose Emoji Category"}
//             </button>
//           </div>

//           {/* Player 2 */}
//           <div className="mb-6">
//             <label className="block mb-1 font-medium">Player 2 Name</label>
//             <input
//               type="text"
//               value={player2?.name || ''}
//               onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
//               className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
//               placeholder="e.g. Bob"
//             />
//             <button
//               onClick={() => setOpenSelector("player2")}
//               className="mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
//             >
//               {player2?.category
//                 ? `Change: ${player2.category}`
//                 : "Choose Emoji Category"}
//             </button>
//           </div>

//           <button
//             onClick={handleStart}
//             className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:from-indigo-600 hover:to-pink-600 transition-all"
//           >
//             🎮 Start Game
//           </button>
//         </div>
//       </div>

//       <EmojiCategoryModal
//         open={openSelector === "player1"}
//         onClose={() => setOpenSelector(null)}
//         onSelect={(cat) => setPlayer1({ ...player1, category: cat })}
//         exclude={player2?.category}
//       />

//       <EmojiCategoryModal
//         open={openSelector === "player2"}
//         onClose={() => setOpenSelector(null)}
//         onSelect={(cat) => setPlayer2({ ...player2, category: cat })}
//         exclude={player1?.category}
//       />
//     </>
//   );
// }

import React, { useState } from "react";
import EmojiCategoryModal from "./Emoji";

export default function PlayerSetupModal({
  onStart,
  player1,
  player2,
  setPlayer1,
  setPlayer2,
}) {
  const [openSelector, setOpenSelector] = useState(null);

  const handleStart = () => {
    if (
      player1?.name &&
      player1?.category &&
      player2?.name &&
      player2?.category
    ) {
      onStart({ player1, player2 }); // Pass full player objects
    } else {
      alert("Please enter names and select categories for both players.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400">
            Setup Your Game
          </h2>

          {/* Player 1 */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">Player 1 Name</label>
            <input
              type="text"
              value={player1?.name || ""}
              onChange={(e) =>
                setPlayer1({ ...player1, name: e.target.value })
              }
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
              placeholder="e.g. Alice"
            />
            <button
              onClick={() => setOpenSelector("player1")}
              className="mt-3 w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
            >
              {player1?.category
                ? `Change: ${player1.category}`
                : "Choose Emoji Category"}
            </button>
          </div>

          {/* Player 2 */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">Player 2 Name</label>
            <input
              type="text"
              value={player2?.name || ""}
              onChange={(e) =>
                setPlayer2({ ...player2, name: e.target.value })
              }
              className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
              placeholder="e.g. Bob"
            />
            <button
              onClick={() => setOpenSelector("player2")}
              className="mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              {player2?.category
                ? `Change: ${player2.category}`
                : "Choose Emoji Category"}
            </button>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:from-indigo-600 hover:to-pink-600 transition-all"
          >
            🎮 Start Game
          </button>
        </div>
      </div>

      {/* Emoji selector modals */}
      <EmojiCategoryModal
        open={openSelector === "player1"}
        onClose={() => setOpenSelector(null)}
        onSelect={(cat) => setPlayer1({ ...player1, category: cat })}
        exclude={player2?.category}
      />
      <EmojiCategoryModal
        open={openSelector === "player2"}
        onClose={() => setOpenSelector(null)}
        onSelect={(cat) => setPlayer2({ ...player2, category: cat })}
        exclude={player1?.category}
      />
    </>
  );
}
