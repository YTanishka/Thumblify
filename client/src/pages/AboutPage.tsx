'use client'
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ZapIcon, BrainCircuitIcon, DownloadIcon, DatabaseIcon, ShieldCheckIcon, RocketIcon } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Enter Your Prompt",
        description: "Describe your video topic, choose aspect ratio, colors, and style to guide the AI.",
        icon: <ZapIcon className="size-6 text-pink-400" />,
    },
    {
        number: "02",
        title: "AI Generates",
        description: "Google Gemini API processes your input and creates a stunning, high-CTR thumbnail instantly.",
        icon: <BrainCircuitIcon className="size-6 text-pink-400" />,
    },
    {
        number: "03",
        title: "Save & Download",
        description: "Your thumbnail is saved to your account. View it anytime in My Generations and download it.",
        icon: <DownloadIcon className="size-6 text-pink-400" />,
    },
];

const techStack = [
    { name: "MongoDB", desc: "Database for storing users & thumbnails", color: "from-green-600/20 to-slate-900" },
    { name: "Express.js", desc: "Backend REST API server", color: "from-slate-600/20 to-slate-900" },
    { name: "React.js", desc: "Fast, modern frontend UI", color: "from-blue-600/20 to-slate-900" },
    { name: "Node.js", desc: "Server-side JavaScript runtime", color: "from-lime-600/20 to-slate-900" },
    { name: "Gemini API", desc: "Google AI for image generation", color: "from-pink-600/20 to-slate-900" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-28 pb-24 bg-[radial-gradient(ellipse_at_top,_#2d0a1f_0%,_#0a0a0a_60%)] px-4 md:px-16 lg:px-24 xl:px-32">

            {/* Hero */}
            <div className="text-center max-w-3xl mx-auto">
                <motion.span
                    className="inline-block px-4 py-1.5 rounded-full border border-pink-500/40 text-pink-400 text-sm font-medium mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 280, damping: 70 }}
                >
                    About Us
                </motion.span>

                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 280, damping: 70 }}
                >
                    We are <span className="text-pink-500">Thumblify</span>
                </motion.h1>

                <motion.p
                    className="text-slate-400 mt-5 text-lg"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 280, damping: 70 }}
                >
                    Making AI-powered thumbnail generation accessible to every creator — fast, free, and effortless.
                </motion.p>
            </div>

            {/* Mission */}
            <motion.div
                className="mt-20 max-w-4xl mx-auto p-px rounded-2xl bg-gradient-to-br from-pink-600 to-slate-800"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70 }}
            >
                <div className="bg-slate-950 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start gap-6">
                    <div className="p-3 rounded-xl bg-pink-600/20 border border-pink-500/30">
                        <RocketIcon className="size-7 text-pink-400" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-3">Our Mission</h2>
                        <p className="text-slate-400 text-base leading-relaxed">
                            Thumbnails are the first impression of any video. Most creators spend hours designing them or pay expensive tools.
                            Thumblify exists to change that — give any creator the power to generate professional, high-CTR thumbnails in seconds using AI, completely free.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* How it Works */}
            <div className="mt-24 max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-pink-500/40 text-pink-400 text-sm font-medium mb-4">
                        How It Works
                    </span>
                    <h2 className="text-3xl font-bold text-white">Three simple steps</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-xl border border-slate-800 bg-slate-950 space-y-4"
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <div className="flex items-center justify-between">
                                {step.icon}
                                <span className="text-4xl font-bold text-slate-800">{step.number}</span>
                            </div>
                            <h3 className="text-base font-medium text-white">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-24 max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-14"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-pink-500/40 text-pink-400 text-sm font-medium mb-4">
                        Tech Stack
                    </span>
                    <h2 className="text-3xl font-bold text-white">Built with modern technology</h2>
                    <p className="text-slate-400 mt-3">Full-stack MERN application powered by Google Gemini AI</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className={`p-5 rounded-xl border border-slate-800 bg-gradient-to-br ${tech.color} min-w-44 text-center`}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        >
                            <div className="flex items-center justify-center mb-2">
                                <DatabaseIcon className="size-5 text-pink-400" />
                            </div>
                            <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
                            <p className="text-slate-400 text-xs mt-1">{tech.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <motion.div
                className="mt-24 text-center"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70 }}
            >
                <div className="inline-flex items-center gap-2 mb-4">
                    <ShieldCheckIcon className="size-5 text-pink-400" />
                    <span className="text-slate-400 text-sm">Free to use. No watermarks. No hidden charges.</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Ready to create your thumbnail?</h2>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <Link to="/generate" className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all text-white px-8 py-3 rounded-full font-medium">
                        Generate Now
                        <ArrowRightIcon className="size-4" />
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 border border-slate-700 hover:border-pink-500 transition text-slate-300 px-8 py-3 rounded-full font-medium">
                        Contact Us
                    </Link>
                </div>
            </motion.div>

        </div>
    );
}