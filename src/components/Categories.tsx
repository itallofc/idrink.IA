import { motion } from 'framer-motion';
import { categories } from '../data/stores';

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <div className="py-4 px-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-3">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectCategory(category.id)}
            className={`flex flex-col items-center gap-2 px-4 py-3 rounded-2xl min-w-[80px] transition-all ${
              selectedCategory === category.id
                ? 'bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-300'
                : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span className="text-xs font-semibold whitespace-nowrap">{category.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
