export function GameStatsMultiplayer({
  player1,
  player2,
  player1Streak,
  player2Streak,
  emojis
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 w-full max-w-md text-center border border-2">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Game Stats
      </h3>

      <div className="text-lg font-semibold text-center my-4">
        🏆 {player1?.name} - {player2?.name}:{" "}
        <span className="font-bold text-blue-900">
          {player1Streak + " - " + player2Streak}
        </span>
      </div>

      <div className="flex gap-2 items-center mb-2 text-base font-medium">
        <span className="text-blue-600 dark:text-blue-400 px-3">
          {player1?.name} Moves:
        </span>
        <span className="text-gray-800 dark:text-white tracking-wide">
          {emojis.player1.join(" ") || "—"}
        </span>
      </div>

      <div className="flex gap-2 items-center mb-4 text-base font-medium">
        <span className="text-red-600 dark:text-red-400">{player2?.name} Moves:</span>
        <span className="text-gray-800 dark:text-white tracking-wide">
          {emojis.player2.join(" ") || "—"}
        </span>
      </div>

      <div className="flex justify-center items-center text-sm font-medium text-gray-700 dark:text-gray-300">
        <span className="mr-2">
          <strong className="text-blue-600">Last Move {player1?.name}:</strong>{" "}
          {emojis.player1.at(-1)|| "—"}
        </span>
        <span className="mx-2">|</span>
        <span>
          <strong className="text-red-600">Last Move {player2?.name}:</strong>{" "}
          {emojis.player2.at(-1)|| "—"}
        </span>
      </div>
    </div>
  );
}
