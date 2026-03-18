import React, { useState } from 'react';
import { motion as Motion } from 'motion/react';
import { 
  Factory, 
  Stethoscope, 
  CreditCard, 
  Car, 
  ShieldAlert, 
  Search, 
  Globe,
  FileText,
  Volume2,
  Video,
  Clapperboard,
  Palette,
  Check
} from 'lucide-react';
import { clsx } from 'clsx';

export default function Fields() {
  const [activeTab, setActiveTab] = useState<'industry' | 'content'>('industry');

  const industryFields = [
    { name: "반도체", icon: Factory, issues: ["기술 독점", "공급망 투명성", "국가 안보"], risk: "중", desc: "설계 자동화 및 공정 최적화에서의 기술 유출 방지" },
    { name: "의료", icon: Stethoscope, issues: ["환자 데이터 보호", "진단 편향", "책임 소재"], risk: "매우 높음", desc: "AI 진단 결과에 대한 신뢰성과 생명 윤리 준수" },
    { name: "금융", icon: CreditCard, issues: ["알고리즘 편향", "자동화 책임", "데이터 남용"], risk: "높음", desc: "신용평가 및 대출 심사의 공정성 확보" },
    { name: "자율주행", icon: Car, issues: ["사고 책임", "의사결정 윤리", "안전 확보"], risk: "매우 높음", desc: "긴급 상황에서의 인명 보호 우선순위 결정" },
    { name: "공공행정", icon: ShieldAlert, issues: ["시민 감시", "인권 침해", "투명성"], risk: "높음", desc: "공공 서비스 자동화에 따른 인권 보호와 공공성" },
  ];

  const contentFields = [
    { name: "문서 (Text)", icon: FileText, issues: ["허위정보(Hallucination)", "표절", "편향", "저작권"], keywords: ["misinformation", "plagiarism"] },
    { name: "음성 (Audio)", icon: Volume2, issues: ["음성 도용", "사칭", "금융 범죄"], keywords: ["voice cloning", "impersonation"] },
    { name: "영상 (Video)", icon: Video, issues: ["딥페이크", "초상권 침해", "신원 악용"], keywords: ["deepfake", "identity misuse"] },
    { name: "드라마·영화", icon: Clapperboard, issues: ["배우 권리", "창작 노동", "AI 저작권"], keywords: ["performer rights", "creative labor"] },
    { name: "웹툰·이미지", icon: Palette, issues: ["작가 스타일 도용", "데이터 학습", "작가 생계"], keywords: ["style imitation", "artist rights"] },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">적용 분야</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                AI 윤리는 특정 분야에 국한되지 않습니다. 산업 현장부터 우리가 즐기는 콘텐츠까지, 
                모든 영역에서 각기 다른 형태로 적용되고 있습니다.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-slate-100 p-1.5 rounded-full border border-slate-200">
              <button
                onClick={() => setActiveTab('industry')}
                className={clsx(
                  "px-8 py-3 rounded-full text-lg font-bold transition-all",
                  activeTab === 'industry' ? "bg-white text-blue-600 shadow-md" : "text-slate-500 hover:text-slate-800"
                )}
              >
                산업별 AI 윤리
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={clsx(
                  "px-8 py-3 rounded-full text-lg font-bold transition-all",
                  activeTab === 'content' ? "bg-white text-blue-600 shadow-md" : "text-slate-500 hover:text-slate-800"
                )}
              >
                콘텐츠 분야별 AI 윤리
              </button>
            </div>
          </div>

          {activeTab === 'industry' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {industryFields.map((field, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="bg-slate-50 p-6 flex flex-col items-center justify-center text-center border-b border-slate-100">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                      <field.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{field.name}</h3>
                    <div className={clsx(
                      "mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      field.risk === "매우 높음" ? "bg-red-100 text-red-600" : 
                      field.risk === "높음" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
                    )}>
                      위험도: {field.risk}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed flex-grow">{field.desc}</p>
                    <div className="space-y-2">
                      {field.issues.map((issue, i) => (
                        <div key={i} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                          <Check className="w-3 h-3 text-green-500 shrink-0" />
                          <span className="text-slate-700 text-xs font-medium">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentFields.map((field, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <field.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{field.name}</h3>
                  <div className="space-y-4 mb-6">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">핵심 윤리 문제</h4>
                    <ul className="space-y-2">
                      {field.issues.map((issue, i) => (
                        <li key={i} className="text-slate-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {field.keywords.map((kw, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-xs font-mono">#{kw}</span>
                    ))}
                  </div>
                </Motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
