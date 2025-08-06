import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-7 w-7 text-indigo-400" />
              <span className="text-2xl font-bold text-white">Raghav Electrical</span>
            </div>
            <p className="text-gray-400">Your trusted partner for all electrical needs. Quality service, guaranteed.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Electrical Installation</a></li>
              <li><a href="#" className="hover:text-white">Wiring</a></li>
              <li><a href="#" className="hover:text-white">Home Automation</a></li>
              <li><a href="#" className="hover:text-white">Solar Consultation</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Electric Ave,<br/>Pimpri-Chinchwad, MH</li>
              <li className="text-gray-400">contact@raghav.com</li>
              <li className="text-gray-400">+91-987654321</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Raghav Electrical. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;