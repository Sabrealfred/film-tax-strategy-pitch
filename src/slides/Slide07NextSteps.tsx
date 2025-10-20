import { motion } from 'framer-motion';
import { Calendar, FileText, Map, Handshake } from 'lucide-react';
import CountUp from 'react-countup';
import type { SlideDefinition } from '../types/slides';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const Slide07NextSteps = {
  type: 'content',
  title: 'Next Steps & Engagement',
  subtitle: 'Strategic implementation roadmap',
  content: (
    <div className="space-y-8">
      {/* Engagement Process */}
      <motion.div
        className="grid grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeIn} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <Calendar size={24} />
            </div>
            <div className="text-lg font-semibold text-blue-900">Phase 1</div>
          </div>
          <div className="text-sm font-semibold text-blue-900 mb-2">Kickoff Meeting</div>
          <div className="text-xs text-blue-700 leading-relaxed">
            Initial consultation to understand objectives, timeline, and risk appetite. Review current structure.
          </div>
          <div className="text-xs text-blue-600 font-semibold mt-3">Duration: 1-2 weeks</div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-600 text-white rounded-lg">
              <FileText size={24} />
            </div>
            <div className="text-lg font-semibold text-purple-900">Phase 2</div>
          </div>
          <div className="text-sm font-semibold text-purple-900 mb-2">Document Review</div>
          <div className="text-xs text-purple-700 leading-relaxed">
            Comprehensive analysis of existing entities, contracts, IP ownership, and tax filings.
          </div>
          <div className="text-xs text-purple-600 font-semibold mt-3">Duration: 2-3 weeks</div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg border-l-4 border-emerald-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-600 text-white rounded-lg">
              <Map size={24} />
            </div>
            <div className="text-lg font-semibold text-emerald-900">Phase 3</div>
          </div>
          <div className="text-sm font-semibold text-emerald-900 mb-2">Strategic Roadmap</div>
          <div className="text-xs text-emerald-700 leading-relaxed">
            Detailed implementation plan with timeline, milestones, cost projections, and compliance requirements.
          </div>
          <div className="text-xs text-emerald-600 font-semibold mt-3">Duration: 1-2 weeks</div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-orange-600 text-white rounded-lg">
              <Handshake size={24} />
            </div>
            <div className="text-lg font-semibold text-orange-900">Phase 4</div>
          </div>
          <div className="text-sm font-semibold text-orange-900 mb-2">Implementation</div>
          <div className="text-xs text-orange-700 leading-relaxed">
            Execute chosen strategy with legal counsel, accountants, and banking partners. Ongoing support.
          </div>
          <div className="text-xs text-orange-600 font-semibold mt-3">Duration: Varies by model</div>
        </motion.div>
      </motion.div>

      {/* Film Project Overview */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-10 rounded-lg border-l-4 border-blue-500"
      >
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <div className="text-2xl font-light mb-3">Film Project: "Arab"</div>
            <div className="text-base text-slate-300 mb-4">
              A post-9/11 drama exploring faith, family, and resilience in a rural steel town
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-300 mt-6">
              <div>
                <div className="text-blue-400 font-semibold mb-1">Budget Tiers</div>
                <div>$1.9M · $5M · $10M</div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-1">Target ROI</div>
                <div>900% - 1107%</div>
              </div>
              <div>
                <div className="text-blue-400 font-semibold mb-1">Audience</div>
                <div>Faith-based & Family</div>
              </div>
            </div>
          </div>
          <div className="text-right ml-8">
            <div className="text-6xl font-light text-blue-400">
              $<CountUp end={90} duration={2} />M
            </div>
            <div className="text-base text-slate-400 mt-2">Projected Revenue (10M Budget)</div>
          </div>
        </div>
      </motion.div>

      {/* Payment Details */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.7 }}
        className="bg-slate-50 p-8 rounded-lg border border-slate-200"
      >
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Payment Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Company Name:</span>
                <span className="font-semibold text-slate-900">Marsala Solutions Incorporate</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Account Number:</span>
                <span className="font-mono text-slate-900">101354405</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Routing Number:</span>
                <span className="font-mono text-slate-900">211370150</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600">Address:</span>
                <span className="text-slate-900 text-right">221 River St<br/>Hoboken, NJ 07030</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-slate-600 text-xs mb-1">Primary Contact</div>
                <div className="font-semibold text-slate-900">Strategic Tax Advisory Team</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-slate-600 text-xs mb-1">Service Type</div>
                <div className="font-semibold text-slate-900">Film Production Tax Optimization</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-slate-600 text-xs mb-1">Expected Response Time</div>
                <div className="font-semibold text-slate-900">24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} satisfies SlideDefinition;
