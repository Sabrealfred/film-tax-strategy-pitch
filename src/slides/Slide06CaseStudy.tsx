import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Slide06CaseStudy = {
  type: 'content',
  title: 'Case Study: Model C Implementation',
  subtitle: 'LLC + 501(c)(3) Foundation Structure ($5M Budget)',
  content: (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-8">
        {/* Funding Sources */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-l-4 border-purple-600"
        >
          <h3 className="text-xl font-semibold text-purple-900 mb-6">Funding Sources</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-purple-200">
              <span className="text-sm text-purple-700">IRS Deductible Donations</span>
              <span className="text-lg font-bold text-purple-900">
                $<CountUp end={2.0} decimals={1} duration={2} />M
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-purple-200">
              <span className="text-sm text-purple-700">Public/Private Grants</span>
              <span className="text-lg font-bold text-purple-900">
                $<CountUp end={750} duration={2} />K
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-purple-200">
              <span className="text-sm text-purple-700">Commercial Investment</span>
              <span className="text-lg font-bold text-purple-900">
                $<CountUp end={2.25} decimals={2} duration={2} />M
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-base font-semibold text-purple-900">Total Budget</span>
              <span className="text-2xl font-bold text-purple-900">
                $<CountUp end={5.0} decimals={1} duration={2} />M
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cumulative Benefits */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-600"
        >
          <h3 className="text-xl font-semibold text-green-900 mb-6">Cumulative Benefits</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-green-200">
              <span className="text-sm text-green-700">NJ Tax Credits</span>
              <span className="text-lg font-bold text-green-900">
                $<CountUp end={1.85} decimals={2} duration={2} />M
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-green-200">
              <span className="text-sm text-green-700">Section 181 Deduction</span>
              <span className="text-lg font-bold text-green-900">
                Up to $<CountUp end={5} duration={2} />M
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-green-200">
              <span className="text-sm text-green-700">Donations + Grants</span>
              <span className="text-lg font-bold text-green-900">
                $<CountUp end={2.75} decimals={2} duration={2} />M
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-base font-semibold text-green-900">Total Benefit</span>
              <span className="text-2xl font-bold text-green-900">
                $<CountUp end={3.8} decimals={1} duration={2} />M - $<CountUp end={4.5} decimals={1} duration={2} />M
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Structure Flow */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="bg-slate-900 text-white p-8 rounded-lg"
      >
        <h3 className="text-xl font-semibold mb-6">Structure Flow</h3>
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <div className="bg-purple-600 text-white py-4 px-6 rounded-lg mb-2">
              <div className="font-semibold text-lg">501(c)(3) Foundation</div>
              <div className="text-sm text-purple-200 mt-1">Receives donations & grants</div>
            </div>
          </div>

          <ArrowRight className="mx-6 text-blue-400" size={32} />

          <div className="flex-1 text-center">
            <div className="bg-blue-600 text-white py-4 px-6 rounded-lg mb-2">
              <div className="font-semibold text-lg">Production LLC</div>
              <div className="text-sm text-blue-200 mt-1">Subcontracted production work</div>
            </div>
          </div>

          <ArrowRight className="mx-6 text-green-400" size={32} />

          <div className="flex-1 text-center">
            <div className="bg-green-600 text-white py-4 px-6 rounded-lg mb-2">
              <div className="font-semibold text-lg">Commercial Returns</div>
              <div className="text-sm text-green-200 mt-1">Revenue generation & IP rights</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Advantages */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-lg border-l-4 border-slate-700"
      >
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Key Advantages of Model C</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex gap-3">
            <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-slate-900 mb-1">Mission-Driven Image</div>
              <div className="text-sm text-slate-600">Strong cultural and artistic positioning in the market</div>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-slate-900 mb-1">Low Risk Profile</div>
              <div className="text-sm text-slate-600">Well-documented IRS framework with clear compliance path</div>
            </div>
          </div>
          <div className="flex gap-3">
            <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
            <div>
              <div className="font-semibold text-slate-900 mb-1">Dual Revenue Streams</div>
              <div className="text-sm text-slate-600">Combines philanthropic funding with commercial returns</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} satisfies SlideDefinition;
