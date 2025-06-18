// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '../ui/navigation-menu';
import { cn } from '../../lib/utils';
import { productDetails } from '../../data/productDetails';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="flex justify-between items-center py-6 px-8 md:px-30 sticky top-0 z-100 bg-black text-white shadow-lg"
      aria-labelledby="header"
    >
      <div className="flex items-center space-x-4">
        <Link to="/" aria-label="Homepage">
          <img src="/logo.svg" alt="Swift Joint Logo" width={60} height={60} />
        </Link>
      </div>

      <nav className="hidden md:flex space-x-8 items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#121212] text-white rounded-lg shadow-lg">
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  {productDetails.map((product) => (
                    <ListItem
                      key={product.slug}
                      title={product.title}
                      to={`/product-detail/${product.slug}`}
                    >
                      {product.description.slice(0, 150)}...
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link to="/application" className="text-white hover:text-blue-500">
          App
        </Link>
        <Link to="#about-us" className="text-white hover:text-blue-500">
          About Us
        </Link>
        <Link to="#contact-us" className="text-white hover:text-blue-500">
          Contact
        </Link>
      </nav>

      <div className="md:hidden flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-[#121212] text-white rounded-lg shadow-lg">
                <ul className="w-40">
                  {productDetails.map((product) => (
                    <ListItem
                      key={product.slug}
                      title={product.title}
                      to={`/product-detail/${product.slug}`}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="md:hidden">
        <button
          aria-label="Toggle Menu"
          className="text-white"
          onClick={toggleMenu}
        >
          <Menu size={25} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center space-y-10 py-12 md:hidden z-50 pb-50">
          <div className="absolute top-8 right-8">
            <button
              className="text-white"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <X size={25} />
            </button>
          </div>
          <Link
            to="/application"
            className="text-white hover:text-blue-500 text-2xl"
          >
            App
          </Link>
          <Link
            to="#about-us"
            className="text-white hover:text-blue-500 text-2xl"
          >
            About Us
          </Link>
          <Link
            to="#contact-us"
            className="text-white hover:text-blue-500 text-2xl"
          >
            Contact
          </Link>
          <Link to="/" aria-label="Bag">
            <img src="/bag.svg" alt="Swift Joint Logo" width={35} height={35} />
          </Link>
        </div>
      )}

      <div className="hidden md:block">
        <Link to="/" aria-label="Bag">
          <img src="/bag.svg" alt="Swift Joint Logo" width={25} height={25} />
        </Link>
      </div>
    </header>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
  to: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, to, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            to={to}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';