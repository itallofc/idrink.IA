import { Store, Product } from '../types';

export const stores: Store[] = [
  {
    id: '1',
    name: 'Adega do Zé',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    rating: 4.8,
    deliveryTime: '15-25 min',
    distance: '0.8 km',
    freeDelivery: true,
    isOpen: true,
    address: 'Rua São Paulo, 123 - Centro',
    categories: ['Cervejas', 'Vinhos', 'Destilados']
  },
  {
    id: '2',
    name: 'Distribuidora Gelada',
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400',
    rating: 4.6,
    deliveryTime: '20-30 min',
    distance: '1.2 km',
    freeDelivery: true,
    isOpen: true,
    address: 'Av. Getúlio Vargas, 456 - São Geraldo',
    categories: ['Cervejas', 'Refrigerantes', 'Águas']
  },
  {
    id: '3',
    name: 'Wine & Beer House',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=400',
    rating: 4.9,
    deliveryTime: '25-35 min',
    distance: '1.8 km',
    freeDelivery: true,
    isOpen: true,
    address: 'Rua Minas Gerais, 789 - Centro',
    categories: ['Vinhos', 'Cervejas Artesanais', 'Espumantes']
  },
  {
    id: '4',
    name: 'Depósito Mineiro',
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400',
    rating: 4.5,
    deliveryTime: '10-20 min',
    distance: '0.5 km',
    freeDelivery: true,
    isOpen: true,
    address: 'Praça Dom Modesto, 321 - Centro',
    categories: ['Cervejas', 'Destilados', 'Energéticos']
  },
  {
    id: '5',
    name: 'Bebidas Premium',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400',
    rating: 4.7,
    deliveryTime: '30-40 min',
    distance: '2.5 km',
    freeDelivery: false,
    isOpen: false,
    address: 'Rua Rio de Janeiro, 654 - Senador Valadares',
    categories: ['Whisky', 'Vodka', 'Gin']
  }
];

export const products: Product[] = [
  // Adega do Zé
  { id: 'p1', name: 'Heineken 600ml', description: 'Cerveja puro malte gelada', price: 12.99, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400', category: 'Cervejas', storeId: '1', stock: 50 },
  { id: 'p2', name: 'Brahma Duplo Malte 350ml', description: 'Cerveja duplo malte lata', price: 4.99, image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400', category: 'Cervejas', storeId: '1', stock: 100 },
  { id: 'p3', name: 'Vinho Tinto Suave', description: 'Vinho brasileiro 750ml', price: 29.90, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', category: 'Vinhos', storeId: '1', stock: 20 },
  { id: 'p4', name: 'Absolut Vodka 1L', description: 'Vodka premium sueca', price: 89.90, image: 'https://images.unsplash.com/photo-1613063005611-6e3ccc65c6c6?w=400', category: 'Destilados', storeId: '1', stock: 15 },
  
  // Distribuidora Gelada
  { id: 'p5', name: 'Skol Puro Malte 473ml', description: 'Cerveja latão gelada', price: 5.49, image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400', category: 'Cervejas', storeId: '2', stock: 200 },
  { id: 'p6', name: 'Coca-Cola 2L', description: 'Refrigerante gelado', price: 9.99, image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400', category: 'Refrigerantes', storeId: '2', stock: 80 },
  { id: 'p7', name: 'Água Mineral 1.5L', description: 'Água mineral sem gás', price: 3.50, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400', category: 'Águas', storeId: '2', stock: 150 },
  { id: 'p8', name: 'Antarctica Original 600ml', description: 'Cerveja pilsen tradicional', price: 10.99, image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400', category: 'Cervejas', storeId: '2', stock: 60 },
  
  // Wine & Beer House
  { id: 'p9', name: 'IPA Artesanal 500ml', description: 'Cerveja artesanal premium', price: 18.90, image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=400', category: 'Cervejas Artesanais', storeId: '3', stock: 30 },
  { id: 'p10', name: 'Vinho Chileno Cabernet', description: 'Vinho tinto seco 750ml', price: 49.90, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400', category: 'Vinhos', storeId: '3', stock: 25 },
  { id: 'p11', name: 'Espumante Brut', description: 'Espumante brasileiro 750ml', price: 39.90, image: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=400', category: 'Espumantes', storeId: '3', stock: 18 },
  { id: 'p12', name: 'Weiss Artesanal 500ml', description: 'Cerveja de trigo premium', price: 16.90, image: 'https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=400', category: 'Cervejas Artesanais', storeId: '3', stock: 35 },
  
  // Depósito Mineiro
  { id: 'p13', name: 'Budweiser 350ml Pack 6', description: 'Pack com 6 latas', price: 29.90, image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400', category: 'Cervejas', storeId: '4', stock: 40 },
  { id: 'p14', name: 'Red Bull 250ml', description: 'Energético original', price: 9.90, image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=400', category: 'Energéticos', storeId: '4', stock: 100 },
  { id: 'p15', name: 'Cachaça Artesanal 700ml', description: 'Cachaça mineira premium', price: 45.00, image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400', category: 'Destilados', storeId: '4', stock: 12 },
  { id: 'p16', name: 'Monster Energy 473ml', description: 'Energético sabor original', price: 11.90, image: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400', category: 'Energéticos', storeId: '4', stock: 75 },
  
  // Bebidas Premium
  { id: 'p17', name: 'Johnnie Walker Black', description: 'Whisky escocês 750ml', price: 159.90, image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400', category: 'Whisky', storeId: '5', stock: 8 },
  { id: 'p18', name: 'Tanqueray Gin 750ml', description: 'Gin premium inglês', price: 119.90, image: 'https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?w=400', category: 'Gin', storeId: '5', stock: 10 },
  { id: 'p19', name: 'Grey Goose Vodka 750ml', description: 'Vodka francesa premium', price: 189.90, image: 'https://images.unsplash.com/photo-1613063005611-6e3ccc65c6c6?w=400', category: 'Vodka', storeId: '5', stock: 6 },
  { id: 'p20', name: 'Jack Daniels 1L', description: 'Tennessee Whiskey', price: 139.90, image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400', category: 'Whisky', storeId: '5', stock: 12 },
];

export const categories = [
  { id: 'all', name: 'Todos', icon: '🍺' },
  { id: 'cervejas', name: 'Cervejas', icon: '🍻' },
  { id: 'vinhos', name: 'Vinhos', icon: '🍷' },
  { id: 'destilados', name: 'Destilados', icon: '🥃' },
  { id: 'refrigerantes', name: 'Refris', icon: '🥤' },
  { id: 'energeticos', name: 'Energéticos', icon: '⚡' },
];
