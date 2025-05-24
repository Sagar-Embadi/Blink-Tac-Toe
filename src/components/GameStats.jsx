export function GameStats( {playerWinStreak,computerWinStreak,playerEmojis,computerEmojis}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 w-full max-w-md text-center border border-2">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Game Stats
      </h3>
      <div className="text-lg font-semibold text-center my-4">
        🏆 Player - Computer:{" "}
        <span className="font-bold text-blue-900">
          {playerWinStreak + " - " + computerWinStreak}
        </span>
      </div>

      <div className="flex gap-2 items-center mb-2 text-base font-medium">
        <span className="text-blue-600 dark:text-blue-400 px-3">
          Player Moves:
        </span>
        <span className="text-gray-800 dark:text-white tracking-wide">
          {playerEmojis?.join(" ")}
        </span>
      </div>

      <div className="flex gap-2 items-center mb-4 text-base font-medium">
        <span className="text-red-600 dark:text-red-400">Computer Moves:</span>
        <span className="text-gray-800 dark:text-white tracking-wide">
          {computerEmojis?.join(" ")}
        </span>
      </div>

      <div className="flex justify-center items-center text-sm font-medium text-gray-700 dark:text-gray-300">
        <span className="mr-2">
          <strong className="text-blue-600">Your Last Move:</strong>{" "}
          {playerEmojis?.at(-1) || "—"}
        </span>
        <span className="mx-2">|</span>
        <span>
          <strong className="text-red-600">Computer Last Move:</strong>{" "}
          {computerEmojis?.at(-1) || "—"}
        </span>
      </div>
    </div>
  );
}
