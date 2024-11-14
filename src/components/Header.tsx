import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-2xl font-bold text-gray-900">Sara</Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-6"
        >
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/work" className="text-gray-600 hover:text-gray-900">Work</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </motion.div>
      </nav>
    </header>
  );
}