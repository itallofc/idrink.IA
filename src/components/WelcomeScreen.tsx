import { motion } from 'framer-motion';
import { ShoppingBag, Store, Truck, Clock, Star, Zap } from 'lucide-react';
import { UserType } from '../types';

interface WelcomeScreenProps {
  onSelectUserType: (type: UserType) => void;
}

export function WelcomeScreen({ onSelectUserType }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-28 h-28 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-6"
        >
          <span className="text-6xl">🍺</span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-black text-white mb-2 tracking-tight"
        >
          iDrink
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-purple-200 text-lg mb-2 font-medium"
        >
          Delivery de Bebidas
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-8"
        >
          <span className="text-yellow-300">📍</span>
          <span className="text-white font-medium">Pará de Minas, MG</span>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-3 w-full max-w-sm mb-12"
        >
          {[
            { icon: Truck, label: 'Frete Grátis' },
            { icon: Clock, label: 'Entrega Rápida' },
            { icon: Star, label: 'Melhores Lojas' },
          ].map((feature, i) => (
            <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-3 text-center">
              <feature.icon className="text-white mx-auto mb-1" size={24} />
              <p className="text-white/90 text-xs font-medium">{feature.label}</p>
            </div>
          ))}
        </motion.div>

        {/* User Type Selection */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-sm space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectUserType('customer')}
            className="w-full bg-white text-purple-700 py-5 px-6 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <ShoppingBag size={24} className="text-purple-600" />
            </div>
            <div className="text-left flex-1">
              <span className="block">Quero Comprar</span>
              <span className="text-sm font-normal text-purple-500">Encontre bebidas perto de você</span>
            </div>
            <Zap className="text-yellow-500" size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectUserType('merchant')}
            className="w-full bg-white/10 backdrop-blur border-2 border-white/30 text-white py-5 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
          >
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Store size={24} className="text-white" />
            </div>
            <div className="text-left flex-1">
              <span className="block">Sou Comerciante</span>
              <span className="text-sm font-normal text-white/70">Cadastre sua loja e venda</span>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center py-6"
      >
        <p className="text-purple-200 text-sm">
          🚀 O delivery mais rápido de Pará de Minas
        </p>
      </motion.div>
    </div>
  );
}
