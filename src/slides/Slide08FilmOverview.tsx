import { motion } from 'framer-motion';
import { Film, Users, Award, Heart, Shield, Sparkles } from 'lucide-react';
import CountUp from 'react-countup';
import type { SlideDefinition } from '../types/slides';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export const Slide08FilmOverview = {
  type: 'content',
  title: 'Film Project: "Arab"',
  subtitle: 'A story of faith, family, and resilience in post-9/11 America',
  content: (
    <div className="space-y-8">
      {/* Logline */}
      <motion.div
        variants={fadeInScale}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-10 rounded-lg border-l-4 border-blue-500 shadow-2xl"
      >
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Film className="text-blue-400 flex-shrink-0 mt-1" size={32} />
          </motion.div>
          <div>
            <motion.h3
              className="text-2xl font-light mb-4 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Logline
              <Sparkles className="text-yellow-400" size={20} />
            </motion.h3>
            <motion.p
              className="text-lg text-slate-200 leading-relaxed italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              "After the twin towers fall, two hearts rise against fear and chaos, striving to survive in a steel factory backcountry town forever changed."
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Key Themes */}
      <motion.div
        className="grid grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600 cursor-pointer"
        >
          <div className="flex items-center gap-2 mb-3">
            <Heart className="text-blue-600" size={24} />
            <h4 className="font-semibold text-blue-900 text-lg">Faith & Family</h4>
          </div>
          <p className="text-sm text-blue-700 leading-relaxed">
            The foundation of the story lies in the strength of familial bonds and unwavering faith.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600 cursor-pointer"
        >
          <div className="flex items-center gap-2 mb-3">
            <Shield className="text-purple-600" size={24} />
            <h4 className="font-semibold text-purple-900 text-lg">Overcoming Adversity</h4>
          </div>
          <p className="text-sm text-purple-700 leading-relaxed">
            A celebration of resilience and the will to persevere against societal prejudice.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg border-l-4 border-emerald-600 cursor-pointer"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="text-emerald-600" size={24} />
            <h4 className="font-semibold text-emerald-900 text-lg">Hope & Redemption</h4>
          </div>
          <p className="text-sm text-emerald-700 leading-relaxed">
            A message that transcends cultural divides to inspire unity and understanding.
          </p>
        </motion.div>
      </motion.div>

      {/* Budget Tiers & ROI */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3 }}
        className="bg-slate-50 p-8 rounded-lg border border-slate-200"
      >
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Investment Tiers & Projections</h3>
        <div className="grid grid-cols-3 gap-6">
          {/* $1.9M Budget */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 rounded-lg border-2 border-slate-300 cursor-pointer"
          >
            <div className="text-center mb-4">
              <motion.div
                className="text-3xl font-bold text-slate-900"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                $<CountUp end={1.9} decimals={1} duration={2} />M
              </motion.div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1">Budget</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Production</span>
                <span className="font-semibold">$500K</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Revenue</span>
                <span className="font-semibold text-green-700">$17.5M</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Net Profit</span>
                <span className="font-semibold text-green-700">$16M</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600">ROI</span>
                <motion.span
                  className="font-bold text-emerald-700 text-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <CountUp end={1107} duration={2} />%
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* $5M Budget */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.4)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 rounded-lg border-2 border-blue-500 relative cursor-pointer"
          >
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">RECOMMENDED</span>
            </motion.div>
            <div className="text-center mb-4">
              <motion.div
                className="text-3xl font-bold text-blue-900"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                $<CountUp end={5} duration={2} />M
              </motion.div>
              <div className="text-xs text-blue-600 uppercase tracking-wider mt-1">Budget</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Production</span>
                <span className="font-semibold">$1.5M</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Revenue</span>
                <span className="font-semibold text-green-700">$50M</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Net Profit</span>
                <span className="font-semibold text-green-700">$45M</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600">ROI</span>
                <motion.span
                  className="font-bold text-emerald-700 text-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                >
                  <CountUp end={900} duration={2} />%
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* $10M Budget */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 rounded-lg border-2 border-slate-300 cursor-pointer"
          >
            <div className="text-center mb-4">
              <motion.div
                className="text-3xl font-bold text-slate-900"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                $<CountUp end={10} duration={2} />M
              </motion.div>
              <div className="text-xs text-slate-600 uppercase tracking-wider mt-1">Budget</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Production</span>
                <span className="font-semibold">$7M</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Revenue</span>
                <span className="font-semibold text-green-700">$100M</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-200">
                <span className="text-slate-600">Net Profit</span>
                <span className="font-semibold text-green-700">$90M</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600">ROI</span>
                <motion.span
                  className="font-bold text-emerald-700 text-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                >
                  <CountUp end={900} duration={2} />%
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Target Audience */}
      <motion.div
        className="grid grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-orange-600" size={28} />
            <h4 className="font-semibold text-orange-900 text-lg">Target Audience</h4>
          </div>
          <ul className="space-y-2 text-sm text-orange-800">
            <li>• Family-oriented and faith-based audiences</li>
            <li>• Conservative regions valuing resilience stories</li>
            <li>• Viewers seeking thought-provoking narratives</li>
            <li>• Communities focused on unity and redemption</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-600">
          <div className="flex items-center gap-3 mb-4">
            <Award className="text-indigo-600" size={28} />
            <h4 className="font-semibold text-indigo-900 text-lg">Distribution Strategy</h4>
          </div>
          <div className="space-y-3 text-sm text-indigo-800">
            <div>
              <div className="font-semibold mb-1">$1.9M: Indie/Streamer</div>
              <div className="text-xs">High return, low entry point</div>
            </div>
            <div>
              <div className="font-semibold mb-1">$5M: Hybrid Festival + Streaming</div>
              <div className="text-xs">Balanced scale & reach</div>
            </div>
            <div>
              <div className="font-semibold mb-1">$10M: Theatrical + Global</div>
              <div className="text-xs">Awards-level international release</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} satisfies SlideDefinition;
