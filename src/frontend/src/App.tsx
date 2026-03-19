import {
  ChevronRight,
  Heart,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/923001234567";
const INSTAGRAM_URL =
  "https://www.instagram.com/kashnoorbyk.in?igsh=MTFvMW1qY25zYXQxNQ==";

type Category = "earrings" | "rings" | "bracelets" | "chains" | "handmade";

const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: "earrings", label: "Earrings", emoji: "✦" },
  { id: "rings", label: "Rings", emoji: "◈" },
  { id: "bracelets", label: "Bracelets", emoji: "◉" },
  { id: "chains", label: "Chains", emoji: "◆" },
  { id: "handmade", label: "Handmade", emoji: "♡" },
];

const products = [
  {
    id: 6,
    name: "Two-Tone Chain Necklace",
    price: "Rs. 199",
    image: "/assets/uploads/724eea7bffb51b1e545ce2e54bf46a3b-1.jpg",
    tag: "New",
    category: "chains" as Category,
  },
  {
    id: 10,
    name: "Gold Triple Hoop Earrings",
    price: "Rs. 199",
    image: "/assets/uploads/6fd89b1d58f654ecec9136aef027473d-6.jpg",
    tag: "New",
    category: "earrings" as Category,
  },
  {
    id: 11,
    name: "Gold Leaf Stud Earrings",
    price: "Rs. 249",
    image: "/assets/uploads/9a258fb411ea1ada05d240c67ab625f9-1.jpg",
    tag: "New",
    category: "earrings" as Category,
  },
  {
    id: 12,
    name: "Gold Nail Bangle Bracelet",
    price: "Rs. 249",
    image: "/assets/uploads/b4f2488ab451083e14a9ba7568a884af-2.jpg",
    tag: "Bestseller",
    category: "bracelets" as Category,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WhatsAppIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppIconLg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppIconXl = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-xs"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className="hidden md:flex items-center gap-8 flex-1">
            {navLinks.slice(0, 2).map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="font-sans text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors tracking-wide uppercase"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="font-serif text-2xl md:text-3xl font-bold text-brand-accent tracking-widest mx-auto md:mx-0"
            data-ocid="nav.logo.link"
          >
            Kashnoor
          </button>

          <nav className="hidden md:flex items-center gap-8 flex-1 justify-end">
            {navLinks.slice(2).map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="font-sans text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors tracking-wide uppercase"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden p-2 text-green-600"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-left font-sans text-base font-medium text-foreground hover:text-brand-accent transition-colors tracking-wide"
                data-ocid={`mobile.nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/generated/kashnoor-hero.dim_1400x800.jpg"
          alt="Kashnoor jewellery collection"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg"
        >
          <span className="inline-block font-sans text-xs tracking-[0.25em] uppercase text-brand-accent mb-4 font-medium">
            Handcrafted with Love
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text leading-tight mb-6">
            Timeless Beauty,
            <br />
            <span className="italic text-brand-accent">Crafted for You</span>
          </h1>
          <p className="font-sans text-base text-brand-muted leading-relaxed mb-10 max-w-md">
            Discover our exquisite collection of pearl earrings and handcrafted
            jewellery — each piece a celebration of femininity and elegance.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 bg-brand-accent text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all hover:shadow-card group"
              data-ocid="hero.primary_button"
            >
              Explore Collection
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-accent text-brand-accent font-sans text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-brand-accent hover:text-white transition-all"
              data-ocid="hero.whatsapp_button"
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  categoryIndex,
}: {
  product: (typeof products)[0];
  index: number;
  categoryIndex: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden shadow-xs hover:shadow-card-hover transition-all duration-300"
      data-ocid={`shop.item.${categoryIndex + 1}`}
    >
      <div className="relative overflow-hidden aspect-[5/6] bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-brand-accent font-sans text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
          {product.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-medium text-brand-text mb-1">
          {product.name}
        </h3>
        <p className="font-sans text-brand-accent font-semibold text-sm mb-4">
          {product.price}
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-sans text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-all hover:shadow-sm w-full justify-center"
          style={{
            background: "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
          }}
          data-ocid={`shop.instagram.button.${categoryIndex + 1}`}
        >
          <Instagram size={14} />
          Order on Instagram
        </a>
      </div>
    </motion.div>
  );
}

function ComingSoonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="col-span-full flex flex-col items-center justify-center py-20 px-8 bg-card border border-dashed border-brand-accent/30 rounded-2xl text-center"
      data-ocid="shop.rings.empty_state"
    >
      <div className="w-16 h-16 rounded-full bg-brand-secondary flex items-center justify-center mb-5">
        <Sparkles size={24} className="text-brand-accent" />
      </div>
      <h3 className="font-serif text-2xl font-semibold text-brand-text mb-2">
        Coming Soon
      </h3>
      <p className="font-sans text-sm text-brand-muted max-w-xs leading-relaxed mb-6">
        Our rings collection is being carefully crafted. Be the first to know
        when it launches.
      </p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white font-sans text-xs font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-all"
        style={{
          background: "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
        }}
        data-ocid="shop.rings.notify_button"
      >
        <Instagram size={14} />
        Notify Me on Instagram
      </a>
    </motion.div>
  );
}

function CategoryNav({
  activeCategory,
  onSelect,
}: {
  activeCategory: Category;
  onSelect: (cat: Category) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active pill into view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(
      `[data-catid="${activeCategory}"]`,
    ) as HTMLElement | null;
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeCategory]);

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 md:gap-3 overflow-x-auto pb-1 scrollbar-none md:justify-center"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      role="tablist"
      aria-label="Product categories"
    >
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={activeCategory === cat.id}
          data-catid={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`shrink-0 inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full border transition-all duration-200 ${
            activeCategory === cat.id
              ? "bg-brand-accent text-white border-brand-accent shadow-sm scale-105"
              : "bg-card text-brand-muted border-border hover:border-brand-accent hover:text-brand-accent hover:scale-[1.02]"
          }`}
          data-ocid={`shop.${cat.id}.tab`}
        >
          <span className="text-[11px] opacity-70">{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
}

function ShopSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("earrings");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToCategory = (cat: Category) => {
    setActiveCategory(cat);
    const el = sectionRefs.current[cat];
    if (el) {
      const offset = 140;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Update active pill based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current: Category = "earrings";
      for (const cat of CATEGORIES) {
        const el = sectionRefs.current[cat.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) current = cat.id;
        }
      }
      setActiveCategory(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="shop" className="py-24 bg-brand-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-accent font-medium">
            Handpicked for You
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mt-3">
            Our Collection
          </h2>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-brand-accent rounded-full" />
        </motion.div>

        {/* Sticky category navigation bar */}
        <div className="sticky top-16 md:top-20 z-30 bg-brand-secondary/95 backdrop-blur-sm pt-4 pb-4 mb-12 -mx-6 px-6 border-b border-border/60">
          <CategoryNav
            activeCategory={activeCategory}
            onSelect={scrollToCategory}
          />
        </div>

        {/* Category sections */}
        <div className="space-y-20">
          {CATEGORIES.map((cat) => {
            const catProducts = products.filter((p) => p.category === cat.id);
            return (
              <div
                key={cat.id}
                ref={(el) => {
                  sectionRefs.current[cat.id] = el;
                }}
                id={`shop-${cat.id}`}
              >
                {/* Category heading */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-text whitespace-nowrap">
                      {cat.label}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                    {catProducts.length > 0 && (
                      <span className="font-sans text-xs text-brand-muted tracking-wide shrink-0">
                        {catProducts.length} piece
                        {catProducts.length !== 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Products grid or coming soon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {cat.id === "rings" ? (
                    <ComingSoonCard />
                  ) : catProducts.length === 0 ? (
                    <div
                      className="col-span-full py-12 text-center font-sans text-sm text-brand-muted"
                      data-ocid={`shop.${cat.id}.empty_state`}
                    >
                      No products yet in this category.
                    </div>
                  ) : (
                    catProducts.map((p, i) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        index={i}
                        categoryIndex={i}
                      />
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom order CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="font-sans text-sm text-brand-muted mb-5">
            Want something custom? We create bespoke pieces just for you.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-sans text-sm font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-all hover:shadow-card"
            style={{
              background:
                "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
            }}
            data-ocid="shop.custom_order_button"
          >
            <Instagram size={16} />
            Request Custom Order on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/assets/uploads/9a258fb411ea1ada05d240c67ab625f9-1.jpg"
                alt="Kashnoor gold leaf earrings"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand-secondary border border-border -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-brand-secondary border border-border -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-accent font-medium">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mt-3 mb-6">
              Born from a Love of
              <span className="italic text-brand-accent"> Beauty</span>
            </h2>
            <div className="space-y-5 font-sans text-sm text-brand-muted leading-relaxed">
              <p>
                Kashnoor was born from a deep love of feminine elegance and the
                belief that every woman deserves to feel radiant. What started
                as a passion for crafting delicate jewellery pieces has grown
                into a brand built on intention, care, and artistry.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and
                handcrafted — from our signature pearl earrings to our bespoke
                handmade creations. We source only the finest materials,
                ensuring that every jewel you wear carries a piece of our heart.
              </p>
              <p>
                We celebrate femininity in all its forms. Whether you're
                adorning yourself for a quiet morning or a grand occasion,
                Kashnoor jewellery is made to accompany life's most meaningful
                moments with grace and timeless beauty.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-brand-accent">
                  500+
                </p>
                <p className="font-sans text-xs text-brand-muted mt-1 tracking-wide uppercase">
                  Happy Customers
                </p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-brand-accent">
                  100%
                </p>
                <p className="font-sans text-xs text-brand-muted mt-1 tracking-wide uppercase">
                  Handcrafted
                </p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-brand-accent">
                  3+
                </p>
                <p className="font-sans text-xs text-brand-muted mt-1 tracking-wide uppercase">
                  Years of Love
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-brand-secondary">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-brand-accent font-medium">
            We're Here for You
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mt-3 mb-5">
            Get in Touch
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-brand-accent rounded-full mb-8" />
          <p className="font-sans text-sm text-brand-muted leading-relaxed mb-12 max-w-md mx-auto">
            We'd love to hear from you. Reach us on WhatsApp for orders, custom
            requests, or any questions. We respond personally to every message.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-sans text-sm font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-all hover:shadow-card w-full sm:w-auto justify-center"
              data-ocid="contact.whatsapp_button"
            >
              <WhatsAppIconLg />
              Chat on WhatsApp
            </a>

            <a
              href="mailto:hello@kashnoor.com"
              className="inline-flex items-center gap-3 border border-brand-accent text-brand-accent font-sans text-sm font-semibold px-10 py-4 rounded-full hover:bg-brand-accent hover:text-white transition-all w-full sm:w-auto justify-center"
              data-ocid="contact.email_button"
            >
              <Mail size={18} />
              hello@kashnoor.com
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-brand-muted">
            <Heart size={14} className="text-brand-accent" />
            <p className="font-sans text-xs">
              We craft every piece with love — your satisfaction is our
              priority.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-footer text-white py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-serif text-3xl font-bold text-brand-accent tracking-widest mb-3">
            Kashnoor
          </h3>
          <p className="font-sans text-xs text-white/50 tracking-widest uppercase mb-8">
            Handcrafted with Love
          </p>

          <div className="flex items-center gap-8 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-white/50 hover:text-white transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <span className="sr-only">WhatsApp</span>
              <WhatsAppIcon />
            </a>
            <a
              href="mailto:hello@kashnoor.com"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-sans text-xs text-white/40">
              © {year} Kashnoor. All rights reserved.
            </p>
            <p className="font-sans text-xs text-white/30">
              Built with{" "}
              <Heart size={10} className="inline text-brand-accent" /> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-card-hover flex items-center justify-center hover:shadow-card transition-shadow"
      data-ocid="whatsapp.button"
    >
      <span className="sr-only">Chat on WhatsApp</span>
      <WhatsAppIconXl />
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ShopSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
