import { motion } from 'framer-motion';
import { ArrowLeft, Star, Clock, MapPin, Truck, Heart } from 'lucide-react';
import { Store, Product, CartItem } from '../types';
import { ProductCard } from './ProductCard';

interface StorePageProps {
  store: Store;
  products: Product[];
  cart: CartItem[];
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
}

export function StorePage({ store, products, cart, onBack, onAddToCart, onRemoveFromCart }: StorePageProps) {
  const storeProducts = products.filter((p) => p.storeId === store.id);
  const categoriesInStore = [...new Set(storeProducts.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-56">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowLeft size={20} className="text-gray-800" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
          >
            <Heart size={20} className="text-red-500" />
          </motion.button>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl font-bold text-white mb-2">{store.name}</h1>
          <div className="flex flex-wrap items-center gap-3 text-white/90 text-sm">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur px-2 py-1 rounded-full">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{store.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{store.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{store.distance}</span>
            </div>
            {store.freeDelivery && (
              <div className="flex items-center gap-1 bg-emerald-500 px-2 py-1 rounded-full">
                <Truck size={14} />
                <span className="font-medium">Grátis</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Address */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <MapPin size={20} className="text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Endereço</p>
            <p className="font-medium text-gray-800">{store.address}</p>
          </div>
        </div>

        {/* Products by Category */}
        {categoriesInStore.map((category) => (
          <div key={category} className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full" />
              {category}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {storeProducts
                .filter((p) => p.category === category)
                .map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    cartItem={cart.find((item) => item.product.id === product.id)}
                    onAdd={() => onAddToCart(product)}
                    onRemove={() => onRemoveFromCart(product.id)}
                    index={index}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
