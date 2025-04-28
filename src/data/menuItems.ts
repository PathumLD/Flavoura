import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: 'Seared Scallops',
    description: 'Pan-seared sea scallops with cauliflower purée, crispy pancetta, and apple cider reduction',
    price: 24,
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'starters',
    featured: true
  },
  {
    id: 2,
    name: 'Beef Carpaccio',
    description: 'Thinly sliced prime beef with arugula, shaved Parmesan, capers, and truffle oil',
    price: 18,
    image: 'https://images.pexels.com/photos/8601410/pexels-photo-8601410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'starters'
  },
  {
    id: 3,
    name: 'Burrata & Heirloom Tomatoes',
    description: 'Creamy burrata cheese with heirloom tomatoes, basil pesto, aged balsamic, and grilled sourdough',
    price: 16,
    image: 'https://www.wellseasonedstudio.com/wp-content/uploads/2023/06/Light-summer-tomato-salad-with-burrata-cheese-truffle-oil-and-fresh-basil.jpg',
    category: 'starters'
  },
  {
    id: 4,
    name: 'French Onion Soup',
    description: 'Traditional onion soup with caramelized onions, rich beef broth, crouton, and melted Gruyère cheese',
    price: 14,
    image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'starters'
  },
  
  // Main Courses
  {
    id: 5,
    name: 'Wild Mushroom Risotto',
    description: 'Creamy Arborio rice with a medley of wild mushrooms, finished with aged Parmesan and truffle oil',
    price: 28,
    image: 'https://www.crowdedkitchen.com/wp-content/uploads/2020/09/wild-mushroom-risotto-11.jpg',
    category: 'main',
    featured: true
  },
  {
    id: 6,
    name: 'Herb-Crusted Rack of Lamb',
    description: 'Tender rack of lamb with a fragrant herb crust, served with roasted root vegetables and red wine jus',
    price: 42,
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'main',
    featured: true
  },
  {
    id: 7,
    name: 'Pan-Seared Salmon',
    description: 'Atlantic salmon with lemon-dill beurre blanc, asparagus, and fingerling potatoes',
    price: 34,
    image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'main'
  },
  {
    id: 8,
    name: 'Filet Mignon',
    description: '8oz prime beef tenderloin with pommes purée, seasonal vegetables, and cognac peppercorn sauce',
    price: 46,
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'main'
  },
  {
    id: 9,
    name: 'Duck Breast à l\'Orange',
    description: 'Seared duck breast with orange gastrique, wild rice pilaf, and glazed carrots',
    price: 38,
    image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'main'
  },
  
  // Desserts
  {
    id: 10,
    name: 'Chocolate Fondant',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream and raspberry coulis',
    price: 14,
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts',
    featured: true
  },
  {
    id: 11,
    name: 'Crème Brûlée',
    description: 'Classic vanilla bean custard with caramelized sugar crust and fresh berries',
    price: 12,
    image: 'https://www.allrecipes.com/thmb/y-S61IJkYyCUjTMGYqkaoJGwBrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-228515-simple-creme-brulee-dessert-dmfs-4x3-821623e7a86548eeb89370ac23d5f251.jpg',
    category: 'desserts'
  },
  {
    id: 12,
    name: 'Lemon Tart',
    description: 'Tangy lemon curd in a buttery shortcrust pastry, topped with Italian meringue',
    price: 13,
    image: 'https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'desserts'
  },
  
  // Beverages
  {
    id: 13,
    name: 'Artisanal Coffee',
    description: 'Locally roasted single-origin coffee, served French press or pour-over style',
    price: 6,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'beverages'
  },
  {
    id: 14,
    name: 'Signature Cocktail',
    description: 'House specialty featuring small-batch bourbon, amaretto, fresh lemon, and local honey',
    price: 16,
    image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'beverages'
  },
  {
    id: 15,
    name: 'Sparkling Elderflower',
    description: 'Refreshing non-alcoholic spritzer with elderflower cordial, fresh mint, and lime',
    price: 8,
    image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'beverages'
  }
];