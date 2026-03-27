const navItems = [
  "Home",
  "About Us",
  "Painting Services",
  "Gallery",
  "Blog",
  "Client Testimonials",
  "References",
  "Contact",
];

const NavBar = () => {
  return (
    <div className="w-full bg-nav">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-center px-4">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="px-4 py-4 text-sm font-semibold font-nav uppercase tracking-wide text-nav-foreground hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
