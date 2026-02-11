'use client';

import { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Plus,
    MoreHorizontal,
    User,
    Building,
    MapPin,
    ChevronRight,
    Star,
    MessageSquare,
    Calendar,
    ArrowUpRight,
    Target,
    Activity,
    History,
    Sparkles,
    Mail,
    Zap,
    Linkedin,
    Trash2,
    Eye,
    X,
    Send
} from 'lucide-react';

const MOCK_LEADS = [
    {
        id: 1,
        name: "Alexander Schmidt",
        company: "TechFlow GmbH",
        role: "CTO",
        location: "Berlin",
        stage: "Qualified",
        score: 92,
        nextStep: "Technical Deck",
        lastActivity: "2h ago",
        emailDraft: "Hi Alexander, noticed TechFlow GmbH is scaling its infrastructure. Given your role as CTO, I thought our automated orchestration might be a fit...",
        socialUrl: "#"
    },
    {
        id: 2,
        name: "Sarah Jones",
        company: "CloudScale Inc",
        role: "VP Sales",
        location: "London",
        stage: "In Conversation",
        score: 85,
        nextStep: "Sync Pricing",
        lastActivity: "1d ago",
        emailDraft: "Hello Sarah, congrats on the recent growth at CloudScale. I have some insights on how we can optimize your sales pipeline using our engine...",
        socialUrl: "#"
    },
    {
        id: 3,
        name: "Marcus Weber",
        company: "DesignStudio",
        role: "Founder",
        location: "Munich",
        stage: "Researching",
        score: 64,
        nextStep: "ID Decision Maker",
        lastActivity: "3d ago",
        emailDraft: "", // Not generated yet
        socialUrl: "#"
    },
    {
        id: 4,
        name: "Elena Rodriguez",
        company: "SoftServe",
        role: "Head of Growth",
        location: "Madrid",
        stage: "Contacted",
        score: 78,
        nextStep: "Follow-up",
        lastActivity: "5h ago",
        emailDraft: "Hi Elena, following up on my previous note. SoftServe's growth trajectory is impressive and I'd love to discuss how our tools can support it...",
        socialUrl: "#"
    },
];

export default function LeadsPage() {
    const [leads] = useState(MOCK_LEADS);
    const [selectedLead, setSelectedLead] = useState<any>(null);
    const [showPreview, setShowPreview] = useState(false);

    const handlePreview = (lead: any, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedLead(lead);
        setShowPreview(true);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-secondary-200/60">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary-600 font-black text-[10px] uppercase tracking-[0.3em]">
                        Pipeline Management
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter flex items-center gap-3">
                        Lead Maturation <Target className="text-primary-500" size={28} />
                    </h1>
                    <p className="text-secondary-500 font-medium whitespace-pre-wrap">Convert and nurture high-intent prospects through your custom sales funnel.</p>
                </div>
                <div className="flex shrink-0 gap-3">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-white border border-secondary-200 text-slate-600 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-secondary-50 transition-all shadow-sm">
                        Export CRM
                    </button>
                    <button className="flex-1 md:flex-none btn-primary shadow-xl">
                        <Plus size={16} /> Import
                    </button>
                </div>
            </header>

            {/* Pipeline Overview Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                <PipelineStat label="New" count={12} color="bg-blue-500" delay="0" />
                <PipelineStat label="Research" count={8} color="bg-slate-400" delay="100" />
                <PipelineStat label="Contacted" count={24} color="bg-amber-500" delay="200" />
                <PipelineStat label="Negotiation" count={15} color="bg-purple-500" delay="300" />
                <PipelineStat label="Closed" count={9} color="bg-emerald-500" delay="400" />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-1 group">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-secondary-400 group-focus-within:text-primary-500 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search lead pipeline..."
                        className="w-full bg-white/60 backdrop-blur-md border border-secondary-200 rounded-3xl py-4 pl-14 pr-4 transition-all focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none font-bold text-slate-900 shadow-sm"
                    />
                </div>
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-secondary-50 border border-secondary-200 rounded-3xl text-sm font-black uppercase tracking-widest text-slate-700 transition-all shadow-sm group">
                    <Filter size={18} className="text-secondary-400 group-hover:text-primary-500 group-hover:scale-110 transition-all" /> Filter
                </button>
            </div>

            {/* Main Pipeline Table */}
            <div className="glass-card overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500"></div>

                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-secondary-50/30 border-b border-secondary-200/50 text-secondary-400 text-[9px] uppercase tracking-[0.3em] font-black">
                            <tr>
                                <th className="p-6 pl-10">Identity</th>
                                <th className="p-6">Stage</th>
                                <th className="p-6 text-center">Maturation</th>
                                <th className="p-6">Strategy</th>
                                <th className="p-6">Latest Touch</th>
                                <th className="p-6 text-right pr-10">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary-100/30">
                            {leads.map((lead, index) => (
                                <tr
                                    key={lead.id}
                                    onClick={() => setSelectedLead(lead)}
                                    className={`group hover:bg-white transition-all cursor-pointer ${selectedLead?.id === lead.id ? 'bg-white shadow-inner' : ''}`}
                                >
                                    <td className="p-6 pl-10">
                                        <div className="flex items-center gap-5">
                                            <div className="relative">
                                                <div className="w-12 h-12 rounded-[1.25rem] bg-gradient-to-br from-secondary-50 to-secondary-200 text-secondary-700 flex items-center justify-center text-lg font-black shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                    {lead.name.charAt(0)}
                                                </div>
                                                <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-white shadow-lg ${lead.score > 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                                                    <Star size={10} fill="currentColor" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-black text-slate-900 group-hover:text-primary-700 transition-colors uppercase tracking-tighter text-base">{lead.name}</div>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <span className="text-[10px] font-bold text-secondary-500 uppercase tracking-widest">{lead.company}</span>
                                                    <a href={lead.socialUrl} onClick={(e) => e.stopPropagation()} className="text-[#0077b5] hover:scale-110 transition-transform"><Linkedin size={12} /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <StageBadge stage={lead.stage} />
                                    </td>
                                    <td className="p-6">
                                        <div className="flex flex-col items-center gap-1.5 w-28 mx-auto">
                                            <span className={`text-[11px] font-black ${lead.score > 80 ? 'text-emerald-600' : 'text-primary-500'}`}>{lead.score}%</span>
                                            <div className="h-2 w-full bg-secondary-100 rounded-full overflow-hidden shadow-inner p-[1px]">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${lead.score > 80 ? 'bg-emerald-500 opacity-90' : 'bg-primary-500'}`}
                                                    style={{ width: `${lead.score}%`, transitionDelay: `${index * 50}ms` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-secondary-50/50 border border-secondary-200 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:border-primary-200 transition-colors w-fit">
                                            <Zap size={12} className="text-amber-500" fill="currentColor" />
                                            {lead.nextStep}
                                        </div>
                                    </td>
                                    <td className="p-6 font-black text-[10px] text-secondary-400 uppercase tracking-widest whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <History size={14} className="text-secondary-300" />
                                            {lead.lastActivity}
                                        </div>
                                    </td>
                                    <td className="p-6 text-right pr-10">
                                        <div className="flex items-center justify-end gap-2">
                                            {lead.emailDraft && (
                                                <button
                                                    onClick={(e) => handlePreview(lead, e)}
                                                    className="p-2.5 bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white rounded-xl transition-all shadow-sm"
                                                    title="Preview Email"
                                                >
                                                    <Eye size={16} />
                                                </button>
                                            )}
                                            <button className="p-2.5 hover:bg-secondary-50 rounded-xl text-secondary-400 hover:text-slate-900 transition-all">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Email Preview Modal */}
            {showPreview && selectedLead && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setShowPreview(false)}></div>
                    <div className="relative w-full max-w-2xl card p-0 overflow-hidden animate-in slide-in-from-bottom-8 duration-500 shadow-2xl">
                        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-black text-sm uppercase tracking-widest">AI Outreach Preview</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Recipient: {selectedLead.name}</p>
                                </div>
                            </div>
                            <button onClick={() => setShowPreview(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="space-y-4">
                                <div className="p-4 bg-secondary-50 rounded-2xl border border-secondary-200 italic text-slate-700 text-sm leading-relaxed">
                                    "{selectedLead.emailDraft}"
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-black text-primary-600 bg-primary-50 w-fit px-3 py-1 rounded-full border border-primary-100 uppercase tracking-widest">
                                    <Sparkles size={12} /> Personalized using Profile Data
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-white border border-secondary-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-secondary-50 transition-all">
                                    Edit Template
                                </button>
                                <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20">
                                    Send Outreach <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Selection Insight Card */}
            {selectedLead && !showPreview && (
                <div className="card p-8 bg-gradient-to-br from-white to-primary-50/30 animate-in slide-in-from-bottom-8 duration-500 flex flex-col lg:flex-row items-center gap-10 border-primary-200/50 shadow-2xl overflow-hidden relative group">
                    <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                        <Activity size={240} className="text-primary-600" />
                    </div>

                    <div className="flex gap-8 items-center flex-1">
                        <div className="w-20 h-20 rounded-[2.5rem] bg-white shadow-2xl border border-primary-100 flex items-center justify-center text-4xl font-black text-primary-600 group-hover:scale-110 transition-transform duration-500">
                            {selectedLead.name.charAt(0)}
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">Maturation Profile</h3>
                            <div className="flex flex-wrap items-center gap-3">
                                <DetailBadge icon={<Linkedin size={14} />} label="Social Match" color="text-[#0077b5]" />
                                <DetailBadge icon={<MessageSquare size={14} />} label="2 Encounters" color="text-purple-600" />
                                <DetailBadge icon={<Calendar size={14} />} label="14d Active" color="text-slate-600" />
                                <DetailBadge icon={<Star size={14} />} label="High Intent" color="text-amber-600" />
                            </div>
                        </div>
                    </div>

                    <div className="flex shrink-0 gap-4 w-full lg:w-auto">
                        <button className="flex-1 lg:flex-none px-10 py-4 bg-white border border-secondary-200 rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-secondary-50 transition-all shadow-sm active:scale-95">
                            Full Intel
                        </button>
                        <button className="flex-1 lg:flex-none px-10 py-4 bg-slate-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-2xl shadow-slate-900/30 active:scale-95 flex items-center justify-center gap-3 group/btn">
                            Promote <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function PipelineStat({ label, count, color, delay }: any) {
    return (
        <div
            className="card p-6 hover:shadow-2xl transition-all group overflow-hidden relative cursor-default animate-in slide-in-from-bottom-4"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-slate-100 to-transparent rotate-45 translate-x-8 -translate-y-8 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-400 group-hover:text-secondary-700 transition-colors">{label}</span>
                <div className={`w-3 h-3 rounded-full ${color} shadow-lg shadow-${color}/40`}></div>
            </div>
            <p className="text-4xl font-black text-slate-900 mt-2 tracking-tighter italic group-hover:scale-110 transition-transform origin-left">{count}</p>
        </div>
    );
}

function StageBadge({ stage }: { stage: string }) {
    let styles = "bg-secondary-100/50 text-secondary-700 border-secondary-200/50";

    switch (stage) {
        case 'New': styles = "bg-blue-50 text-blue-700 border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.1)]"; break;
        case 'Researching': styles = "bg-slate-50 text-slate-600 border-slate-200"; break;
        case 'Contacted': styles = "bg-amber-50 text-amber-700 border-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.1)]"; break;
        case 'In Conversation': styles = "bg-purple-50 text-purple-700 border-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.1)]"; break;
        case 'Qualified': styles = "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.1)]"; break;
    }

    return (
        <span className={`px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border italic ${styles}`}>
            {stage}
        </span>
    );
}

function DetailBadge({ icon, label, color }: any) {
    return (
        <div className={`flex items-center gap-2 px-3 py-1.5 bg-white border border-secondary-200 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm ${color}`}>
            {icon} {label}
        </div>
    );
}
