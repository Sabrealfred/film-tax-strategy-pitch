import { Building2, Globe, Heart, Layers, Film } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import type { SlideDefinition } from '../types/slides';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Slide03StrategicModels = {
  type: 'content',
  title: 'Strategic Options Overview',
  subtitle: 'Four pathways from simple to comprehensive optimization',
  content: (
    <div className="space-y-8">
      {/* Film Context Banner */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        animate="show"
        className="bg-gradient-to-r from-blue-900 to-slate-800 text-white p-6 rounded-lg border-l-4 border-blue-500 flex items-center gap-4"
      >
        <Film className="text-blue-400 flex-shrink-0" size={36} />
        <div className="flex-1">
          <div className="text-lg font-light mb-1">Optimal Structure for "Arab" Film Project</div>
          <div className="text-sm text-slate-300">Each model scales with production budget: $1.9M, $5M, or $10M tiers</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-400">Target Benefit</div>
          <div className="text-2xl font-light text-emerald-400">
            $<CountUp end={8.2} decimals={1} duration={2} />M
          </div>
        </div>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Model A */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 border-l-4 border-slate-600 p-8 rounded-r-lg cursor-pointer"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-slate-600 text-white rounded-lg">
              <Building2 size={28} />
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-slate-900 mb-1">Model A</div>
              <div className="text-lg font-light text-slate-700">Standalone Commercial LLC</div>
            </div>
          </div>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Traditional structure leveraging standard deductions. Optimized for speed-to-market and operational simplicity.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Estimated Benefit:</span>
              <span className="font-semibold text-slate-900">$1.85M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Setup Cost:</span>
              <span className="font-semibold text-slate-900">$35-50K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Risk Level:</span>
              <span className="text-green-600 font-semibold">Low-Moderate</span>
            </div>
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
            Best for: Speed & Simplicity
          </div>
        </motion.div>

        {/* Model B */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(59,130,246,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 p-8 rounded-r-lg cursor-pointer"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <Globe size={28} />
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-blue-900 mb-1">Model B</div>
              <div className="text-lg font-light text-blue-700">LLC + Offshore IP Holding</div>
            </div>
          </div>
          <p className="text-sm text-blue-600 mb-6 leading-relaxed">
            Commercial entity paired with offshore licensing vehicle for international IP monetization and royalty optimization.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-blue-600">Estimated Benefit:</span>
              <span className="font-semibold text-blue-900">$3.5-4M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-600">Setup Cost:</span>
              <span className="font-semibold text-blue-900">$85-135K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-blue-600">Risk Level:</span>
              <span className="text-orange-600 font-semibold">Moderate-High</span>
            </div>
          </div>
          <div className="text-xs text-blue-700 uppercase tracking-wider font-semibold">
            Best for: Global IP Monetization
          </div>
        </motion.div>

        {/* Model C */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(147,51,234,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 p-8 rounded-r-lg cursor-pointer"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-purple-600 text-white rounded-lg">
              <Heart size={28} />
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-purple-900 mb-1">Model C</div>
              <div className="text-lg font-light text-purple-700">LLC + 501(c)(3) Foundation</div>
            </div>
          </div>
          <p className="text-sm text-purple-600 mb-6 leading-relaxed">
            Hybrid nonprofit-commercial structure. Enables tax-deductible donations and cultural grant access.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-purple-600">Estimated Benefit:</span>
              <span className="font-semibold text-purple-900">$3.8-4.5M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-600">Setup Cost:</span>
              <span className="font-semibold text-purple-900">$55-80K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-purple-600">Risk Level:</span>
              <span className="text-green-600 font-semibold">Low</span>
            </div>
          </div>
          <div className="text-xs text-purple-700 uppercase tracking-wider font-semibold">
            Best for: Donations & Grants
          </div>
        </motion.div>

        {/* Model D */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(16,185,129,0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-l-4 border-emerald-600 p-8 rounded-r-lg cursor-pointer"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-emerald-600 text-white rounded-lg">
              <Layers size={28} />
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-emerald-900 mb-1">Model D</div>
              <div className="text-lg font-light text-emerald-700">Advanced Full Stack</div>
            </div>
          </div>
          <p className="text-sm text-emerald-600 mb-6 leading-relaxed">
            Comprehensive integration: LLC + Offshore + Foundation + Captive Insurance + R&D Credits.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-emerald-600">Estimated Benefit:</span>
              <span className="font-semibold text-emerald-900">$8.165M</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-emerald-600">Setup Cost:</span>
              <span className="font-semibold text-emerald-900">$120-180K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-emerald-600">Risk Level:</span>
              <span className="text-orange-600 font-semibold">High</span>
            </div>
          </div>
          <div className="text-xs text-emerald-700 uppercase tracking-wider font-semibold">
            Best for: Maximum Optimization
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} satisfies SlideDefinition;
