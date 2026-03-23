import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-primary">
      {/* TopAppBar Shell */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-20 bg-gradient-to-b from-black to-transparent bg-black/60 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <button className="text-cyan-400 dark:text-cyan-300 active:scale-95 duration-200 transition-colors hover:text-cyan-300">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="font-space-grotesk tracking-tighter uppercase text-2xl font-black italic text-cyan-400 tracking-widest">KINETIC</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 font-label text-sm tracking-widest uppercase">
            <Link className="text-cyan-400 transition-colors hover:text-cyan-300" to="/">Home</Link>
            <a className="text-slate-400 transition-colors hover:text-cyan-300" href="#">Library</a>
            <a className="text-slate-400 transition-colors hover:text-cyan-300" href="#">Community</a>
            <a className="text-slate-400 transition-colors hover:text-cyan-300" href="#">Profile</a>
          </nav>
          <button className="text-cyan-400 dark:text-cyan-300 active:scale-95 duration-200 transition-colors hover:text-cyan-300">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      <main className="pb-24">
        {/* Hero Section */}
        <section className="relative h-[751px] w-full overflow-hidden flex items-end justify-start px-6 md:px-12 pb-24">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Cinematic Hero" 
              className="w-full h-full object-cover object-center scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0MIvnuZenVGqeWO4CyvZlVQtl62PDXWhA6jBFQC8V2eKAX-87_YOgN8hh5rZhQOtuISXfLZTZTHn-wOMSM9DcE-F9d2Z7UWhVDvdlbQcMnQlyWnkZs-I8AxYPrPk_qseI8iQk6YMiGBRX001beOmxrRtTN0cQKESVVUXcsX5EsP853xwS4aayyliRGG0L4O4bWxZGbYp1SsovwA45WWQ8KqHOqu2DYHmyynAp80xK_UPEVt7NDgN-7qqtZrtOSPRj7VvZ0kLB7Ko"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded-full border border-primary/30">Epic Release</span>
              <span className="flex items-center gap-1 text-tertiary text-[10px] font-bold tracking-[0.2em] uppercase">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span> Live Now
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-none text-on-surface">
              VOID <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #8ff5ff' }}>RUNNER</span>
            </h2>
            <p className="text-on-surface-variant font-body text-lg md:text-xl max-w-xl leading-relaxed">
              Experience the next generation of hyper-kinetic tactical combat in a neon-drenched reality that never sleeps.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/game/void-runner" className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] transition-all active:scale-95 flex items-center gap-2">
                Play Now
                <span className="material-symbols-outlined text-sm">play_arrow</span>
              </Link>
              <button className="border border-outline-variant/30 text-on-surface px-8 py-4 font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary/10 transition-all backdrop-blur-sm">
                Explore
              </button>
            </div>
          </motion.div>
        </section>

        {/* Trending Games */}
        <section className="py-20">
          <div className="px-6 md:px-12 mb-8 flex justify-between items-end">
            <div>
              <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Trending Games</h3>
              <div className="h-1 w-12 bg-secondary mt-2"></div>
            </div>
            <a className="text-primary font-label text-xs tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all" href="#">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="flex gap-6 overflow-x-auto px-6 md:px-12 no-scrollbar pb-8">
            {/* Trending Card 1 */}
            <Link to="/game/neon-protocol" className="min-w-[300px] md:min-w-[400px] aspect-[4/5] bg-surface-container-low relative group cursor-pointer overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz36QFRVqTEEvLG4V4MYas98nxHxR6BGkIcRtoa2FZZ1uVa-z4C3v8mGj0h5eVBpP0zIP4xVIgGrB59dMvkAlVL3n82rDdNu9pP_rt-mBzI3WSm2nihWjmXklrtM7DQ1AwVPiwpJI5DKf6Ai_v5HkLvxHRCGf-5ZmrD7faZxTGt9j67aVoaFk_tteTZTXZ8O2bTAgxKJ6H6ba2j9djrQFV79o0a1BBsr4wrMgAcOWQ8A_-tSECBYbB5hEY_yB0VK5fJY3jE1aBpdNh" alt="Neon Protocol" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-0.5 rounded border border-secondary/30">PLATINUM</span>
                  <div className="flex items-center text-tertiary gap-1">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.9</span>
                  </div>
                </div>
                <h4 className="font-headline text-2xl font-black tracking-tight text-white uppercase">Neon Protocol</h4>
              </div>
            </Link>
            {/* Trending Card 2 */}
            <div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] bg-surface-container-low relative group cursor-pointer overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwUzcwF30YlO44Ks0dznQVbQhjz0wXPGCtwdmxpV4joUsi2b_aH8d1kUqMODDCV3lZpsRX_OdZHSFMT4-fqtlMLXH1evxWVuv4CIMzbV0mwzKX6ZSBWriwajMxU_qLXdsZJc546HEinCGZ_O8CY1NnH_deJgEkTiKQJe-vH6QbImgMSzgEmmN2r-ovCZ5RBf-Zs3H3njUVKU_O80uWN3uTcEzkjPd4aqbS0iNBrH5nADVR08xwKr4HwtKwnoUi-KTpGKh66E2vovFa" alt="Aero Strike" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/30">MOST POPULAR</span>
                  <div className="flex items-center text-tertiary gap-1">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">4.7</span>
                  </div>
                </div>
                <h4 className="font-headline text-2xl font-black tracking-tight text-white uppercase">Aero Strike</h4>
              </div>
            </div>
            {/* Trending Card 3 */}
            <div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] bg-surface-container-low relative group cursor-pointer overflow-hidden rounded-lg">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpeuruPu5xbzJn62wTCjTwmENKAG3X_ajqIF3ETMJKc5EImZC3dB-57D5wPc3eYvRmx2ay0CHbkDeLUaknNqa7h88L8Z6hN_4s-G4O9w2AuwrLerhe-Ea3lu7W-mrjeNZoLj1FxCdF73QNBm2RMaqjk5xtIdgbVAdldp0oMwe0JgLQLewHkAt-ygshsDK21GJBh1QG2gdtgVT3W3KDzlXYnjc0z4Og2klM3P9yQRONIT-a3B_OMrcu0FooaajO2gw4WMVrh3WYMeOB" alt="Echoes of Gaia" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-0.5 rounded border border-secondary/30">EDITOR'S CHOICE</span>
                  <div className="flex items-center text-tertiary gap-1">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-xs font-bold">5.0</span>
                  </div>
                </div>
                <h4 className="font-headline text-2xl font-black tracking-tight text-white uppercase">Echoes of Gaia</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-surface-container-low">
          <div className="px-6 md:px-12 mb-12 text-center">
            <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Browse by Gear</h3>
            <p className="text-on-surface-variant font-body text-sm mt-2 uppercase tracking-widest">Select your combat specialty</p>
          </div>
          <div className="px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: 'sports_esports', label: 'Action', color: 'primary' },
              { icon: 'swords', label: 'RPG', color: 'secondary' },
              { icon: 'tactic', label: 'Strategy', color: 'tertiary' },
              { icon: 'target', label: 'FPS', color: 'primary' },
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className={`w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center border border-${cat.color}/20 group-hover:border-${cat.color} group-hover:shadow-[0_0_20px_rgba(143,245,255,0.2)] transition-all`}>
                  <span className={`material-symbols-outlined text-4xl text-${cat.color}`}>{cat.icon}</span>
                </div>
                <span className="font-headline font-bold text-sm tracking-widest uppercase">{cat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* New Releases */}
        <section className="py-20 px-6 md:px-12">
          <div className="mb-12">
            <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">New Releases</h3>
            <div className="h-1 w-12 bg-primary mt-2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { title: 'Synthetic Dreams', price: '$59.99', date: 'Oct 12', dl: '12k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpzz2rGs4EqYkS2iBpU1lBzIShEDHpLURQ0j2F7ZKvoFXRP_o5Wj-8MVm0eFUFipygdbF5C-e6wdVSNhlQuaINkf-QwIGKASDWykDYK7CgivmGUMaNuZwSfnnsjCrqVGNzBd09bs3fL9oigzpV8WtHcIp_qVxqkT6LfXhSkj8WuvjkoxFo4Rxs-8LUWmqR7nXjNxhwskJ4T4biswBCSgwTwnSOe1FSN1v-SPp5B7mdtfI9mwinFrpBhJNQUYv7ufg-j5nBryJ7Tjqg' },
              { title: 'Orbit Protocol', price: 'Free', date: 'Oct 08', dl: '45k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpX3uG3bFvnNsLsexgU1PeJyxvgatPcO0hZpnaSwoppxwIQMcV_NoqqROHqI3H5agYdme3gKdO_Nlp_HR9-RwJMIg4PICv7K4zxsYRKnCTsKZYWf-T92NYwExPqXldkU0rbX5oDq4TGhZqWlXP8H64eR9n89-33QMQqyzjTsQ8S1RKTdDeAAz-pNz9WcCDMA_lLWw2FTd6g3Xmu_TX3UjCfa4g3u_vrpuY4tddoEexa57FsCyGQfTkZyofIBB8cxC3cPyrBdQ-dsxw' },
              { title: 'Iron Command', price: '$29.99', date: 'Oct 05', dl: '8k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwhZeJqWZ2LigMhtzus6EHagFDKk4aoQsPCaJgrx1FUg1oSt8LC8Dbi89ziWPMpoun1iZfrXo8ZjhqOCvXAITLqvoQUirP64-kHeaufPgIHqy9rNVWrjQKu1MoGKdhKQt-8b1F2oWxte-YwmKLXE1IUIWnrl-no8hWOPwyxQP56VGtqY7ZfFtQmbda6Z9xMN4w1nf2hLKayO6X6j8OAR25JLgd86LsrIyazB3W50LBGBApgJ81VdgRKJ5JMKxJ5E2i3VhBPvDVDgiP' },
              { title: 'Lost Crypts', price: '$19.99', date: 'Sep 28', dl: '21k', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlZpj5nhucKYPanEBU6N7mtl-Dp3n7OIwMHi8r8UvV6N6I5gzE03OrbuY4qU0d4ZWqWLGjybv_2dEh9-e4Q7uSdNGLjG0gNmS6tp093tQWp4awC9nKxgsEj1Y2cy0hEcPStgA5oTPSE4mVIgmHS7Eh4yZBVGHNDG3XtUdx4mNe_KWhCv445kfXNjkRlbII_vEiPYm1WQNMcqRJz6r-9q_mIdCym3oaqzmsou8oyN4DHBMvO6uSbAyUgxpTKbHQUAeuQxne2FdRDG1g' },
            ].map((game, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="aspect-video rounded overflow-hidden mb-4 bg-surface-container-high">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={game.img} alt={game.title} />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-headline font-bold text-on-surface uppercase text-sm">{game.title}</h5>
                  <span className="text-tertiary font-bold text-sm">{game.price}</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-on-surface-variant font-body uppercase tracking-widest">
                  <span>Released: {game.date}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">download</span> {game.dl}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 pb-2 z-50 rounded-t-3xl bg-[#0e0e13]/80 backdrop-blur-xl border-t-[1px] border-white/5 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] md:hidden">
        <Link className="flex flex-col items-center justify-center text-cyan-400 drop-shadow-[0_0_8px_rgba(143,245,255,0.6)] active:translate-y-1 transition-transform" to="/">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-manrope text-[10px] font-bold uppercase tracking-widest mt-1">Home</span>
        </Link>
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-400 active:translate-y-1 transition-transform" href="#">
          <span className="material-symbols-outlined">sports_esports</span>
          <span className="font-manrope text-[10px] font-bold uppercase tracking-widest mt-1">Library</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-400 active:translate-y-1 transition-transform" href="#">
          <span className="material-symbols-outlined">group</span>
          <span className="font-manrope text-[10px] font-bold uppercase tracking-widest mt-1">Community</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500 hover:text-purple-400 active:translate-y-1 transition-transform" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-manrope text-[10px] font-bold uppercase tracking-widest mt-1">Profile</span>
        </a>
      </nav>
    </div>
  );
};

export default Home;
