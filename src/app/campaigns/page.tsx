'use client';

import { Play, Pause, MoreVertical, Plus, Clock, Target, Users, BarChart3, ArrowRight } from "lucide-react";

const CAMPAIGNS = [
    { id: 1, name: "SaaS Founders EU", status: "Active", progress: 45, target: 1000, scraped: 450, source: "LinkedIn Search" },
    { id: 2, name: "Marketing Directors US", status: "Paused", progress: 12, target: 500, scraped: 60, source: "Sales Nav" },
    { id: 3, name: "E-comm Owners DACH", status: "Completed", progress: 100, target: 200, scraped: 200, source: "LinkedIn Search" },
    { id: 4, name: "CTOs in FinTech", status: "Draft", progress: 0, target: 300, scraped: 0, source: "LinkedIn Search" },
];

export default function CampaignsPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-700">
            <header className="flex justify-between items-center pb-2 border-b border-secondary-100">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Campaigns</h2>
                    <p className="text-secondary-500">Manage and monitor your scraping operations</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-2 btn-primary rounded-lg font-medium text-sm hover:-translate-y-0.5 active:translate-y-0 transition-transform shadow-lg shadow-primary-500/20">
                    <Plus size={18} /> New Campaign
                </button>
            </header>

            <div className="grid grid-cols-1 gap-4">
                {CAMPAIGNS.map((campaign, index) => (
                    <div
                        key={campaign.id}
                        className="card p-6 flex flex-col md:flex-row items-center justify-between group hover:border-primary-200 transition-all duration-300 animate-in slide-in-from-bottom-4"
                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                    >
                        <div className="w-full md:w-1/3 mb-4 md:mb-0">
                            <div className="flex items-center gap-3 mb-2">
                                <div className={`p-2 rounded-lg ${campaign.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-secondary-100 text-secondary-500'}`}>
                                    <BarChart3 size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{campaign.name}</h3>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <StatusBadge status={campaign.status} />
                                        <span className="text-xs text-secondary-400 flex items-center gap-1">
                                            <Clock size={10} /> {campaign.source}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-0 md:px-8 mb-4 md:mb-0">
                            <div className="flex justify-between text-xs mb-2 text-secondary-500 font-medium uppercase tracking-wider">
                                <span>Progress</span>
                                <span className="text-slate-900">{campaign.progress}%</span>
                            </div>
                            <div className="h-2.5 bg-secondary-100 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 ${campaign.status === 'Completed' ? 'bg-green-500' :
                                            campaign.status === 'Paused' ? 'bg-yellow-500' :
                                                'bg-primary-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                                        }`}
                                    style={{ width: `${campaign.progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-secondary-400">
                                <span className="flex items-center gap-1"><Users size={12} /> {campaign.scraped} / {campaign.target} leads</span>
                            </div>
                        </div>

                        <div className="w-full md:w-auto flex items-center justify-end gap-3 md:pl-8 md:border-l border-secondary-100">
                            <button
                                className={`p-3 rounded-xl transition-all border ${campaign.status === 'Active'
                                        ? 'bg-white border-secondary-200 text-secondary-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50'
                                        : 'bg-primary-50 border-primary-100 text-primary-600 hover:bg-primary-100 hover:scale-105 active:scale-95'
                                    }`}
                            >
                                {campaign.status === 'Active' ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                            </button>
                            <button className="p-3 hover:bg-secondary-50 rounded-xl text-secondary-400 hover:text-slate-900 transition-colors border border-transparent hover:border-secondary-200">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function StatusBadge({ status }: { status: string }) {
    let styles = "bg-secondary-100 text-secondary-600";

    switch (status) {
        case 'Active': styles = "bg-green-50 text-green-700 ring-1 ring-green-600/20"; break;
        case 'Paused': styles = "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20"; break;
        case 'Completed': styles = "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20"; break;
        case 'Draft': styles = "bg-secondary-100 text-secondary-600 ring-1 ring-secondary-200"; break;
    }

    return (
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${styles}`}>
            {status}
        </span>
    )
}
