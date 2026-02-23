import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, Plus, Edit2, Trash2, BarChart3, ShoppingBag, 
  DollarSign, TrendingUp, X, Save, Camera, Store, Bell,
  Settings, LogOut, Search, Filter, Eye
} from 'lucide-react';
import { Product } from '../types';

interface MerchantDashboardProps {
  onLogout: () => void;
}

export function MerchantDashboard({ onLogout }: MerchantDashboardProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'orders'>('dashboard');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [merchantProducts, setMerchantProducts] = useState<Product[]>([
    { id: 'm1', name: 'Cerveja Premium 600ml', description: 'Cerveja especial gelada', price: 14.99, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400', category: 'Cervejas', storeId: 'merchant', stock: 45 },
    { id: 'm2', name: 'Whisky Gold 750ml', description: 'Whisky envelhecido 12 anos', price: 129.90, image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400', category: 'Destilados', storeId: 'merchant', stock: 12 },
    { id: 'm3', name: 'Vinho Reserva', description: 'Vinho tinto seco chileno', price: 59.90, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', category: 'Vinhos', storeId: 'merchant', stock: 28 },
  ]);
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Cervejas',
    stock: ''
  });

  const [orders] = useState([
    { id: '#1234', customer: 'João Silva', items: 3, total: 89.90, status: 'preparing', time: '10 min atrás' },
    { id: '#1233', customer: 'Maria Santos', items: 5, total: 156.50, status: 'delivering', time: '25 min atrás' },
    { id: '#1232', customer: 'Pedro Costa', items: 2, total: 45.00, status: 'delivered', time: '1h atrás' },
    { id: '#1231', customer: 'Ana Oliveira', items: 8, total: 234.80, status: 'delivered', time: '2h atrás' },
  ]);

  const stats = {
    totalSales: 12580.90,
    ordersToday: 47,
    productsActive: merchantProducts.length,
    growth: 23.5
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const product: Product = {
        id: `m${Date.now()}`,
        name: newProduct.name,
        description: newProduct.description,
        price: parseFloat(newProduct.price),
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
        category: newProduct.category,
        storeId: 'merchant',
        stock: parseInt(newProduct.stock) || 0
      };
      setMerchantProducts([...merchantProducts, product]);
      setShowAddProduct(false);
      setNewProduct({ name: '', description: '', price: '', category: 'Cervejas', stock: '' });
    }
  };

  const handleDeleteProduct = (id: string) => {
    setMerchantProducts(merchantProducts.filter(p => p.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparing': return 'bg-yellow-100 text-yellow-700';
      case 'delivering': return 'bg-blue-100 text-blue-700';
      case 'delivered': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'preparing': return 'Preparando';
      case 'delivering': return 'Em entrega';
      case 'delivered': return 'Entregue';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Store size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Painel do Comerciante</h1>
                <p className="text-purple-200 text-sm">Minha Distribuidora</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-purple-600" />
              </button>
              <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                <Settings size={20} />
              </button>
              <button 
                onClick={onLogout}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <div className="flex gap-1 bg-white/10 rounded-t-2xl p-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'products', label: 'Produtos', icon: Package },
              { id: 'orders', label: 'Pedidos', icon: ShoppingBag },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Vendas Hoje', value: `R$ ${stats.totalSales.toFixed(2).replace('.', ',')}`, icon: DollarSign, color: 'from-emerald-500 to-teal-600' },
                  { label: 'Pedidos Hoje', value: stats.ordersToday, icon: ShoppingBag, color: 'from-blue-500 to-indigo-600' },
                  { label: 'Produtos Ativos', value: stats.productsActive, icon: Package, color: 'from-violet-500 to-purple-600' },
                  { label: 'Crescimento', value: `+${stats.growth}%`, icon: TrendingUp, color: 'from-orange-500 to-red-600' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-4 shadow-lg"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <ShoppingBag size={20} className="text-purple-600" />
                  Pedidos Recentes
                </h2>
                <div className="space-y-3">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <ShoppingBag size={18} className="text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{order.id}</p>
                          <p className="text-sm text-gray-500">{order.customer} • {order.items} itens</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-800">R$ {order.total.toFixed(2).replace('.', ',')}</p>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'products' && (
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1 max-w-md relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border-0 shadow-md focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddProduct(true)}
                  className="ml-4 flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-5 py-3 rounded-xl font-medium shadow-lg hover:shadow-purple-300 transition-all"
                >
                  <Plus size={20} />
                  <span className="hidden sm:inline">Novo Produto</span>
                </motion.button>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {merchantProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="h-40 relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <button className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow hover:bg-gray-50">
                          <Edit2 size={14} className="text-gray-600" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow hover:bg-red-50"
                        >
                          <Trash2 size={14} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-purple-600 font-medium">{product.category}</span>
                      <h3 className="font-bold text-gray-800 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-purple-600">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          product.stock > 20 ? 'bg-green-100 text-green-700' : 
                          product.stock > 5 ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-red-100 text-red-700'
                        }`}>
                          {product.stock} em estoque
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'orders' && (
            <motion.div
              key="orders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Todos os Pedidos</h2>
                <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow">
                  <Filter size={18} className="text-gray-500" />
                  <span className="text-sm font-medium">Filtrar</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="divide-y">
                  {orders.map((order, i) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            order.status === 'preparing' ? 'bg-yellow-100' :
                            order.status === 'delivering' ? 'bg-blue-100' :
                            'bg-green-100'
                          }`}>
                            <ShoppingBag size={20} className={
                              order.status === 'preparing' ? 'text-yellow-600' :
                              order.status === 'delivering' ? 'text-blue-600' :
                              'text-green-600'
                            } />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-gray-800">{order.id}</p>
                              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                                {getStatusText(order.status)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500">{order.customer} • {order.items} itens • {order.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="font-bold text-lg text-gray-800">R$ {order.total.toFixed(2).replace('.', ',')}</p>
                          <button className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center hover:bg-purple-200 transition-colors">
                            <Eye size={18} className="text-purple-600" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Add Product Modal */}
      <AnimatePresence>
        {showAddProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddProduct(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-white rounded-3xl z-50 overflow-hidden shadow-2xl"
            >
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Plus className="text-white" size={22} />
                  </div>
                  <h2 className="text-white font-bold text-lg">Novo Produto</h2>
                </div>
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div className="aspect-video bg-gray-100 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:border-purple-500 transition-colors">
                  <Camera size={32} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Clique para adicionar foto</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Produto</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="Ex: Cerveja Premium 600ml"
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    placeholder="Descreva seu produto..."
                    rows={2}
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preço (R$)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      placeholder="0,00"
                      className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estoque</label>
                    <input
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                      placeholder="0"
                      className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  >
                    <option value="Cervejas">Cervejas</option>
                    <option value="Vinhos">Vinhos</option>
                    <option value="Destilados">Destilados</option>
                    <option value="Refrigerantes">Refrigerantes</option>
                    <option value="Energéticos">Energéticos</option>
                    <option value="Águas">Águas</option>
                  </select>
                </div>
              </div>

              <div className="p-6 border-t bg-gray-50">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddProduct}
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-300 transition-all"
                >
                  <Save size={20} />
                  Salvar Produto
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
