'use client';

import { useState } from 'react';
import {
    Search as SearchIcon,
    Filter,
    Play,
    Save,
    ChevronRight,
    User,
    Building,
    MapPin,
    Target,
    Sparkles,
    Loader2,
    TrendingUp,
    Zap,
    Award,
    Layers,
    Globe,
    Plus,
    ArrowRight,
    ExternalLink,
    Linkedin
} from 'lucide-react';

interface MockResult {
    id: number;
    name: string;
    role: string;
    company: string;
    location: string;
    match: number;
    seniority: string;
    growth: string;
    social: boolean;
    score: number;
    linkedInUrl?: string;
}

export default function SearchPage() {
    const [isSearching, setIsSearching] = useState(false);
    const [results, setResults] = useState<MockResult[]>([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [activeTab, setActiveTab] = useState('basic');

    const handleSearch = () => {
        setIsSearching(true);
        setHasSearched(true);
        setTimeout(() => {
            setResults([
                { id: 1, name: "Sarah Connor", role: "VP of Marketing", company: "Skynet Corp", location: "San Francisco, CA", match: 98, seniority: "VP", growth: "+45%", social: true, score: 95, linkedInUrl: "#" },
                { id: 2, name: "John Smith", role: "Head of Growth", company: "Aperture Science", location: "Seattle, WA", match: 94, seniority: "Director", growth: "+12%", social: false, score: 88, linkedInUrl: "#" },
                { id: 3, name: "Elena Fischer", role: "CTO", company: "Naughty Dog", location: "Los Angeles, CA", match: 89, seniority: "C-Level", growth: "+5%", social: true, score: 92, linkedInUrl: "#" },
                { id: 4, name: "Marcus Holloway", role: "Security Director", company: "DedSec", location: "San Francisco, CA", match: 85, seniority: "Director", growth: "Stable", social: true, score: 82, linkedInUrl: "#" },
            ]);
            setIsSearching(false);
        }, 1500);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-secondary-200/60">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary-600 font-black text-[10px] uppercase tracking-[0.3em]">
                        Prospecting Engine
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter flex items-center gap-3">
                        Advanced Search <Sparkles className="text-primary-500" size={28} />
                    </h1>
                    <p className="text-secondary-500 font-medium">Hyper-targeted lead discovery with real-time social & growth signals.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex flex-col items-end px-4 py-2 bg-white/40 border border-white/60 rounded-2xl">
                        <span className="text-[10px] font-black text-secondary-400 uppercase tracking-widest">Engine Load</span>
                        <span className="text-sm font-black text-slate-700">OPTIMAL</span>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-secondary-200 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-600 hover:bg-secondary-50 transition-all shadow-sm">
                        Saved ICPs
                    </button>
                </div>
            </header>

            {/* Control Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                <div className="lg:col-span-1 space-y-8">
                    <div className="card p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full -translate-y-16 translate-x-16"></div>

                        <div className="flex bg-secondary-100 p-1.5 rounded-2xl mb-8">
                            <button
                                onClick={() => setActiveTab('basic')}
                                className={`flex-1 text-[11px] font-black py-2.5 rounded-xl transition-all uppercase tracking-widest ${activeTab === 'basic' ? 'bg-white shadow-lg text-slate-900' : 'text-secondary-400 hover:text-secondary-600'}`}
                            >Basic</button>
                            <button
                                onClick={() => setActiveTab('advanced')}
                                className={`flex-1 text-[11px] font-black py-2.5 rounded-xl transition-all uppercase tracking-widest ${activeTab === 'advanced' ? 'bg-white shadow-lg text-slate-900' : 'text-secondary-400 hover:text-secondary-600'}`}
                            >Advanced</button>
                        </div>

                        <div className="space-y-6">
                            {activeTab === 'basic' ? (
                                <>
                                    <FilterInput label="Job Title" placeholder="e.g. CTO, VP Marketing" icon={<Award size={14} className="text-primary-500" />} />
                                    <FilterInput label="Location" placeholder="e.g. London, San Francisco" icon={<MapPin size={14} className="text-blue-500" />} />
                                    <FilterInput label="Industry" placeholder="e.g. SaaS, Fintech" icon={<Building size={14} className="text-purple-500" />} />
                                </>
                            ) : (
                                <>
                                    <FilterSelect
                                        label="Job Seniority"
                                        options={["Any", "C-Level", "VP", "Director", "Manager"]}
                                        icon={<Layers size={14} className="text-rose-500" />}
                                    />
                                    <FilterSelect
                                        label="Company Growth"
                                        options={["Any", "Hypergrowth (>50%)", "High (>20%)", "Steady"]}
                                        icon={<TrendingUp size={14} className="text-emerald-500" />}
                                    />
                                    <div className="pt-2 px-1">
                                        <label className="flex items-center justify-between cursor-pointer group">
                                            <span className="text-[10px] font-black text-secondary-500 uppercase tracking-widest group-hover:text-primary-600 transition-colors">Enrich Social Profiles</span>
                                            <input type="checkbox" className="sr-only peer" defaultChecked />
                                            <div className="relative w-10 h-5 bg-secondary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-500"></div>
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>

                        <button
                            onClick={handleSearch}
                            disabled={isSearching}
                            className="btn-primary w-full mt-10 h-14 group"
                        >
                            {isSearching ? (
                                <Loader2 className="animate-spin" size={20} />
                            ) : (
                                <>Run Prospector <Zap size={16} fill="currentColor" className="group-hover:translate-x-0.5 transition-transform" /></>
                            )}
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-6 min-h-[600px]">
                    {!hasSearched ? (
                        <div className="h-full glass-card flex flex-col items-center justify-center text-center p-16 animate-in fade-in duration-1000 border-dashed border-2">
                            <div className="w-24 h-24 bg-primary-100 rounded-[2rem] flex items-center justify-center mb-8 relative">
                                <SearchIcon size={40} className="text-primary-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
                                    <Plus size={16} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Ready for expansion?</h3>
                            <p className="text-secondary-500 max-w-sm mx-auto font-medium leading-relaxed">
                                Define your target ICP using the filters on the left and let the LeadEngine discover high-intent decision makers.
                            </p>
                        </div>
                    ) : isSearching ? (
                        <div className="space-y-6 animate-in fade-in duration-300">
                            <div className="flex items-center justify-center py-20">
                                <div className="flex flex-col items-center gap-4">
                                    <Loader2 className="animate-spin text-primary-600" size={40} />
                                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest">Enriching Data Points...</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 glass-card gap-4">
                                <div className="flex items-center gap-8">
                                    <div className="space-y-0.5">
                                        <span className="text-[10px] font-black text-secondary-400 uppercase tracking-widest">Results Found</span>
                                        <p className="text-xl font-black text-slate-900">{results.length} Matches</p>
                                    </div>
                                    <div className="h-10 w-px bg-secondary-200/50 hidden sm:block"></div>
                                    <div className="hidden lg:flex items-center gap-3">
                                        <div className="glass-badge bg-emerald-50 text-emerald-700">Growth Signal</div>
                                        <div className="glass-badge bg-blue-50 text-blue-700">Social Verify</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full sm:w-auto">
                                    <button className="flex-1 sm:flex-none px-6 py-2.5 bg-white border border-secondary-200 rounded-xl text-xs font-black uppercase tracking-widest text-slate-700 hover:bg-secondary-50 transition-all">Export</button>
                                    <button className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">Mass Target</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {results.map((result, idx) => (
                                    <ResultCard key={result.id} result={result} delay={idx * 100} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function FilterInput({ label, placeholder, icon }: { label: string; placeholder: string; icon: React.ReactNode }) {
    return (
        <div className="group">
            <label className="text-[10px] font-black text-secondary-400 uppercase tracking-widest mb-2 flex items-center gap-2 group-focus-within:text-primary-600 transition-colors">
                {icon} {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full bg-secondary-50/50 border border-secondary-200 rounded-2xl py-3 px-4 text-sm text-slate-900 placeholder:text-secondary-300 outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all font-bold"
            />
        </div>
    );
}

function FilterSelect({ label, options, icon }: { label: string; options: string[]; icon: React.ReactNode }) {
    return (
        <div className="group">
            <label className="text-[10px] font-black text-secondary-400 uppercase tracking-widest mb-2 flex items-center gap-2 group-focus-within:text-primary-600 transition-colors">
                {icon} {label}
            </label>
            <div className="relative">
                <select className="w-full bg-secondary-50/50 border border-secondary-200 rounded-2xl py-3 px-4 text-sm text-slate-900 outline-none focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all font-black appearance-none cursor-pointer pr-10">
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
                <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400 rotate-90 pointer-events-none" />
            </div>
        </div>
    );
}

function ResultCard({ result, delay }: { result: MockResult; delay: number }) {
    return (
        <div
            className="card p-6 md:p-8 group animate-in slide-in-from-bottom-4 relative overflow-hidden"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="flex items-center gap-6 flex-1 min-w-0">
                    <div className="relative shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary-50 to-secondary-200 rounded-[2rem] flex items-center justify-center text-secondary-700 text-3xl font-black group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500 border border-white/50 shadow-inner">
                            {result.name.charAt(0)}
                        </div>
                        {result.social && (
                            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#0077b5] border-2 border-white rounded-full flex items-center justify-center text-white shadow-xl" title="LinkedIn Verified">
                                <Linkedin size={14} fill="currentColor" />
                            </div>
                        )}
                    </div>
                    <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h4 className="text-xl font-black text-slate-900 group-hover:text-primary-700 transition-colors truncate">{result.name}</h4>
                            <div className="h-4 w-px bg-secondary-200 hidden sm:block"></div>
                            <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-[10px] font-black rounded-lg border border-primary-200 uppercase tracking-tighter">
                                Lead Score {result.score}
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-y-3 gap-x-6">
                            <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                < Award size={16} className="text-emerald-500" />
                                <span className="truncate max-w-[150px]">{result.role}</span>
                            </span>
                            <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                <Building size={16} className="text-secondary-400" />
                                <span className="truncate max-w-[150px]">{result.company}</span>
                            </span>
                            <span className="flex items-center gap-2 text-xs font-medium text-secondary-500">
                                <MapPin size={16} className="text-secondary-300" />
                                {result.location}
                            </span>
                            {result.growth !== 'Stable' && (
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                                    <TrendingUp size={12} className="animate-pulse" />
                                    <span className="text-[10px] font-black uppercase">{result.growth} Growth</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-secondary-100">
                    <div className="flex flex-col items-end mr-4">
                        <div className="text-[9px] font-black text-secondary-400 uppercase tracking-[0.2em] mb-1">Target Persona</div>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`h-2 w-5 rounded-full ${i <= result.match / 20 ? 'bg-primary-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'bg-secondary-100'}`}></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-3 bg-white border border-secondary-200 rounded-2xl text-secondary-400 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm active:scale-95">
                            <Save size={20} />
                        </button>
                        <button className="h-12 px-8 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all hover:shadow-2xl hover:shadow-slate-900/30 flex items-center gap-3 border border-slate-700 group/btn">
                            Launch Outreach <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
}

function SkeletonLoader() {
    return (
        <div className="card p-8 animate-pulse border-secondary-100/50">
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6 flex-1">
                    <div className="w-20 h-20 bg-secondary-100 rounded-[2rem]"></div>
                    <div className="space-y-3 flex-1">
                        <div className="h-6 w-1/3 bg-secondary-100 rounded-xl"></div>
                        <div className="h-4 w-1/2 bg-secondary-50 rounded-lg"></div>
                    </div>
                </div>
                <div className="w-32 h-12 bg-secondary-100 rounded-2xl"></div>
            </div>
        </div>
    );
}
