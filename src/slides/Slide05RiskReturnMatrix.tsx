import { motion } from 'framer-motion';
import { TrendingUp, Shield, DollarSign, Clock } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const Slide05RiskReturnMatrix = {
  type: 'content',
  title: 'Risk-Return Assessment Matrix',
  subtitle: 'Strategic evaluation across key dimensions',
  content: (
    <div className="space-y-8">
      <motion.div
        className="overflow-x-auto"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="py-4 px-6 text-left font-semibold">Key Dimension</th>
              <th className="py-4 px-4 text-center font-semibold">Model A</th>
              <th className="py-4 px-4 text-center font-semibold">Model B</th>
              <th className="py-4 px-4 text-center font-semibold">Model C</th>
              <th className="py-4 px-4 text-center font-semibold">Model D</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">IP Monetization Potential</td>
              <td className="py-4 px-4 text-center text-slate-600">Limited</td>
              <td className="py-4 px-4 text-center text-blue-700 font-semibold">High</td>
              <td className="py-4 px-4 text-center text-slate-600">Moderate</td>
              <td className="py-4 px-4 text-center text-emerald-700 font-semibold">Very High</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Public Positioning</td>
              <td className="py-4 px-4 text-center text-xs">Commercial</td>
              <td className="py-4 px-4 text-center text-xs">Corporate/Global</td>
              <td className="py-4 px-4 text-center text-xs">Cultural/Mission-Driven</td>
              <td className="py-4 px-4 text-center text-xs">Institutional/Sophisticated</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Tax Compliance Risk</td>
              <td className="py-4 px-4 text-center text-green-600 font-semibold">Low-Moderate</td>
              <td className="py-4 px-4 text-center text-orange-600 font-semibold">Moderate-High</td>
              <td className="py-4 px-4 text-center text-green-600 font-semibold">Low</td>
              <td className="py-4 px-4 text-center text-red-600 font-semibold">High</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Financial Return Potential</td>
              <td className="py-4 px-4 text-center text-slate-600">Moderate</td>
              <td className="py-4 px-4 text-center text-blue-700 font-semibold">High</td>
              <td className="py-4 px-4 text-center text-purple-700 font-semibold">Moderate-High</td>
              <td className="py-4 px-4 text-center text-emerald-700 font-semibold">Very High</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Implementation Timeline</td>
              <td className="py-4 px-4 text-center text-xs">2-4 weeks</td>
              <td className="py-4 px-4 text-center text-xs">8-12 weeks</td>
              <td className="py-4 px-4 text-center text-xs">6-10 weeks</td>
              <td className="py-4 px-4 text-center text-xs">12-16 weeks</td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Ongoing Maintenance</td>
              <td className="py-4 px-4 text-center text-xs">Low</td>
              <td className="py-4 px-4 text-center text-xs">High</td>
              <td className="py-4 px-4 text-center text-xs">Moderate</td>
              <td className="py-4 px-4 text-center text-xs">Very High</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      <motion.div
        className="grid grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeIn} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-600 text-white rounded-lg">
              <TrendingUp size={20} />
            </div>
            <div className="font-semibold text-blue-900">ROI Potential</div>
          </div>
          <div className="text-sm text-blue-700 leading-relaxed">
            Model D offers 163% ROI, but requires significant upfront investment and ongoing compliance management.
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-600 text-white rounded-lg">
              <Shield size={20} />
            </div>
            <div className="font-semibold text-green-900">Risk Profile</div>
          </div>
          <div className="text-sm text-green-700 leading-relaxed">
            Model A & C offer lowest risk profiles with strong compliance track records and clear regulatory frameworks.
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-purple-600 text-white rounded-lg">
              <DollarSign size={20} />
            </div>
            <div className="font-semibold text-purple-900">Cost Efficiency</div>
          </div>
          <div className="text-sm text-purple-700 leading-relaxed">
            Model C provides optimal cost-to-benefit ratio with $3.8-4.5M benefit at $55-80K setup cost.
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-orange-600 text-white rounded-lg">
              <Clock size={20} />
            </div>
            <div className="font-semibold text-orange-900">Time to Value</div>
          </div>
          <div className="text-sm text-orange-700 leading-relaxed">
            Model A delivers fastest implementation (2-4 weeks) with immediate access to NJ credits and Section 181.
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} satisfies SlideDefinition;
