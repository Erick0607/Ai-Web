import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GameDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-primary min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md flex justify-between items-center px-6 py-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-cyan-400 hover:text-cyan-300 transition-colors active:scale-95 duration-150"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-['Space_Grotesk'] font-bold tracking-tighter text-cyan-400 text-glow-primary">GAME_NEON</h1>
        <button className="text-cyan-400 hover:text-cyan-300 transition-colors active:scale-95 duration-150">
          <span className="material-symbols-outlined">share</span>
        </button>
      </header>

      <main className="pb-32">
        {/* Hero Section */}
        <section className="relative h-[530px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10"></div>
          <img 
            alt="Neon Vault Hero" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5RI5yFTSuwTHvBiM8YcgL8EPit1gu_o2dY7TaDumdi5DvsQPlxCcKD1xGjhdIxk0LcCXnTJHF6kXPJlLK7qhBrPY7_4gGwFIHVXB2cyOrBfZn7CXa0j3-uwW3ftAPxX4ZHWgaJR4o8UHXeMMF12GKvWkQHABA5F53kx3pzj8qlnbZ3na6uz76oKdfzX563_CxoyWiPMRe-XN_wcUdwGvq5fpadLsTnjG61kEdkdyFtwSI1ev8_v6DVz_nrF42CMAMbcmObvX6xQD9"
          />
          <div className="absolute bottom-0 left-0 w-full p-6 z-20 space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary font-headline text-xs tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-tertiary mr-2 animate-pulse"></span>
              Live Preview Available
            </span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-headline font-black italic tracking-widest text-primary text-glow-primary"
            >
              NEON_VAULT
            </motion.h2>
            <div className="flex items-center space-x-4 font-body text-sm text-on-surface-variant">
              <div className="flex items-center text-tertiary">
                <span className="material-symbols-outlined text-sm mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="font-bold">4.9</span>
              </div>
              <span>•</span>
              <span>Sci-Fi RPG</span>
              <span>•</span>
              <div className="flex space-x-2">
                <span className="material-symbols-outlined text-sm">desktop_windows</span>
                <span className="material-symbols-outlined text-sm">sports_esports</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="px-6 py-8 space-y-4">
          <button className="w-full py-4 px-6 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold tracking-widest uppercase glow-primary transition-transform active:scale-95">
            PLAY NOW
          </button>
          <button className="w-full py-4 px-6 rounded-xl border border-primary/30 text-primary font-headline font-bold tracking-widest uppercase hover:bg-primary/10 transition-all active:scale-95">
            ADD TO WISHLIST
          </button>
        </section>

        {/* About Section */}
        <section className="px-6 py-8">
          <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 tracking-tight">ABOUT THE GAME</h3>
          <p className="font-body text-on-surface-variant leading-relaxed text-sm">
            In the year 2088, the <span className="text-primary">Neon Vault</span> is the only thing standing between humanity and the Singularity. Dive into a sprawling megacity where every shadow hides a secret and every light circuit tells a story. Master cybernetic enhancements, navigate lethal political webs, and rewrite the digital DNA of the future.
          </p>
          <div className="mt-6 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {['Cyberpunk', 'Open World', 'Story Rich', 'Tactical'].map((tag, idx) => (
              <div key={idx} className="flex-none px-4 py-2 bg-surface-container-high rounded-full border border-white/5 text-xs font-medium text-on-surface">
                {tag}
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-8">
          <div className="flex items-center justify-between px-6 mb-4">
            <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight">SCREENSHOTS</h3>
            <span className="text-primary text-xs font-headline uppercase tracking-widest cursor-pointer">View All</span>
          </div>
          <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuC-T-2JRFpz4YCNvKfyJpsZIxFmq0s7ASW5i8OMvOStdSuvwFy78Mnif4w_aTdm1OcQGyyOhIFCwB71oXzMapykjUlTLP0D9Bot-G961mtDxznuCaJ7XO7syTD_9SM4o9Ev4cE7woh_Aw9znYech-vPdpbGSJdmfazRr49gfbjxhAuvk-f9cOuZsUOfyClINid60semEDU3A2Kf_D6HLndsv-YcFPTUH43FZlXXG29hPHZc7L45JL7_lzTrIz675osJHOX1p_Md_bJL',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDr9OdMWpereK5FplsN7jWOVQFfy7lqrAQStz3AUeeAWVe7KTQhzniDUdV7j2M4UC-rhOYEiBN899dqyvntqNkxFRQJA3SkyyPAxT5BFHlRJ9hbUexb-v-dKSCYNbJP3N3CMrVyMw47VbzXEXJfw5ZQ8ChAPPSWMh_O4IB98cLC0ntqqcPuzLIDuDvcCdyDdyGCgR3xdgdtvMfMQAqOPazvZXxua9DlMvUB3K-JSrs44uWKQ3QDPbYcYIsS7_i_fNLOYB9Z4Zvrc76d',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuA4L0zbp5zeQ_CEPXwJsKlC_oxqWZByXI-jPe9jyjx9G-48gvAF4kZrZliHJnF03d6AGVHCIYMczCGxVB7w9dFuCgZsU0ubrVM43QpV46Q2Elhu1ofk1-nDX3Cl_TP5mcUeR_puBPwc7dyQDWS0PAePmdXZ7EOcSoY3WTcF0LwuQeVec_x9Cle2TJxEB7aJrgtn8csNBATNf3CX_8-eESZR2YYB5Wy2Pe-MnoPkBA0M4E5v8twRSzpx5lKjr-Fxu84h-YJOKUPU4KKW'
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex-none w-72 h-40 rounded-2xl overflow-hidden bg-surface-container relative group cursor-pointer"
              >
                <img className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" src={img} alt={`Screenshot ${idx + 1}`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section className="px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight">REVIEWS</h3>
            <div className="flex items-center gap-1">
              <span className="text-xs font-body text-on-surface-variant">Sort by:</span>
              <span className="text-xs font-headline font-bold text-primary">Recent</span>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { user: 'CYBER_PUNK_99', time: '3 Hours Ago', rating: 5, text: '"The neon aesthetics are unmatched. Gameplay loop feels tight and the story choices actually matter."', color: 'primary' },
              { user: 'VOID_WALKER', time: 'Yesterday', rating: 4, text: '"Visually stunning, though I encountered a minor bug in the second act. Still a must-play for RPG fans."', color: 'secondary' }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`p-5 rounded-2xl bg-surface-container-low border-l-2 border-${review.color}/20`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-white/5">
                      <span className="material-symbols-outlined text-on-surface-variant">person</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-headline font-bold text-on-surface">{review.user}</h4>
                      <span className="text-[10px] font-body text-on-surface-variant uppercase">{review.time}</span>
                    </div>
                  </div>
                  <div className="flex text-tertiary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-xs" style={{ fontVariationSettings: i < review.rating ? "'FILL' 1" : "'FILL' 0" }}>star</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant font-body leading-snug italic">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-black/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(143,245,255,0.15)] rounded-t-3xl">
        <Link className="flex flex-col items-center justify-center text-slate-500 p-3 hover:bg-white/5 transition-all active:scale-90 duration-200" to="/">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Home</span>
        </Link>
        <a className="flex flex-col items-center justify-center bg-cyan-500/20 text-cyan-300 rounded-xl p-3 shadow-[0_0_15px_rgba(143,245,255,0.4)] transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sports_esports</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Games</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500 p-3 hover:bg-white/5 transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Alerts</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500 p-3 hover:bg-white/5 transition-all active:scale-90 duration-200" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Manrope'] text-[10px] uppercase tracking-widest mt-1">Profile</span>
        </a>
      </nav>

      {/* Background Decoration Blurs */}
      <div className="fixed top-1/4 -right-20 w-64 h-64 bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
};

export default GameDetail;
