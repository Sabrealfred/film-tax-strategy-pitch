import { CheckCircle, Film, TrendingUp, Shield, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import type { SlideDefinition } from '../types/slides';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 }
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

export const Slide02ExecutiveSummary = {
  type: 'content',
  title: 'Executive Summary',
  subtitle: 'Strategic tax optimization for film production',
  content: (
    <div className="space-y-8">
      <motion.div
        className="grid grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-blue-900 mb-3">
            $<CountUp end={5} duration={1.5} />M
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-700">Production Budget</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-green-900 mb-3">
            $<CountUp end={8.2} decimals={1} duration={1.5} />M
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-green-700">Max Tax Benefit</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-purple-900 mb-3">
            <CountUp end={4} duration={1.5} />
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-purple-700">Strategic Models</div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-r-lg"
        >
          <div className="text-4xl font-light text-orange-900 mb-3">
            <CountUp end={163} duration={1.5} />%
          </div>
          <div className="text-sm font-semibold uppercase tracking-wider text-orange-700">Peak ROI</div>
        </motion.div>
      </motion.div>

      <div className="bg-slate-900 text-white p-10 rounded-lg">
        <h3 className="text-2xl font-light mb-6 border-b border-slate-700 pb-4">Strategic Approach</h3>
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-base">
          <div className="flex gap-4">
            <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-slate-100 mb-1">State Tax Credits</div>
              <div className="text-slate-300 text-base">NJ Film Tax Credit Program: up to $1.85M in credits</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-slate-100 mb-1">Federal Deductions</div>
              <div className="text-slate-300 text-base">Section 181 deduction: up to $5M first-year write-off</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-slate-100 mb-1">IP Protection</div>
              <div className="text-slate-300 text-base">Offshore licensing structures for international monetization</div>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <div className="font-semibold text-slate-100 mb-1">Nonprofit Access</div>
              <div className="text-slate-300 text-base">501(c)(3) foundation for tax-deductible donations & grants</div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={fadeInScale}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white p-10 rounded-lg border border-blue-500 shadow-2xl"
      >
        <div className="flex items-start gap-6 mb-6">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Film className="text-blue-400" size={48} />
          </motion.div>
          <div className="flex-1">
            <div className="text-3xl font-light mb-3 text-blue-100">Film Project: "Arab"</div>
            <div className="text-lg text-slate-300 leading-relaxed italic mb-4">
              "After the twin towers fall, two hearts rise against fear and chaos, striving to survive in a steel factory backcountry town forever changed."
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>Faith-based audiences</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>Multiple protection layers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} />
                <span>900-1107% ROI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-800">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 p-4 rounded-lg text-center"
          >
            <div className="text-2xl font-light text-blue-400 mb-1">
              $<CountUp end={1.9} decimals={1} duration={2} />M
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Indie Tier</div>
            <div className="text-xs text-emerald-400 mt-2">1107% ROI</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600/30 p-4 rounded-lg text-center border-2 border-blue-500"
          >
            <div className="text-2xl font-light text-blue-300 mb-1">
              $<CountUp end={5} duration={2} />M
            </div>
            <div className="text-xs text-blue-200 uppercase tracking-wider font-semibold">Recommended</div>
            <div className="text-xs text-emerald-400 mt-2">900% ROI</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 p-4 rounded-lg text-center"
          >
            <div className="text-2xl font-light text-blue-400 mb-1">
              $<CountUp end={10} duration={2} />M
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Theatrical</div>
            <div className="text-xs text-emerald-400 mt-2">900% ROI</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} satisfies SlideDefinition;
