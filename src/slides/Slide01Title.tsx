import type { SlideDefinition } from '../types/slides';

export const Slide01Title = {
  type: 'title',
  content: (
    <div className="h-full flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
        <div>
          <div className="text-xs sm:text-sm font-light tracking-widest text-slate-400 mb-2">CONFIDENTIAL</div>
          <div className="text-xs text-slate-500">Strategic Tax Advisory</div>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-xs text-slate-400">October 2025</div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8 mb-8">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight">
            TAX STRUCTURE STRATEGY
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-slate-300 mb-2">
            Film Project: "Arab" | Jersey City, NJ
          </div>
          <div className="text-xs sm:text-sm text-slate-400 mt-4">
            Multi-Tier Budget Optimization Framework | $1.9M - $10M
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
        <div className="text-xs text-slate-500">
          <div>Marsala Solutions Incorporate</div>
          <div className="mt-1">221 River St, Hoboken, NJ 07030</div>
        </div>
        <div className="text-xs text-slate-500 text-left sm:text-right">
          <div>Strategic Tax Advisory Services</div>
        </div>
      </div>
    </div>
  )
} satisfies SlideDefinition;
