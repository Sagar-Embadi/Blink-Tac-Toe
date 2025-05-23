import React from 'react';

export default function Cell({ value, onClick }) {
  return (
    <button className="cell rounded" onClick={onClick}>
      {value}
    </button>
  );
}

// export default function Cell({ value, onClick }) {
//   return (
//     <button
//       className="w-24 h-24 bg-gray-200 dark:bg-gray-700 text-3xl rounded-md shadow text-center m-2"
//       onClick={onClick}
//     >
//       {value}
//     </button>
//   );
// }