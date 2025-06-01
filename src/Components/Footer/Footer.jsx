import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#e0e7ff] border-t">
            <footer className="max-w-7xl mx-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-bold text-xl">Gadget <span className="text-[#8b5cf6]">Heaven</span></span>
            </div>
            <p className="text-sm text-gray-900 max-w-xs">
              Your one-stop shop for the latest smartphones, laptops, smartwatches, and tech accessories at competitive prices.
            </p>
          </div>

          {/* Shop Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Shop Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/smartphones" className="text-gray-900 hover:text-foreground transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link to="/category/laptops" className="text-gray-900 hover:text-foreground transition-colors">
                  Laptops & Tablets
                </Link>
              </li>
              <li>
                <Link to="/category/smartwatches" className="text-gray-900 hover:text-foreground transition-colors">
                  Smartwatches
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-900 hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-900 hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-900 hover:text-foreground transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-900 hover:text-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-900 hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-900 hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-900 hover:text-foreground transition-colors">
                  Tech Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-900 hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-gray-900 hover:text-foreground transition-colors">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <p className="text-sm text-gray-900">© {new Date().getFullYear()} Gadget Heaven. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy" className="text-gray-900 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-900 hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/warranty" className="text-gray-900 hover:text-foreground transition-colors">
                Warranty Info
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              to="https://twitter.com/gadgetheaven"
              className="text-gray-900 hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              to="https://instagram.com/gadgetheaven"
              className="text-gray-900 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              to="https://facebook.com/gadgetheaven"
              className="text-gray-900 hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              to="mailto:support@gadgetheaven.com"
              className="text-gray-900 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}