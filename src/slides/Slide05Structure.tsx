import type { SlideDefinition } from '../types/slides';

const withOpacity = (color: string, alphaHex = '22') => {
  if (!color.startsWith('#')) return color;
  return color.length === 7 ? `${color}${alphaHex}` : color;
};

const renderArrowDown = ({
  color,
  label,
  description
}: {
  color: string;
  label: string;
  description?: string;
}) => (
  <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-wide font-semibold text-slate-500 text-center">
    <span
      className="px-3 py-1 rounded-full"
      style={{ backgroundColor: withOpacity(color, '1F'), color }}
    >
      {label}
    </span>
    <div className="h-12 w-1 rounded-full" style={{ backgroundColor: color }} />
    <div
      className="w-0 h-0"
      style={{
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
        borderTop: `12px solid ${color}`
      }}
    />
    {description && (
      <div className="normal-case font-medium tracking-normal text-slate-500">{description}</div>
    )}
  </div>
);

const renderArrowRight = ({
  color,
  label,
  description
}: {
  color: string;
  label: string;
  description?: string;
}) => (
  <div className="flex flex-col items-start gap-1 text-xs uppercase tracking-wide font-semibold text-slate-500">
    <div className="flex items-center gap-3">
      <span
        className="px-3 py-1 rounded-full"
        style={{ backgroundColor: withOpacity(color, '1F'), color }}
      >
        {label}
      </span>
      <div className="h-1 w-20 rounded-full" style={{ backgroundColor: color }} />
      <div
        className="w-0 h-0"
        style={{
          borderTop: '7px solid transparent',
          borderBottom: '7px solid transparent',
          borderLeft: `12px solid ${color}`
        }}
      />
    </div>
    {description && (
      <div className="normal-case tracking-normal text-slate-500 italic font-medium">{description}</div>
    )}
  </div>
);
export const Slide05Structure = {
  type: 'content',
  title: 'Structure',
  subtitle: 'How the Swiss acquisition, global feeders, and SAFE vehicle align capital flows',
  content: (
    <div className="space-y-8 text-sm md:text-base">
      <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-6">
        <div className="space-y-6">
          <div className="border border-slate-300 bg-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">MIRA Labs Swiss</h3>
            <div className="text-sm text-slate-700 mt-1">Swiss Holding Company</div>
          </div>

          <div className="border border-rose-200 border-dashed bg-white p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">MIRA Labs SRO</h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <div>
                <span className="font-semibold text-slate-900">License:</span> SO-FIT, SRO Para-Banking Financial Intermediary &amp; FINIG 17 AM
                license, under FINMA.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Place of incorporation:</span> Geneva, Switzerland.
              </div>
              <div>
                <span className="font-semibold text-slate-900">Banking relationship:</span> Vontobel (Geneva), Oddo BHF (Switzerland), CA
                Indosuez (Luxembourg) (active banking relationships).
              </div>
              <div>
                <span className="font-semibold text-slate-900">Profile:</span> Asset &amp; Portfolio Management, Financial Intermediation,
                Payment &amp; Remittance Services.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-emerald-300 border-dashed bg-emerald-50 text-emerald-900 text-center px-4 py-3 font-medium">
                Non-US Investor Master
              </div>
              <div className="border border-slate-300 border-dashed bg-slate-50 text-slate-700 text-center px-4 py-3 font-medium">
                ADGM License Support of Saudi Funds
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide font-semibold text-slate-600">
              <div className="flex flex-col gap-1 text-emerald-600">
                {renderArrowRight({
                  color: '#10b981',
                  label: 'AUM Flow',
                  description: 'Segregated master funds allocate capital into the Swiss SRO stack.'
                })}
                <span className="text-slate-700 font-semibold uppercase tracking-widest">To MIRA Labs SRO</span>
              </div>
              <div className="flex flex-col gap-1 text-emerald-600">
                {renderArrowRight({
                  color: '#10b981',
                  label: 'AUM Reporting',
                  description: 'Regulatory oversight and financial reporting consolidate at the holding level.'
                })}
                <span className="text-slate-700 font-semibold uppercase tracking-widest">To MIRA Labs Swiss</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-sky-200 border-dashed bg-sky-50/40 p-6 space-y-5 shadow-sm">
            <div className="text-xs uppercase tracking-wide font-semibold text-sky-700">AUM Contribution</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-emerald-50 text-emerald-900 border border-emerald-100 px-4 py-3 text-center font-medium leading-snug">
                US Investors<br />Treasuries<br />Regulated Products<br />Stablecoins
              </div>
              <div className="bg-teal-50 text-teal-900 border border-teal-100 px-4 py-3 text-center font-medium leading-snug">
                Asian Investors
              </div>
              <div className="bg-sky-50 text-sky-900 border border-sky-100 px-4 py-3 text-center font-medium leading-snug">
                Boutique Funds<br />Family Offices<br />Sovereign Wealth
              </div>
            </div>
            <div className="flex justify-center">
              {renderArrowDown({
                color: '#0ea5e9',
                label: 'Capital Flow',
                description: 'Allocator capital enters dedicated feeder vehicles.'
              })}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-[230px_minmax(0,1fr)] gap-4 items-start">
              <div className="border border-slate-200 bg-white p-4 space-y-3 shadow-sm">
                <div className="text-base font-semibold text-slate-900">AUM Feeders</div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  These are segregated vehicles designed for specific use cases to manage capital across the world. They all have the ability
                  to license technology from MiraLabs USA.
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Ownership</div>
                  <div className="text-xs text-slate-600 mt-1">
                    Based on case by case basis, but all AUM reporting rolls up into MIRALabs Swiss.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="border border-slate-200 bg-white text-center px-4 py-3 font-medium text-slate-900 shadow-sm">
                  Mira Partners<br />DE Corp
                </div>
                <div className="border border-slate-200 bg-white text-center px-4 py-3 font-medium text-slate-900 shadow-sm">
                  Singapore<br />Feeder
                </div>
                <div className="border border-slate-200 bg-white text-center px-4 py-3 font-medium text-slate-900 shadow-sm">
                  Case Specific<br />Feeders
                </div>
              </div>
            </div>
          </div>

          <div className="border border-indigo-200 border-dashed bg-white p-6 space-y-5 shadow-sm">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="text-xs uppercase tracking-wide font-semibold text-indigo-700">SAFE Investable</div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                {renderArrowRight({
                  color: '#10b981',
                  label: 'Licensing Agreements',
                  description: 'Commercial contracts route revenue from regulated entities to the U.S. tech hub.'
                })}
                <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">$ Revenue Accrual</span>
              </div>
            </div>
            <div className="border border-indigo-100 bg-indigo-50 p-5 space-y-3 shadow-sm">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <h3 className="text-lg font-semibold text-slate-900">Mira Labs USA</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  {renderArrowRight({
                    color: '#10b981',
                    label: '$ Profit Share',
                    description: 'SAFE investors participate pro-rata in distribution waterfall.'
                  })}
                  <span className="text-xs uppercase tracking-wide font-semibold text-emerald-600">SAFE Investors</span>
                </div>
              </div>
              <div className="text-sm text-slate-700 leading-relaxed">
                MiraLabs USA: This is the technology arm of MIRALabs and open for SAFE investors. These entities generate revenue by licensing
                their technologies to MIRALabs SRO, the AUM Feeders, and external 3rd parties.
              </div>
              <div className="text-sm text-slate-700 leading-relaxed">
                MiraLabs USA uniquely owns all the exclusive rights and IP designed and developed under the R&amp;D Arm.
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold">Ownership</div>
                <div className="text-sm text-slate-700 leading-relaxed mt-1">
                  Equity based via SAFE split with MIRALabs Swiss.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="border border-slate-200 bg-slate-50 text-center px-4 py-3 font-medium text-slate-900 shadow-sm">
                AI Engine
              </div>
              <div className="border border-slate-200 bg-slate-50 text-center px-4 py-3 font-medium text-slate-900 shadow-sm">
                L1/L2 Partnerships<br />and Integrations
              </div>
              <div className="border border-slate-200 bg-slate-50 text-center px-4 py-3 font-medium text-slate-900 shadow-sm">
                Exchange
              </div>
              <div className="border border-slate-200 bg-slate-50 text-center px-4 py-3 font-medium text-slate-900 shadow-sm">
                MiraOS
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-slate-500 uppercase tracking-wide">
        Confidential · Do Not Redistribute · Version 1 — September 2025
      </div>
    </div>
  )
} satisfies SlideDefinition;
