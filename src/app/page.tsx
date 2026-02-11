import {
    ArrowUpRight,
    Users,
    Target,
    BarChart2,
    Calendar,
    TrendingUp,
    MoreHorizontal,
    CheckCircle2,
    Zap,
    Sparkles,
    Plus,
    Search,
    Mail,
    Flame,
    Award,
    Globe,
    Briefcase,
    ExternalLink,
    ChevronRight
} from 'lucide-react';

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-secondary-200/60 transition-all duration-500">
                <div>
                    <div className="flex items-center gap-2 text-primary-600 font-black text-[10px] uppercase tracking-[0.3em] mb-2 px-1">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        Engine Operational
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Control Center</h1>
                    <p className="text-secondary-500 font-medium mt-1">Global performance overview and orchestration status.</p>
                </div>
                <div className="flex shrink-0 gap-3">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-white border border-secondary-200 text-slate-600 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-secondary-50 transition-all shadow-sm">
                        Performance Log
                    </button>
                    <button className="flex-1 md:flex-none px-6 py-3 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 group">
                        <Plus size={14} className="group-hover:rotate-90 transition-transform" /> New Objective
                    </button>
                </div>
            </div>

            {/* Production Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Leads in Pipeline"
                    value="2,543"
                    change="+12.5%"
                    trend="up"
                    icon={<Users className="text-primary-600" size={24} />}
                    color="bg-primary-50"
                    delay="0"
                />
                <StatCard
                    title="Active Scrapers"
                    value="12"
                    change="+2"
                    trend="up"
                    icon={<Search className="text-blue-600" size={24} />}
                    color="bg-blue-50"
                    delay="100"
                />
                <StatCard
                    title="Outreach Sent"
                    value="12,405"
                    change="+8.2%"
                    trend="up"
                    icon={<Mail className="text-purple-600" size={24} />}
                    color="bg-purple-50"
                    delay="200"
                />
                <StatCard
                    title="Conversion"
                    value="4.8%"
                    change="-0.5%"
                    trend="down"
                    icon={<Sparkles className="text-amber-600" size={24} />}
                    color="bg-amber-50"
                    delay="300"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Orchestration / Insights */}
                <div className="lg:col-span-2 space-y-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <div className="card p-8 border-secondary-200/40 shadow-2xl relative overflow-hidden group min-h-[500px] flex flex-col">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Flame size={160} className="text-rose-500" />
                        </div>

                        <div className="flex justify-between items-center mb-8 relative z-10">
                            <div>
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic flex items-center gap-2">
                                    Hot Zones <Flame className="text-rose-500 animate-pulse" size={20} />
                                </h3>
                                <p className="text-xs font-bold text-secondary-400 mt-1 uppercase tracking-widest">High-Performing Sectors & Decision Makers</p>
                            </div>
                            <div className="glass-badge bg-rose-50 text-rose-700 font-black">Live Pulse</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 relative z-10">
                            {/* Trending Sectors */}
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-secondary-400 uppercase tracking-[0.2em] mb-2 underline decoration-primary-500/30 decoration-2 underline-offset-4">Trending Sectors</h4>
                                <div className="space-y-4">
                                    <SectorItem name="SaaS Orchestration" growth="84%" trend="hyper" status="Booming" />
                                    <SectorItem name="AI Infrastructure" growth="62%" trend="up" status="Stable Up" />
                                    <SectorItem name="Fintech Core" growth="45%" trend="up" status="Active" />
                                    <SectorItem name="Cybersec Ops" growth="38%" trend="up" status="Active" />
                                </div>
                            </div>

                            {/* Rising Leaders */}
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-secondary-400 uppercase tracking-[0.2em] mb-2 underline decoration-blue-500/30 decoration-2 underline-offset-4">Rising Leaders</h4>
                                <div className="space-y-4">
                                    <LeaderItem name="Marcus Chen" role="CTO @ CloudX" activity="High" score={98} />
                                    <LeaderItem name="Sarah Vane" role="VP Growth @ Opti" activity="Medium" score={94} />
                                    <LeaderItem name="Lena Schmidt" role="Head of Eng @ Next" activity="High" score={91} />
                                    <LeaderItem name="John Wick" role="Sec Ops @ Continental" activity="Low" score={89} />
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 group">
                            Dive into Hot Zones <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Quick Engine Status Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="card p-6 border-l-4 border-l-primary-500 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-secondary-400 uppercase tracking-widest">Scraping Logic</p>
                                    <h4 className="text-lg font-black text-slate-900 uppercase italic">Adaptive v2.4</h4>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-100 italic">OPTIMAL</div>
                            </div>
                        </div>
                        <div className="card p-6 border-l-4 border-l-blue-500 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-secondary-400 uppercase tracking-widest">ICP Coverage</p>
                                    <h4 className="text-lg font-black text-slate-900 uppercase italic">94.2% Success</h4>
                                </div>
                            </div>
                            <div className="text-right">
                                <ArrowUpRight size={20} className="text-blue-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Activity Feed */}
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-500">
                    <div className="card p-8 h-full border-secondary-200/40 shadow-2xl flex flex-col bg-white">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">Live Feed</h3>
                            <span className="flex items-center gap-1.5 text-[9px] font-black text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span> Live
                            </span>
                        </div>

                        <div className="space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            <ActivityItem
                                title="Lead Matured"
                                desc="Sarah Connor → Opportunity"
                                time="2m ago"
                                icon={<Target size={14} className="text-emerald-500" />}
                                bg="bg-emerald-50"
                            />
                            <ActivityItem
                                title="Search Complete"
                                desc="EU Founders ICP enriched"
                                time="45m ago"
                                icon={<Search size={14} className="text-blue-500" />}
                                bg="bg-blue-50"
                            />
                            <ActivityItem
                                title="Email Dispatched"
                                desc="AI personalized draft sent"
                                time="1h ago"
                                icon={<CheckCircle2 size={14} className="text-purple-500" />}
                                bg="bg-purple-50"
                            />
                            <ActivityItem
                                title="System Alert"
                                desc="Proxy rotation successful"
                                time="3h ago"
                                icon={<Zap size={14} className="text-amber-500" />}
                                bg="bg-amber-50"
                            />
                        </div>

                        <button className="w-full mt-8 py-4 bg-secondary-50 hover:bg-secondary-100 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-secondary-600 border border-secondary-200/60 transition-all flex items-center justify-center gap-2 group">
                            Review Event History <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, change, trend, icon, color, delay }: any) {
    return (
        <div
            className="card p-8 group cursor-default animate-in slide-in-from-bottom-4"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner`}>
                    {icon}
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black px-3 py-1.5 rounded-xl border ${trend === 'up' ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-rose-700 bg-rose-50 border-rose-100'} shadow-sm`}>
                    {trend === 'up' ? <ArrowUpRight size={14} /> : <TrendingUp size={14} className="rotate-180" />}
                    {change}
                </div>
            </div>
            <div>
                <p className="text-secondary-400 text-xs font-black uppercase tracking-widest">{title}</p>
                <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tighter italic">{value}</h3>
            </div>
        </div>
    );
}

function ActivityItem({ title, desc, time, icon, bg }: any) {
    return (
        <div className="flex gap-5 group cursor-pointer p-3 -mx-3 rounded-[1.5rem] hover:bg-secondary-50/50 transition-all border border-transparent hover:border-secondary-100">
            <div className={`w-10 h-10 rounded-2xl ${bg} flex items-center justify-center shrink-0 group-hover:scale-110 shadow-sm transition-transform`}>
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-slate-900 truncate uppercase tracking-tight">{title}</p>
                <p className="text-xs font-medium text-secondary-500 truncate mt-0.5">{desc}</p>
                <p className="text-[9px] font-black text-secondary-300 uppercase tracking-widest mt-1">{time}</p>
            </div>
        </div>
    );
}

function SectorItem({ name, growth, trend, status }: any) {
    return (
        <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors group/item cursor-pointer border border-transparent hover:border-secondary-100/50">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${trend === 'hyper' ? 'bg-rose-50 text-rose-500' : 'bg-primary-50 text-primary-500'} group-hover/item:scale-110 transition-transform`}>
                    <TrendingUp size={16} />
                </div>
                <div>
                    <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{name}</p>
                    <p className="text-[9px] font-bold text-secondary-400 uppercase tracking-widest">{status}</p>
                </div>
            </div>
            <div className="text-right">
                <p className={`text-sm font-black ${trend === 'hyper' ? 'text-rose-600' : 'text-primary-600'}`}>{growth}</p>
            </div>
        </div>
    );
}

function LeaderItem({ name, role, activity, score }: any) {
    return (
        <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors group/item cursor-pointer border border-transparent hover:border-secondary-100/50">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 text-sm font-black group-hover/item:rotate-6 transition-transform">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="text-xs font-black text-slate-900 uppercase tracking-tight">{name}</p>
                    <p className="text-[9px] font-bold text-secondary-400 uppercase tracking-widest">{role}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="hidden sm:block h-1 w-8 bg-secondary-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${score}%` }}></div>
                </div>
                <span className="text-[10px] font-black text-blue-600 tracking-tighter">SC: {score}</span>
            </div>
        </div>
    );
}

function ArrowRight({ size, className }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
