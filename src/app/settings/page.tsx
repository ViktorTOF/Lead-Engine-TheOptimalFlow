'use client';

import { Save, User, Lock, Bell, Mail, Shield, AlertCircle } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-3xl space-y-8 mx-auto animate-in fade-in duration-700">
            <header className="pb-4 border-b border-secondary-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Account Settings</h2>
                <p className="text-secondary-500">Manage your profile, security, and preferences</p>
            </header>

            {/* Profile Section */}
            <div className="card p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-700 delay-100">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                        <User size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Profile Information</h3>
                        <p className="text-sm text-secondary-500">Update your personal details</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                        <label className="text-sm font-medium text-slate-700 mb-2 block group-focus-within:text-primary-600 transition-colors">
                            Full Name
                        </label>
                        <input
                            type="text"
                            defaultValue="Viktor"
                            className="w-full bg-secondary-50 border border-secondary-200 rounded-lg p-3 text-slate-900 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all text-sm placeholder:text-secondary-400"
                        />
                    </div>

                    <div className="group">
                        <label className="text-sm font-medium text-slate-700 mb-2 block group-focus-within:text-primary-600 transition-colors">
                            Email Address
                        </label>
                        <input
                            type="email"
                            defaultValue="viktor@example.com"
                            disabled
                            className="w-full bg-secondary-100 border border-secondary-200 rounded-lg p-3 text-secondary-500 cursor-not-allowed outline-none text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Security Section (Secure Flow) */}
            <div className="card p-8 space-y-6 animate-in slide-in-from-bottom-4 duration-700 delay-200 border-l-4 border-l-blue-500">
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Security & Authentication</h3>
                        <p className="text-sm text-secondary-500">Manage your password securely</p>
                    </div>
                </div>

                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100 flex items-start gap-3">
                    <AlertCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
                    <div className="text-sm text-blue-900">
                        <p className="font-semibold mb-1">Secure Password Change</p>
                        <p className="text-blue-700 leading-relaxed">
                            Verification required. Click below to send a reset link to your email.
                        </p>
                    </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-secondary-200 text-slate-700 font-medium rounded-lg hover:bg-secondary-50 hover:text-slate-900 transition-all shadow-sm">
                    <Mail size={16} /> Send Password Reset Email
                </button>
            </div>

            {/* Notifications Section */}
            <div className="card p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-purple-50 text-purple-600 ring-1 ring-purple-100">
                        <Bell size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Notifications</h3>
                        <p className="text-sm text-secondary-500">Choose what you want to be notified about</p>
                    </div>
                </div>

                <div className="space-y-4 text-sm font-medium">
                    <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg border border-secondary-100">
                        <span>Campaign Updates</span>
                        <input type="checkbox" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg border border-secondary-100">
                        <span>Lead Alerts</span>
                        <input type="checkbox" defaultChecked />
                    </div>
                </div>

                <div className="pt-6 flex justify-end border-t border-secondary-100">
                    <button className="flex items-center gap-2 px-8 py-3 btn-primary rounded-lg font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all">
                        <Save size={18} /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
