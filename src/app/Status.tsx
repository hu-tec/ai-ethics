import React from 'react';
import { motion as Motion } from 'motion/react';
import { Globe, Flag, Landmark, Scale, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Status() {
  const globalStandards = [
    { title: "OECD AI Principles (2019)", organization: "OECD", desc: "투명성, 책임성, 인간 중심성 등 5대 원칙 제시. 글��벌 AI 윤리의 표준적 지침" },
    { title: "UNESCO Recommendation (2021)", organization: "UNESCO", desc: "세계 최초 글로벌 표준. 194개 회원국 대상으로 인권 보호 및 지속가능성 강조" },
    { title: "EU Trustworthy AI Guidelines", organization: "EU", desc: "7대 핵심 요구사항 정의. 위험 기반의 실제 법제화(EU AI Act)의 기초가 됨" },
  ];

  const countryModels = [
    { 
      country: "EU (유럽연합)", 
      type: "규제 중심", 
      desc: "세계에서 가장 강력한 규제 모델. AI Act를 통해 위험 등급별로 법적 강제성 부여", 
      cases: ["금지 AI (사회적 점수)", "고위험 AI (채용, 의료)"] 
    },
    { 
      country: "USA (미국)", 
      type: "혁신 중심", 
      desc: "규제보다 기업 자율과 기술 발전을 우선시하는 철학. NIST AI 위험 관리 프레임워크 기반", 
      cases: ["AI Bill of Rights", "시장 중심 자율 규제"] 
    },
    { 
      country: "China (중국)", 
      type: "국가 통제", 
      desc: "정치 안정과 정보 통제, 사회 질서 유지를 최우선 가치로 하는 국가 주도형 모델", 
      cases: ["알고리즘 규제", "합성 콘텐츠 규제"] 
    },
    { 
      country: "South Korea (한국)", 
      type: "성장/조화", 
      desc: "산업 경쟁력 확보와 국민 신뢰 확보 사이의 균형 추구. AI 기본법 추진 및 가이드라인 확산", 
      cases: ["AI 윤리 기준", "분야별 가이드라인"] 
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">국가별 AI 윤리 현황</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                전 세계는 공통된 원칙 아래 각기 다른 전략적 목표를 가지고 AI 윤리와 규제에 접근하고 있습니다. 
                글로벌 시장 진출을 위해 반드시 알아야 할 국가별 정책을 확인하세요.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* New Section: Industry & Content Key Issues */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI 윤리는 분야마다 문제도, 책임도 다르게 나타납니다</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Industry Issues */}
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                산업별 핵심 이슈
              </h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-red-600 mb-2">채용 / 업무 AI</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">OECD와 KISDI 자료 모두 AI가 채용·업무 영역에서 편향, 책임 위험을 낳을 수 있다고 판단.</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold">공정성과 설명 책임</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-red-600 mb-2">의료 / 고위험 분야</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">EU AI Act는 고위험 AI를 별도로 다루고, 안전에 큰 영향을 줄 수 있는 시스템에 강한 요구 부여.</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold">생명 안전의 엄격한 기준</span>
                </div>
              </div>
            </div>

            {/* Content Issues */}
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                콘텐츠별 핵심 이슈
              </h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-amber-600 mb-2">딥페이크 / 합성 콘텐츠</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">인공적으로 생성되거나 조작된 콘텐츠에 대한 표시 의무 및 신뢰 저하 문제 제기.</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold">표시와 신뢰의 핵심</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-amber-600 mb-2">문서 작성 AI</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">KISDI 자율점검표는 Writing AI를 정확성, 명확성 평가 단위로 구분.</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-[10px] font-bold">허위정보 및 출처</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Frameworks */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12">
            <Globe className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-900">국제기구 기준 윤리 프레임워크</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalStandards.map((std, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-blue-100 transition-shadow">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-4">{std.organization}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{std.title}</h3>
                <p className="text-slate-600 leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Models */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-16">
            <Flag className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">주요 국가별 접근 방식</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countryModels.map((model, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-colors flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6 gap-2">
                  <h3 className="text-xl font-bold leading-tight">{model.country}</h3>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold shrink-0">{model.type}</span>
                </div>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">{model.desc}</p>
                <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">대표 정책 및 사례</h4>
                  <div className="flex flex-col gap-2">
                    {model.cases.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Global vs Korea Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-4">
            <Scale className="w-8 h-8 text-blue-600" />
            해외 vs 한국 비교 및 주요 사례
          </h2>
          
          <div className="overflow-x-auto rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 font-bold text-slate-900">해외 구분</th>
                  <th className="p-6 font-bold text-slate-900">대표 사례</th>
                  <th className="p-6 font-bold text-slate-900">핵심 내용</th>
                  <th className="p-6 font-bold text-slate-900">홈페이지 해석</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-6 font-bold text-blue-600">OECD</td>
                  <td className="p-6 text-slate-600">OECD AI Principles</td>
                  <td className="p-6 text-slate-600 leading-relaxed">혁신과 신뢰를 동시에 추구하는 최초의 정부 간 AI 원칙으로, 인권과 민주적 가치, 신뢰 가능한 AI를 강조함.</td>
                  <td className="p-6 font-bold text-slate-900">글로벌 공통 기준의 출발점</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-blue-600">UNESCO</td>
                  <td className="p-6 text-slate-600">AI Ethics Recommendation</td>
                  <td className="p-6 text-slate-600 leading-relaxed">인간의 존엄과 인권을 중심에 두고, 투명성·공정성·인간 감독을 강조하는 글로벌 윤리 기준을 제시함.</td>
                  <td className="p-6 font-bold text-slate-900">"사람 중심 AI"의 국제 표준</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-blue-600">EU</td>
                  <td className="p-6 text-slate-600">AI Act</td>
                  <td className="p-6 text-slate-600 leading-relaxed">금지 AI, 고위험 AI, 투명성 의무 등 위험기반 규제를 도입했고, 챗봇·딥페이크 등에는 사용자 고지 및 표시 의무를 요구함.</td>
                  <td className="p-6 font-bold text-red-600">윤리에서 법·제도로 넘어간 대표 사례</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-blue-600">미국/NIST</td>
                  <td className="p-6 text-slate-600">AI RMF + 생성형 AI 프로필</td>
                  <td className="p-6 text-slate-600 leading-relaxed">NIST는 AI RMF와 2024년 생성형 AI 프로필을 통해 기업이 자율적으로 위험을 식별·관리하도록 지원함.</td>
                  <td className="p-6 font-bold text-slate-900">기업 실무형 AI 리스크 관리 기준</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* New Section: Korea AI Policy Landscape */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">한국도 이제 AI 윤리를 정책과 적용 단계로</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI 기본법 시행", desc: "한국의 인공지능 기본법은 국회 통과 후 2026년 시행되어 법·제도적 기반 마련" },
              { title: "지원데스크 운영", desc: "정부는 복합 사안에 대한 지원데스크를 운영하여 실무 대응 수요를 소화" },
              { title: "자율점검표 운영", desc: "분야별 자율점검표를 제공하여 한국형 AI 윤리 적용 및 가이드 존재" },
              { title: "윤리영향평가 기반", desc: "학생, 일반인, 개발자 대상의 체계적인 가이드북과 윤리 교육 동반 진행" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-red-600 mb-4">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* New Section: Strategic Implications & Direction */}
          <div className="mt-16 bg-white p-10 rounded-[48px] border border-red-100 shadow-lg shadow-red-50 text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-6">시사점 및 휴텍씨의 방향</h3>
            <p className="text-slate-600 leading-relaxed">
              글로벌 규제와 한국의 대응 모두 <strong>"특정 기술"</strong>에서 <strong>"분야별 리스크 관리"</strong>로 이동하고 있습니다. 
              휴텍씨는 이러한 흐름을 선제적으로 반영하여 공통 교육 이상의 산업별, 콘텐츠 맞춤형 기준을 설계하는 유일한 기관으로 자리매김합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Summary Insight */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-50 rounded-[48px] p-12 md:p-16">
            <div className="flex flex-col lg:flex-row gap-12 items-stretch">
              {/* Left Side: Title + Cards 1 & 2 */}
              <div className="lg:w-2/3 flex flex-col">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">전문가를 위한 핵심 인사이트</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                  <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm flex flex-col">
                    <h4 className="font-bold text-blue-600 mb-4 text-lg">1. 원칙의 전 지구적 수렴</h4>
                    <p className="text-slate-600 leading-relaxed">투명성, 책임성, 공정성, 인권 보호는 모든 국가가 공유하는 핵심 baseline입니다.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm flex flex-col">
                    <h4 className="font-bold text-blue-600 mb-4 text-lg">2. 규제 방식의 다양성</h4>
                    <p className="text-slate-600 leading-relaxed">EU는 법으로, 미국은 시장으로, 중국은 국가 통제로 규제하는 철학적 차이가 뚜렷합니다.</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Card 3 */}
              <div className="lg:w-1/3 flex flex-col">
                <div className="lg:mt-16 h-full relative">
                  <div className="bg-blue-600 rounded-3xl p-8 text-white relative z-10 h-full flex flex-col justify-center">
                    <Landmark className="w-12 h-12 mb-6 shrink-0" />
                    <h3 className="text-2xl font-bold mb-4 leading-tight">AI 윤리는 정치가 아닌 경제입니다.</h3>
                    <p className="text-blue-100 leading-relaxed text-sm">
                      단순한 규범을 넘어 글로벌 경제 패권 경쟁의 중심에 AI 윤리가 있습니다. 
                      각국의 규제에 발맞추는 것은 글로벌 경쟁력의 핵심입니다.
                    </p>
                  </div>
                  <div className="absolute top-4 left-4 right-4 bottom-4 bg-blue-200 rounded-3xl -z-10 translate-x-3 translate-y-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
