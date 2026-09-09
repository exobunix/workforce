import React from "react";
import Link from "next/link";
import { Home, Compass, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 min-h-[75vh] flex items-center justify-center p-6 bg-navy-950 bg-grid-pattern text-center relative overflow-hidden">
      <div className="max-w-md w-full p-8 rounded-3xl bg-navy-900/90 border border-navy-700 shadow-2xl relative z-10 space-y-6">
        
        {/* Visual Map Pin */}
        <div className="w-16 h-16 rounded-2xl bg-accent-orange/15 border border-accent-orange/40 flex items-center justify-center mx-auto text-accent-orange shadow-lg">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-mono font-black text-accent-gold block">
            404 // ROUTE OUT OF ZONE
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-white font-hindi">
            लगता है यह पेज अभियान से बाहर चला गया।
          </h1>

          <p className="text-xs sm:text-sm text-slate-300">
            आप वापस मुख्य चुनाव प्रबंधन पोर्टल पर जा सकते हैं।
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-orange-hover text-white font-bold text-sm shadow-xl shadow-accent-orange/20 transition-all hover:brightness-110"
          >
            <Home className="w-4 h-4" />
            <span>होम पर वापस जाएं</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
