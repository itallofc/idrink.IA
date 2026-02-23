import { MapPin, Search, ShoppingCart, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onProfileClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function Header({ cartCount, onCartClick, onProfileClick, searchTerm, onSearchChange }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Top Row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🍺</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">iDrink</h1>
              <p className="text-xs text-purple-200">Delivery de Bebidas</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={onProfileClick}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
            >
              <User size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 hover:scale-110 transition-transform shadow-lg"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
        
        {/* Location */}
        <div className="flex items-center gap-2 text-white/90 mb-3">
          <MapPin size={16} className="text-yellow-300" />
          <span className="text-sm font-medium">Pará de Minas, MG</span>
          <span className="text-purple-200 text-xs">• Centro</span>
        </div>
        
        {/* Search Bar */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar bebidas, lojas..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
          />
        </div>
      </div>
    </motion.header>
  );
}
