import { motion } from 'framer-motion';
import { Check, X, AlertCircle } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
};

export const Slide04ComparisonMatrix = {
  type: 'content',
  title: 'Financial Benefit Comparison Matrix',
  subtitle: 'Comprehensive analysis across all tax components',
  content: (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="py-4 px-6 text-left font-semibold text-base">Tax Component</th>
              <th className="py-4 px-4 text-center font-semibold">Model A<br/><span className="text-xs font-normal text-slate-300">Standalone LLC</span></th>
              <th className="py-4 px-4 text-center font-semibold">Model B<br/><span className="text-xs font-normal text-slate-300">LLC + Offshore</span></th>
              <th className="py-4 px-4 text-center font-semibold">Model C<br/><span className="text-xs font-normal text-slate-300">LLC + 501(c)(3)</span></th>
              <th className="py-4 px-4 text-center font-semibold">Model D<br/><span className="text-xs font-normal text-slate-300">Full Stack</span></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">NJ Tax Credits</td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">$1.85M</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">$1.85M</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">$1.85M</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">$1.85M</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Section 181 Deduction</td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-xs">Up to $5M</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-xs">Up to $5M</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-xs">Up to $5M</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-xs">Up to $5M</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Offshore IP Licensing</td>
              <td className="py-4 px-4 text-center">
                <X className="text-red-500 mx-auto" size={20} />
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">~$750K</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <AlertCircle className="text-yellow-600" size={20} />
                  <span className="text-xs">Limited</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">~$750K</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Tax-Deductible Donations</td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><Check className="text-green-600 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><Check className="text-green-600 mx-auto" size={20} /></td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Grant Access</td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">$750K</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-xs">Included</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50 bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">Captive Insurance</td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">Up to $2M</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-slate-50">
              <td className="py-4 px-6 font-semibold text-slate-900">R&D Tax Credits</td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center"><X className="text-red-500 mx-auto" size={20} /></td>
              <td className="py-4 px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Check className="text-green-600" size={20} />
                  <span className="text-sm font-semibold">~$250K</span>
                </div>
              </td>
            </tr>
            <tr className="bg-slate-100">
              <td className="py-5 px-6 font-bold text-slate-900 text-base">TOTAL ESTIMATED BENEFIT</td>
              <td className="py-5 px-4 text-center font-bold text-lg text-slate-900">~$1.85M</td>
              <td className="py-5 px-4 text-center font-bold text-lg text-blue-700">~$3.5-4M</td>
              <td className="py-5 px-4 text-center font-bold text-lg text-purple-700">~$3.8-4.5M</td>
              <td className="py-5 px-4 text-center font-bold text-lg text-emerald-700">~$8.165M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
} satisfies SlideDefinition;
