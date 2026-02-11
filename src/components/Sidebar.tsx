'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Search, Database, Settings, LogOut, ChevronRight, Menu, X, Zap } from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const NavLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
        const isActive = pathname === href;
        return (
            <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={isActive ? "nav-link-active" : "nav-link"}
            >
                {icon}
                <span className="flex-1">{label}</span>
                {isActive && <ChevronRight size={14} className="text-primary-400" />}
            </Link>
        );
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-panel z-[60] flex items-center justify-between px-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-black text-lg">L</div>
                    <span className="text-lg font-black text-slate-900 uppercase tracking-tighter">LeadEngine</span>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar Desktop & Mobile */}
            <aside className={`
        fixed inset-y-0 left-0 w-72 h-full glass-panel z-50 border-r border-white/20 transition-all duration-500 ease-in-out transform
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
                <div className="p-8 pt-10">
                    <div className="flex items-center gap-4 px-2 mb-10 group cursor-default">
                        <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-primary-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            L
                        </div>
                        <div>
                            <span className="text-xl font-black bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent uppercase tracking-tighter">LeadEngine</span>
                            <p className="text-[10px] font-black text-primary-500 tracking-[0.2em] uppercase mt-0.5">Production v1.0</p>
                        </div>
                    </div>

                    <nav className="space-y-2">
                        <NavLink href="/" icon={<Home size={20} />} label="Dashboard" />
                        <NavLink href="/search" icon={<Search size={20} />} label="Advanced Search" />
                        <NavLink href="/campaigns" icon={<Database size={20} />} label="Campaigns" />
                        <NavLink href="/leads" icon={<Users size={20} />} label="Lead Pipeline" />
                        <NavLink href="/settings" icon={<Settings size={20} />} label="Settings" />
                    </nav>

                    {/* Engine Status Placeholder in Sidebar */}
                    <div className="mt-10 p-4 rounded-2xl bg-slate-900/5 border border-slate-900/5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-[9px] font-black text-secondary-400 uppercase tracking-widest">Scraping Engine</span>
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                            <Zap size={14} className="text-amber-500" fill="currentColor" />
                            <span>Engine Active</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto p-6 border-t border-white/10 bg-white/20 backdrop-blur-sm">
                    <div className="flex items-center gap-4 p-3 mb-4 rounded-2xl hover:bg-white/40 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-2xl bg-white border border-secondary-200 flex items-center justify-center text-slate-700 font-black text-lg shadow-sm group-hover:scale-105 transition-all">
                            V
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-black text-slate-900 truncate">Viktor Nikolov</p>
                            <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest">Enterprise</p>
                        </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-3 px-4 py-3 text-secondary-500 hover:text-rose-600 hover:bg-rose-50/50 rounded-2xl transition-all duration-300 text-sm font-black uppercase tracking-widest border border-transparent hover:border-rose-100">
                        <LogOut size={18} />
                        <span>Terminate Session</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 animate-in fade-in duration-300"
                ></div>
            )}
        </>
    );
}
