import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Clock, Package } from 'lucide-react';

interface OrderSuccessProps {
  onClose: () => void;
  orderNumber: string;
}

export function OrderSuccess({ onClose, orderNumber }: OrderSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200"
        >
          <CheckCircle size={48} className="text-white" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Pedido Confirmado! 🎉</h1>
          <p className="text-gray-500 mb-6">Seu pedido foi realizado com sucesso</p>
          
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-4 mb-6">
            <p className="text-sm text-purple-600 font-medium">Número do pedido</p>
            <p className="text-2xl font-bold text-purple-700">{orderNumber}</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Clock size={20} className="text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Tempo estimado</p>
                <p className="font-semibold text-gray-800">15-25 minutos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <MapPin size={20} className="text-purple-600" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Entrega em</p>
                <p className="font-semibold text-gray-800">Pará de Minas, MG - Centro</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Package size={20} className="text-emerald-600" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold text-emerald-600">Preparando seu pedido</p>
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-purple-300 transition-all"
          >
            Voltar para o início
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
