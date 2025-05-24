import { emojiCategories } from '../assets/emojis';

export default function EmojiCategoryModal({ open, onClose, onSelect, exclude }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">Select Emoji Category</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(emojiCategories)
            .filter(([cat]) => cat !== exclude)
            .map(([category, emojis]) => (
              <button
                key={category}
                onClick={() => {
                  onSelect(category);
                  onClose();
                }}
                className="p-3 border rounded-lg text-left bg-white dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-gray-600 transition-all"
              >
                <div className="font-semibold capitalize mb-1">{category}</div>
                <div className="text-xl">{emojis.slice(0, 4).join(' ')}</div>
              </button>
            ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}