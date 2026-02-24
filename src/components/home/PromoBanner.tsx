import { motion } from 'framer-motion';
import { Zap, Gift, Truck } from 'lucide-react';

export function PromoBanner() {
  const promos = [
    {
      icon: <Truck className="text-white" size={24} />,
      title: 'FRETE GRÁTIS',
      description: 'Em todos os pedidos',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Zap className="text-white" size={24} />,
      title: 'ENTREGA RÁPIDA',
      description: 'Em até 30 minutos',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Gift className="text-white" size={24} />,
      title: 'PRIMEIRA COMPRA',
      description: '10% OFF com iDRINK10',
      gradient: 'from-violet-500 to-purple-600'
    }
  ];

  return (
    <div className="px-4 py-2 overflow-x-auto scrollbar-hide">
      <div className="flex gap-3">
        {promos.map((promo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r ${promo.gradient} min-w-[200px] shadow-lg`}
          >
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              {promo.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">{promo.title}</h3>
              <p className="text-white/80 text-xs">{promo.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
