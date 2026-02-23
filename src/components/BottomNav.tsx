import { motion } from 'framer-motion';
import { Home, Search, Heart, User, ShoppingBag } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

export function BottomNav({ activeTab, onTabChange, cartCount, onCartClick }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Início' },
    { id: 'search', icon: Search, label: 'Buscar' },
    { id: 'favorites', icon: Heart, label: 'Favoritos' },
    { id: 'profile', icon: User, label: 'Perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 z-40 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
              activeTab === tab.id
                ? 'text-purple-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <div className="relative">
              <tab.icon size={22} className={activeTab === tab.id ? 'fill-purple-100' : ''} />
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full"
                />
              )}
            </div>
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
        
        {/* Cart FAB */}
        {cartCount > 0 && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onCartClick}
            className="absolute -top-6 right-6 w-14 h-14 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-300"
          >
            <ShoppingBag size={22} className="text-white" />
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </motion.button>
        )}
      </div>
    </nav>
  );
}
