import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Truck, CreditCard, MapPin, Clock } from 'lucide-react';
import { CartItem, Store } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  store: Store | null;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onCheckout: () => void;
}

export function Cart({ isOpen, onClose, items, store, onUpdateQuantity, onCheckout }: CartProps) {
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const delivery = 0; // Frete grátis!
  const total = subtotal + delivery;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="text-white" size={22} />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">Seu Carrinho</h2>
                    <p className="text-purple-200 text-sm">{items.length} itens</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                >
                  <X size={22} />
                </button>
              </div>
              {store && (
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin size={14} />
                  <span>{store.name}</span>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <ShoppingBag size={64} className="mb-4 opacity-50" />
                  <p className="text-lg font-medium">Carrinho vazio</p>
                  <p className="text-sm">Adicione produtos para continuar</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 rounded-2xl p-3 flex gap-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">
                          {item.product.name}
                        </h3>
                        <p className="text-purple-600 font-bold">
                          R$ {item.product.price.toFixed(2).replace('.', ',')}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow text-purple-600"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-bold text-gray-800 w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow text-white"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">
                          R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t bg-gray-50 p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Truck size={16} />
                    <span>Entrega</span>
                  </div>
                  <span className="font-bold text-emerald-600">GRÁTIS</span>
                </div>
                <div className="flex items-center justify-between text-lg border-t pt-3">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="font-bold text-purple-600">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-purple-50 p-3 rounded-xl">
                  <Clock size={16} className="text-purple-500" />
                  <span>Entrega estimada: <strong>15-25 min</strong></span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={onCheckout}
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-300 transition-all"
                >
                  <CreditCard size={20} />
                  Finalizar Pedido
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
