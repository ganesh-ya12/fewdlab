import { useState } from 'react';
import { ShoppingCart, User, Heart, Search, Menu, X, Star, Send, ChevronLeft, ChevronRight } from 'lucide-react';

// Main App Component
export default function ECommerceWebsite() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [email, setEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    setSubmitMessage('Thank you for your feedback!');
    setFeedbackText('');
    setTimeout(() => setSubmitMessage(''), 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ShopEasy</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
              <a href="#products" className="text-gray-800 hover:text-blue-600 font-medium">Products</a>
              <a href="#deals" className="text-gray-800 hover:text-blue-600 font-medium">Deals</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            
            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600">
                <Search size={20} />
              </button>
              <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600">
                <User size={20} />
              </button>
              <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600">
                <Heart size={20} />
              </button>
              <button 
                onClick={() => setCartOpen(!cartOpen)} 
                className="relative flex items-center text-gray-700 hover:text-blue-600"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-2 px-4 shadow-inner">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-800 hover:text-blue-600 py-2">Home</a>
              <a href="#products" className="text-gray-800 hover:text-blue-600 py-2">Products</a>
              <a href="#deals" className="text-gray-800 hover:text-blue-600 py-2">Deals</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 py-2">About</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 py-2">Contact</a>
              <div className="flex space-x-6 py-2">
                <button className="text-gray-700 hover:text-blue-600">
                  <Search size={20} />
                </button>
                <button className="text-gray-700 hover:text-blue-600">
                  <User size={20} />
                </button>
                <button className="text-gray-700 hover:text-blue-600">
                  <Heart size={20} />
                </button>
              </div>
            </nav>
          </div>
        )}

        {/* Shopping Cart Sidebar */}
        {cartOpen && (
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart (3)</h2>
              <button onClick={() => setCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Cart Items */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex border-b pb-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-md mr-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-medium">Product Name {item}</h3>
                    <p className="text-gray-500 text-sm">1 × $99.99</p>
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">-</button>
                      <span className="mx-2">1</span>
                      <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">+</button>
                      <button className="ml-auto text-red-500 text-sm">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>$299.97</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$299.97</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition">
                Checkout
              </button>
              <button 
                onClick={() => setCartOpen(false)}
                className="w-full border border-gray-300 py-3 rounded-md font-medium hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">Find Your Perfect Product with Us</h1>
                <p className="text-lg md:text-xl opacity-90">Discover the latest trends and high-quality products for your lifestyle.</p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href="#products" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-center">
                    Shop Now
                  </a>
                  <a href="#deals" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition-colors text-center">
                    View Deals
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <div className="w-full h-64 md:h-80 bg-blue-500 rounded-lg shadow-xl flex items-center justify-center">
                  <img src="photo1.jpg"  />
                  {/* <span className="text-white text-opacity-30 text-2xl">Featured Product Image</span> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty'].map((category) => (
                <div key={category} className="group cursor-pointer">
                  <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <span className="text-gray-500">{category} Icon</span>
                  </div>
                  <h3 className="font-medium text-center mt-3">{category}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section id="products" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
            
            {/* Product Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              {['all', 'featured', 'bestsellers', 'new', 'sale'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`mx-2 my-1 px-4 py-2 rounded-full capitalize ${
                    activeTab === tab 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative">
                    <div className="h-48 bg-gray-200"></div>
                    <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm">
                      <Heart size={18} className="text-gray-500 hover:text-red-500" />
                    </button>
                    {index % 3 === 0 && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < 4 ? "text-yellow-400" : "text-gray-300"} fill={i < 4 ? "currentColor" : "none"} />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">(42)</span>
                    </div>
                    <h3 className="font-medium">Product Name {index + 1}</h3>
                    <p className="text-sm text-gray-500 mb-2">Brief description of the product</p>
                    <div className="flex justify-between items-center">
                      <div>
                        {index % 3 === 0 ? (
                          <div className="flex items-center">
                            <span className="text-red-600 font-medium">$79.99</span>
                            <span className="text-gray-400 text-sm line-through ml-2">$99.99</span>
                          </div>
                        ) : (
                          <span className="font-medium">$99.99</span>
                        )}
                      </div>
                      <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition">
                Load More Products
              </button>
            </div>
          </div>
        </section>
        
        {/* Deals Section */}
        <section id="deals" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Hot Deals</h2>
            
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div 
                  key={index} 
                  className="flex-none w-full sm:w-96 bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-1/3 h-40 bg-gray-200 rounded-lg flex-shrink-0"></div>
                  <div className="md:ml-4 mt-4 md:mt-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">50% OFF</span>
                      <div className="flex items-center space-x-1 text-xs">
                        <span className="bg-gray-200 px-2 py-1 rounded-full">2d</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full">14h</span>
                        <span className="bg-gray-200 px-2 py-1 rounded-full">33m</span>
                      </div>
                    </div>
                    <h3 className="font-medium mt-2">Special Deal Product {index + 1}</h3>
                    <p className="text-sm text-gray-500 mt-1">Limited time offer, grab it now!</p>
                    <div className="flex items-center mt-2">
                      <span className="text-red-600 font-medium">$49.99</span>
                      <span className="text-gray-400 text-sm line-through ml-2">$99.99</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700">
                      Shop Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-6">
              <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-50">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Emma Johnson",
                  title: "Verified Buyer",
                  text: "The quality of the products exceeded my expectations. Fast shipping and great customer service!"
                },
                {
                  name: "Michael Chen",
                  title: "Verified Buyer",
                  text: "I've been shopping here for years and have never been disappointed. Their selection is amazing and prices are competitive."
                },
                {
                  name: "Sarah Williams",
                  title: "Verified Buyer",
                  text: "The shopping experience was seamless from browsing to checkout. Will definitely be a returning customer!"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div className="ml-3">
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Feedback Section */}
        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">We Value Your Feedback</h2>
              <p className="text-gray-600 mb-8">Help us improve our products and services by sharing your thoughts with us.</p>
              
              {submitMessage ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  {submitMessage}
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="4"
                      placeholder="Share your experience or suggestions..."
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleSubmitFeedback}
                      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition flex items-center"
                    >
                      <Send size={18} className="mr-2" />
                      Submit Feedback
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">ShopEasy</h3>
              <p className="text-gray-400 mb-4">Your one-stop destination for quality products at competitive prices.</p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      {social[0].toUpperCase()}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Products', 'About Us', 'Contact', 'FAQs'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-medium mb-4">Customer Service</h3>
              <ul className="space-y-2">
                {['Shipping Policy', 'Returns & Refunds', 'Order Tracking', 'Payment Methods', 'Terms & Conditions'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-4">Get updates on new products and special offers.</p>
              <div className="flex">
                <input
                  type="email"
                  className="flex-1 p-2 text-gray-900 rounded-l-md focus:outline-none"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 ShopEasy. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}