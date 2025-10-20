import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Play, Film } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export const Slide09Timeline = {
  type: 'content',
  title: 'Production Timeline & Milestones',
  subtitle: '"Arab" film development & execution roadmap',
  content: (
    <div className="space-y-8">
      {/* Timeline Header */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="bg-gradient-to-r from-blue-900 to-slate-800 text-white p-6 rounded-lg border-l-4 border-blue-500 flex items-center gap-4"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Clock className="text-blue-400" size={40} />
        </motion.div>
        <div className="flex-1">
          <div className="text-2xl font-light mb-2">18-Month Production Cycle</div>
          <div className="text-sm text-slate-300">From pre-production to theatrical release</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-400">Start Date</div>
          <div className="text-xl font-light text-blue-300">Q1 2026</div>
        </div>
      </motion.div>

      {/* Timeline Phases */}
      <motion.div
        className="space-y-4"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Phase 1: Pre-Production */}
        <motion.div
          variants={slideInLeft}
          whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(59,130,246,0.2)" }}
          className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-blue-600 cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-lg">
              <Calendar size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-semibold text-blue-900">Phase 1: Pre-Production</h4>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">3 MONTHS</span>
              </div>
              <div className="text-sm text-slate-600 mb-3">Jan - Mar 2026</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Finalize script & storyboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Cast principal actors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Secure filming locations (NJ)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Establish tax structure entities</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phase 2: Principal Photography */}
        <motion.div
          variants={slideInLeft}
          whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(147,51,234,0.2)" }}
          className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border-l-4 border-purple-600 cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-600 text-white rounded-lg">
              <Film size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-semibold text-purple-900">Phase 2: Principal Photography</h4>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">2 MONTHS</span>
              </div>
              <div className="text-sm text-slate-600 mb-3">Apr - May 2026</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">40 shooting days in Jersey City</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Capture NJ tax credit documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Daily footage review & approval</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Production insurance & compliance</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phase 3: Post-Production */}
        <motion.div
          variants={slideInLeft}
          whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(16,185,129,0.2)" }}
          className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-lg border-l-4 border-emerald-600 cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-600 text-white rounded-lg">
              <Play size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-semibold text-emerald-900">Phase 3: Post-Production</h4>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold">6 MONTHS</span>
              </div>
              <div className="text-sm text-slate-600 mb-3">Jun - Nov 2026</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Editing & color correction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Sound design & music score</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">VFX & final render</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Festival submission preparation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phase 4: Distribution */}
        <motion.div
          variants={slideInLeft}
          whileHover={{ x: 10, boxShadow: "0 10px 30px rgba(234,88,12,0.2)" }}
          className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-lg border-l-4 border-orange-600 cursor-pointer"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-600 text-white rounded-lg">
              <CheckCircle size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-semibold text-orange-900">Phase 4: Distribution & Release</h4>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">7 MONTHS</span>
              </div>
              <div className="text-sm text-slate-600 mb-3">Dec 2026 - Jun 2027</div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Film festival circuit (Q4 2026)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Marketing & publicity campaign</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Theatrical release (Q2 2027)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="text-slate-700">Streaming platform deals</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Key Milestones Summary */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.8 }}
        className="bg-slate-50 p-6 rounded-lg border border-slate-200"
      >
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Critical Tax Compliance Milestones</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <div className="font-semibold text-blue-900 mb-1">NJ Tax Credit Filing</div>
            <div className="text-slate-600">June 2026 - Post-production starts</div>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <div className="font-semibold text-purple-900 mb-1">Section 181 Deduction</div>
            <div className="text-slate-600">Dec 2026 - Tax year filing</div>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-emerald-500">
            <div className="font-semibold text-emerald-900 mb-1">IP Transfer to Offshore</div>
            <div className="text-slate-600">Jan 2027 - Before distribution</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} satisfies SlideDefinition;
