import React, { useState, useEffect } from 'react';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Star, ArrowRight, Menu, X, Play, Award, Users, Heart } from 'lucide-react';

const PhotographyWebsite = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // High-quality photography images from Unsplash
  const heroImages = [
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  const portfolioImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wedding',
      title: 'Romantic Beach Wedding',
      description: 'Captured the magical moments of Sarah and Mike\'s beachside ceremony'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf51f54a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'portrait',
      title: 'Executive Portrait',
      description: 'Professional headshot for corporate branding'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wedding',
      title: 'Garden Ceremony',
      description: 'Intimate garden wedding with natural lighting'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'portrait',
      title: 'Creative Portrait',
      description: 'Artistic portrait with dramatic lighting'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'landscape',
      title: 'Mountain Vista',
      description: 'Golden hour landscape in the Rocky Mountains'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wedding',
      title: 'First Dance',
      description: 'Capturing the first dance moment'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'landscape',
      title: 'Coastal Sunset',
      description: 'Breathtaking sunset over the Pacific Ocean'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'portrait',
      title: 'Natural Light Portrait',
      description: 'Soft natural lighting portrait session'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wedding',
      title: 'Wedding Details',
      description: 'Beautiful wedding details and decorations'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      text: 'Alex captured our wedding day perfectly! Every photo tells our story beautifully. We couldn\'t be happier with the results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b601?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechStart',
      text: 'Professional, creative, and delivered exceptional corporate headshots. Alex understands how to capture the essence of our brand.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Model',
      text: 'Working with Alex was amazing! The photos came out stunning and really captured my personality. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const filteredImages = selectedCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Alex Morgan</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Reviews</a>
              <a href="#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
                <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</a>
                <a href="#services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
                <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Reviews</a>
                <a href="#contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors text-center">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Capturing Life's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Beautiful Moments
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Award-winning photographer specializing in weddings, portraits, and landscapes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                View Portfolio <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                <Play className="h-5 w-5" /> Watch Reel
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600">Happy Couples</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-2">
                <Camera className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
              <div className="text-gray-600">Photos Taken</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi, I'm Alex Morgan, a passionate photographer with over 8 years of experience 
                capturing life's most precious moments. Based in California, I specialize in 
                wedding photography, corporate portraits, and breathtaking landscape photography.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My approach combines technical expertise with an artistic eye, ensuring every 
                photo tells a unique story. I believe in creating a comfortable, fun environment 
                that brings out the natural beauty and genuine emotions in every shot.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Wedding Photography</li>
                    <li>• Portrait Sessions</li>
                    <li>• Corporate Events</li>
                    <li>• Landscape Photography</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Equipment</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Canon EOS R5</li>
                    <li>• Sony A7R IV</li>
                    <li>• Professional Lighting</li>
                    <li>• Drone Photography</li>
                  </ul>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
                Download Portfolio
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80"
                alt="Alex Morgan - Photographer"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-600">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my latest work across various photography styles and genres
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'wedding', 'portrait', 'landscape'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional photography services tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wedding Photography</h3>
              <p className="text-gray-600 mb-6">
                Capture every magical moment of your special day with our comprehensive 
                wedding photography packages.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Full day coverage</li>
                <li>• Engagement session included</li>
                <li>• Online gallery</li>
                <li>• High-resolution images</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">From $2,500</span>
                <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Portrait Sessions</h3>
              <p className="text-gray-600 mb-6">
                Professional headshots and personal portraits that showcase your 
                personality and professional brand.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 1-2 hour session</li>
                <li>• Multiple outfit changes</li>
                <li>• Professional retouching</li>
                <li>• Print release included</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">From $350</span>
                <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <Camera className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Events</h3>
              <p className="text-gray-600 mb-6">
                Document your corporate events, conferences, and business functions 
                with professional photography.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Event coverage</li>
                <li>• Same-day delivery available</li>
                <li>• Commercial license</li>
                <li>• Team photography</li>
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">From $800</span>
                <button className="text-indigo-600 hover:text-indigo-700 font-semibold">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to capture your special moments? Get in touch for a consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">alex@alexmorganphoto.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Los Angeles, California</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/alexmorganphoto" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://facebook.com/alexmorganphotography" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com/alexmorganphoto" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>Wedding</option>
                    <option>Portrait Session</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-8 w-8 text-indigo-400" />
                <span className="text-2xl font-bold">Alex Morgan</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Professional photographer capturing life's beautiful moments with 
                creativity, passion, and technical excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wedding Photography</li>
                <li>Portrait Sessions</li>
                <li>Corporate Events</li>
                <li>Landscape Photography</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Alex Morgan Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl max-h-full">
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyWebsite;