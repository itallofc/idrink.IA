import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Product, CartItem } from '../types';

interface ProductCardProps {
  product: Product;
  cartItem?: CartItem;
  onAdd: () => void;
  onRemove: () => void;
  index: number;
}

export function ProductCard({ product, cartItem, onAdd, onRemove, index }: ProductCardProps) {
  const quantity = cartItem?.quantity || 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
    >
      <div className="relative h-36 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.stock < 10 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Últimas unidades!
          </div>
        )}
      </div>
      
      <div className="p-3">
        <span className="text-xs text-purple-600 font-medium">{product.category}</span>
        <h3 className="font-bold text-gray-800 text-sm mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-1">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-purple-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          
          {quantity === 0 ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onAdd}
              className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-300 transition-all"
            >
              <Plus size={20} />
            </motion.button>
          ) : (
            <div className="flex items-center gap-2 bg-purple-100 rounded-xl px-1">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onRemove}
                className="w-8 h-8 bg-white text-purple-600 rounded-lg flex items-center justify-center shadow"
              >
                <Minus size={16} />
              </motion.button>
              <span className="font-bold text-purple-700 w-6 text-center">{quantity}</span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onAdd}
                className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg flex items-center justify-center shadow"
              >
                <Plus size={16} />
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
