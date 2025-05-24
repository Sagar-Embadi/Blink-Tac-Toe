import React from 'react';
import { emojiCategories } from '../assets/emojis';

export default function EmojiCategoryModal({ onSelect }) {
  const handleSelect = (category) => {
    onSelect(category);
  };

  return (
    <div className="fixed inset-0 bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Choose your Emoji Category</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(emojiCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelect(cat)}
              className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
            >
              {cat} <br/> {emojiCategories[cat].slice(0,5).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
