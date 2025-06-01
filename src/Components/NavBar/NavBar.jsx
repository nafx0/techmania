import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function NavBar() {
  const mainLinks = [
    { title: "Home", href: "/" },
    { title: "Wishlist", href: "/wishlist" },
    { title: "Dashboard", href: "/dashboard" },
  ];

  const authInfo = useContext(AuthContext)

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto px-5 md:px-0">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">
              {authInfo.name} <span className="text-[#8b5cf6]">Heaven</span>
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {mainLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavLink to={link.href}>
                    {({ isActive }) => (
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-medium transition-colors hover:text-primary",
                          isActive ? "text-primary" : "text-gray-900"
                        )}
                        active={isActive}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    )}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {/* Login Button */}
          <div className="hidden md:flex">
            <Button variant="default" size="sm" asChild>
              <NavLink to="/login">
                Login <LogIn></LogIn>
              </NavLink>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Website navigation links
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4 px-5">
                  {mainLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      className={({ isActive }) =>
                        cn(
                          "text-lg font-medium transition-colors hover:text-primary",
                          isActive ? "text-primary" : "text-gray-900"
                        )
                      }
                    >
                      {link.title}
                    </NavLink>
                  ))}
                  <Button className="mt-4" asChild>
                    <NavLink to="/login">
                      Login <LogIn></LogIn>
                    </NavLink>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
