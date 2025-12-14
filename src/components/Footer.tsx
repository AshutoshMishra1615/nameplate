export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif font-bold text-white mb-2">GetANameplate</h3>
          <p className="text-sm">Handcrafted with love in India.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} GetANameplate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
