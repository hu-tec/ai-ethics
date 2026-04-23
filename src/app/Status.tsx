import React from 'react';
import { motion as Motion } from 'motion/react';
import { 
  Globe, 
  Flag, 
  ShieldAlert, 
  CheckCircle2, 
  Briefcase, 
  FileText, 
  Stethoscope, 
  AlertTriangle,
  ArrowRight,
  Landmark,
  Scale,
  Users,
  Search,
  Check
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Status() {
  const globalStandards = [
    { 
      title: "OECD AI Principles (2019)", 
      organization: "OECD", 
      desc: "투명성, 책임성, 인간 중심성 등 5대 원칙 제시. 글로벌 AI 윤리의 표준적 지침" 
    },
    { 
      title: "UNESCO Recommendation (2021)", 
      organization: "UNESCO", 
      desc: "세계 최초 글로벌 표준. 194개 회원국 대상으로 인권 보호 및 지속가능성 강조" 
    },
    { 
      title: "EU Trustworthy AI Guidelines", 
      organization: "EU", 
      desc: "7대 핵심 요구사항 정의. 위험 기반의 실제 법제화(EU AI Act)의 기초가 됨" 
    },
  ];

  const countryModels = [
    { 
      id: "1",
      country: "EU (유럽연합)", 
      type: "규제 중심", 
      typeColor: "bg-red-50 text-red-600 border-red-100",
      desc: "세계에서 가장 강력한 규제 모델. AI Act를 통해 위험 등급별로 법적 강제성 부여", 
      cases: ["금지 AI (사회적 점수)", "고위험 AI (채용, 의료)"] 
    },
    { 
      id: "2",
      country: "USA (미국)", 
      type: "혁신 중심", 
      typeColor: "bg-blue-50 text-blue-600 border-blue-100",
      desc: "규제보다 기업 자율과 기술 발전을 우선시하는 전략. NIST AI 위험 관리 프레임워크 기반", 
      cases: ["AI Bill of Rights", "시장 중심 자율 규제"] 
    },
    { 
      id: "3",
      country: "China (중국)", 
      type: "국가 통제", 
      typeColor: "bg-orange-50 text-orange-600 border-orange-100",
      desc: "정치 안정과 정보 통제, 사회 질서 유지를 최우선 가치로 하는 국가 주도형 모델", 
      cases: ["알고리즘 규제", "합성 콘텐츠 규제"] 
    },
    { 
      id: "4",
      country: "South Korea (한국)", 
      type: "성장/조화", 
      typeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
      desc: "산업 경쟁력 확보와 국민 신뢰 확보 사이의 균형 추구. AI 기본법 추진 및 가이드라인 확산", 
      cases: ["AI 윤리 기준", "분야별 가이드라인"] 
    },
  ];

  const comparisonData = [
    { category: "OECD", title: "OECD AI Principles", content: "혁신과 신뢰를 동시에 추구하는 최초의 정부 간 AI 원칙으로, 인권과 민주적 가치, 신뢰 가능한 AI를 강조함.", interpret: "글로벌 공통 기준의 출발점" },
    { category: "UNESCO", title: "AI Ethics Recommendation", content: "인간의 존엄과 인권을 중심에 두고, 투명성·공정성·인간 감독을 강조하는 글로벌 윤리 기준을 제시함.", interpret: "\"사람 중심 AI\"의 국제 표준" },
    { category: "EU", title: "AI Act", content: "금지 AI, 고위험 AI, 투명성 의무 등 위험기반 규제를 도입했고, 챗봇·딥페이크 등에는 사용자 고지 표시 의무를 요구함.", interpret: "윤리에서 법·제도로 넘어간 대표 사례" },
    { category: "미국/NIST", title: "AI RMF + 생성형 AI 프로필", content: "NIST는 AI RMF와 2024년 생성형 AI 프로필을 통해 기업이 자율적으로 위험을 식별·관리하도록 지원함.", interpret: "기업 실무형 AI 리스크 관리 기준" },
  ];

  return (
    <div className="bg-[#FDFCF8] text-slate-900 font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0D4C54] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#B8860B] rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="w-16 h-1 bg-white/30 mx-auto mb-10" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-10 break-keep">
              산업이 다르면 필요한 <span className="text-teal-300">AI 윤리</span>도 다르고,<br />
              콘텐츠가 달라지면 <span className="text-teal-300">책임</span>도 달라집니다.
            </h1>
            <p className="text-xl md:text-2xl text-teal-50 font-medium leading-relaxed opacity-90 max-w-3xl mx-auto">
              이제 AI 윤리는 설명이 아니라 구조가 되어야 하며, <br className="hidden md:block" />
              선택이 아니라 기준이 되어야 합니다.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Key Issues Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-6">AI 윤리는 분야마다 문제도, 책임도 다르게 나타납니다</h2>
            <div className="h-1 w-24 bg-[#0D4C54]/20" />
          </Motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Industrial Key Issues */}
            <Motion.div {...fadeInUp} className="bg-white p-12 rounded-[56px] border border-slate-100 shadow-xl shadow-slate-100/50">
              <h3 className="text-2xl font-black text-slate-900 mb-12 flex items-center gap-3">
                산업별 핵심 이슈
              </h3>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-[#0D4C54]/10">
                  <h4 className="text-xl font-black text-[#0D4C54] mb-3">채용 / 업무 AI</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">OECD와 KISDI 자료 모두 AI가 채용·업무 영역에서 편향, 책임 위험을 낳을 수 있다고 판단.</p>
                  <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-100">공정성과 설명 책임</span>
                </div>
                <div className="relative pl-8 border-l-2 border-[#0D4C54]/10">
                  <h4 className="text-xl font-black text-[#0D4C54] mb-3">의료 / 고위험 분야</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">EU AI Act는 고위험 AI를 별도로 다루고, 안전에 큰 영향을 줄 수 있는 시스템에 강한 요구 부여.</p>
                  <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-100">생명 안전의 엄격한 기준</span>
                </div>
              </div>
            </Motion.div>

            {/* Content Key Issues */}
            <Motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white p-12 rounded-[56px] border border-slate-100 shadow-xl shadow-slate-100/50">
              <h3 className="text-2xl font-black text-slate-900 mb-12 flex items-center gap-3">
                콘텐츠별 핵심 이슈
              </h3>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-[#0D4C54]/10">
                  <h4 className="text-xl font-black text-[#0D4C54] mb-3">딥페이크 / 합성 콘텐츠</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">인공적으로 생성되거나 조작된 콘텐츠에 대한 표시 의무 및 신뢰 저하 문제 제기.</p>
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100">표시와 신뢰의 핵심</span>
                </div>
                <div className="relative pl-8 border-l-2 border-[#0D4C54]/10">
                  <h4 className="text-xl font-black text-[#0D4C54] mb-3">문서 작성 AI</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">KISDI 자율점검표는 Writing AI를 정확성, 명확성 평가 단위로 구분.</p>
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100">허위정보 및 출처</span>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Global Status Title Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-black mb-8">국가별 AI 윤리 현황</h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              전 세계는 공통된 원칙 아래 각기 다른 전략적 목표를 가지고 AI 윤리와 규제에 접근하고 있습니다. 
              글로벌 시장 진출을 위해 반드시 알아야 할 국가별 정책을 확인하세요.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Global Frameworks Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-3xl font-black text-slate-900">국제기구 기준 윤리 프레임워크</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalStandards.map((std, idx) => (
              <Motion.div 
                key={idx} 
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-blue-100/50 transition-all hover:-translate-y-1"
              >
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-6 px-3 py-1 bg-blue-50 rounded-full w-fit">{std.organization}</span>
                <h4 className="text-xl font-black text-slate-900 mb-6">{std.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{std.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Models Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
              <Flag className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-3xl font-black text-slate-900">주요 국가별 접근 방식</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countryModels.map((model, idx) => (
              <Motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-100 rounded-[48px] p-10 flex flex-col h-full shadow-lg shadow-slate-100/50 hover:border-[#0D4C54]/20 transition-all group"
              >
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-xl font-black leading-tight flex flex-col">
                    <span className="text-slate-400 text-xs mb-1 font-bold">{model.id}.</span>
                    {model.country}
                  </h4>
                  <span className={`px-4 py-1.5 rounded-full text-[11px] font-black border tracking-wider ${model.typeColor}`}>
                    {model.type}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium flex-grow">{model.desc}</p>
                <div className="pt-8 border-t border-slate-50">
                  <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6">대표 정책 및 사례</h5>
                  <div className="space-y-3">
                    {model.cases.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0D4C54]" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-32 bg-[#F9F8F3]">
        <div className="container mx-auto px-4 md:px-6">
          <Motion.div {...fadeInUp} className="mb-16">
            <h3 className="text-3xl font-black text-slate-900">해외 vs 한국 비교 및 주요 사례</h3>
          </Motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-[40px] overflow-hidden border-collapse shadow-2xl shadow-slate-200/50">
              <thead>
                <tr className="bg-slate-50 text-left border-b border-slate-100">
                  <th className="p-8 text-sm font-black text-slate-500 uppercase tracking-wider">해외 구분</th>
                  <th className="p-8 text-sm font-black text-slate-500 uppercase tracking-wider">대표 사례</th>
                  <th className="p-8 text-sm font-black text-slate-500 uppercase tracking-wider">핵심 내용</th>
                  <th className="p-8 text-sm font-black text-[#0D4C54] uppercase tracking-wider">홈페이지 해석</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-8 font-black text-slate-900">{row.category}</td>
                    <td className="p-8 font-bold text-slate-600">{row.title}</td>
                    <td className="p-8 text-slate-500 leading-relaxed text-sm max-w-md">{row.content}</td>
                    <td className="p-8 font-black text-[#0D4C54]">{row.interpret}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Korea Policy Steps Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">한국도 이제 AI 윤리를 정책과 적용 단계로</h2>
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI 기본법 시행", desc: "한국의 인공지능 기본법은 국회 통과 후 2026년 시행되어 법·제도적 기반 마련" },
              { title: "지원데스크 운영", desc: "정부는 복합 사안에 대한 지원데스크를 운영하여 실무 대응 수요를 소화" },
              { title: "자율점검표 운영", desc: "분야별 자율점검표를 제공하여 한국형 AI 윤리 적용 및 가이드 존재" },
              { title: "윤리영향평가 기반", desc: "학생, 일반인, 개발자 대상의 체계적인 가이드북과 윤리 교육 동반 진행" }
            ].map((item, i) => (
              <Motion.div 
                key={i} 
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-black text-slate-900 mb-6">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Insight Section */}
      <section className="py-32 pb-48">
        <div className="container mx-auto px-4 md:px-6">
          <Motion.div 
            {...fadeInUp}
            className="relative bg-white border-2 border-slate-100 rounded-[56px] p-16 md:p-24 overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D4C54]/5 rounded-full blur-[100px] -mr-40 -mt-40" />
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-slate-900 mb-10">시사점 및 휴텍씨의 방향</h3>
              <p className="text-xl md:text-2xl text-slate-600 font-bold leading-[1.6] break-keep">
                글로벌 규제와 한국의 대응 모두 <span className="text-[#0D4C54]">"특정 기술"</span>에서 <span className="text-[#0D4C54]">"분야별 리스크 관리"</span>로 이동하고 있습니다. <br className="hidden md:block" />
                휴텍씨는 이러한 흐름을 선제적으로 반영하여 공통 교육 이상의 <br className="hidden md:block" />
                <span className="relative inline-block text-[#0D4C54]">
                  산업별, 콘텐츠 맞춤형 기준
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#0D4C54]/10 -z-10 rounded-full" />
                </span>을 설계하는 유일한 기관으로 자리매김합니다.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
}
