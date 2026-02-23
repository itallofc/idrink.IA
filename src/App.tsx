import { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { PromoBanner } from './components/PromoBanner';
import { StoreCard } from './components/StoreCard';
import { StorePage } from './components/StorePage';
import { Cart } from './components/Cart';
import { BottomNav } from './components/BottomNav';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MerchantDashboard } from './components/MerchantDashboard';
import { OrderSuccess } from './components/OrderSuccess';
import { stores, products } from './data/stores';
import { Store, Product, CartItem, UserType } from './types';

export function App() {
  // User state
  const [userType, setUserType] = useState<UserType>(null);
  
  // App state
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('home');
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Filter stores based on search and category
  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || 
        store.categories.some(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Cart functions
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prev.filter((item) => item.product.id !== productId);
    });
  };

  const updateCartQuantity = (productId: string, delta: number) => {
    if (delta > 0) {
      const product = products.find((p) => p.id === productId);
      if (product) addToCart(product);
    } else {
      removeFromCart(productId);
    }
  };

  const handleCheckout = () => {
    const newOrderNumber = `#${Math.floor(Math.random() * 9000) + 1000}`;
    setOrderNumber(newOrderNumber);
    setShowOrderSuccess(true);
    setCart([]);
    setIsCartOpen(false);
  };

  const handleOrderSuccessClose = () => {
    setShowOrderSuccess(false);
    setSelectedStore(null);
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Welcome Screen
  if (!userType) {
    return <WelcomeScreen onSelectUserType={setUserType} />;
  }

  // Merchant Dashboard
  if (userType === 'merchant') {
    return <MerchantDashboard onLogout={() => setUserType(null)} />;
  }

  // Customer App
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AnimatePresence>
        {showOrderSuccess && (
          <OrderSuccess orderNumber={orderNumber} onClose={handleOrderSuccessClose} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedStore ? (
          <StorePage
            key="store"
            store={selectedStore}
            products={products}
            cart={cart}
            onBack={() => setSelectedStore(null)}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ) : (
          <div key="home">
            <Header
              cartCount={cartItemCount}
              onCartClick={() => setIsCartOpen(true)}
              onProfileClick={() => setActiveTab('profile')}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {/* Promo Banner */}
            <PromoBanner />

            {/* Categories */}
            <Categories
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

            {/* Section Title */}
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold text-gray-800">
                {selectedCategory === 'all' ? 'Lojas Próximas' : `Lojas de ${selectedCategory}`}
              </h2>
              <p className="text-sm text-gray-500">
                {filteredStores.length} estabelecimentos encontrados
              </p>
            </div>

            {/* Stores Grid */}
            <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredStores.map((store, index) => (
                <StoreCard
                  key={store.id}
                  store={store}
                  index={index}
                  onClick={() => store.isOpen && setSelectedStore(store)}
                />
              ))}
            </div>

            {filteredStores.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-gray-400">
                <span className="text-6xl mb-4">🔍</span>
                <p className="text-lg font-medium">Nenhuma loja encontrada</p>
                <p className="text-sm">Tente buscar por outro termo</p>
              </div>
            )}
          </div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        store={selectedStore}
        onUpdateQuantity={updateCartQuantity}
        onCheckout={handleCheckout}
      />

      {/* Bottom Navigation */}
      {!selectedStore && (
        <BottomNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          cartCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
        />
      )}
    </div>
  );
}
