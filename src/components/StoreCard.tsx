import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Truck } from 'lucide-react';
import { Store } from '../types';

interface StoreCardProps {
  store: Store;
  onClick: () => void;
  index: number;
}

export function StoreCard({ store, onClick, index }: StoreCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 ${
        !store.isOpen ? 'opacity-60' : ''
      }`}
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover"
        />
        {!store.isOpen && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">FECHADO</span>
          </div>
        )}
        {store.freeDelivery && store.isOpen && (
          <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Truck size={12} />
            GRÁTIS
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 shadow">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-bold text-gray-800">{store.rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1">{store.name}</h3>
        
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-purple-500" />
            <span>{store.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-purple-500" />
            <span>{store.distance}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {store.categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
