import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

type TabType = 'industry' | 'content';

interface FieldItem {
  title: string;
  desc: string;
  issues: string;
  detailLabel: string;
  detailContent: string;
  tags: string[];
}

export default function Fields() {
  const [activeTab, setActiveTab] = useState<TabType>('industry');

  const fieldData: Record<TabType, FieldItem[]> = {
    industry: [
      {
        title: "AI 조선윤리",
        desc: "조선 현장의 안전, 자동화, 생산성, 기술 이해에 필요한 AI 윤리 기준",
        issues: "현장안전 / 작업정확성 / 책임구조",
        detailLabel: "적용 장면",
        detailContent: "조선소 교육, 직무이해, 현장설명, 산업 특강",
        tags: ["교육", "컨설팅", "보고서"]
      },
      {
        title: "AI 반도체윤리",
        desc: "반도체 산업의 기술 이해, 보안, 정확한 설명에 필요한 AI 윤리 기준",
        issues: "기술정확성 / 산업보안 / 진로교육",
        detailLabel: "적용 장면",
        detailContent: "산업교육, 학교 특강, 기업 기초교육",
        tags: ["교육", "보고서", "시험"]
      },
      {
        title: "AI 에너지윤리",
        desc: "에너지와 환경, 지속가능성과 공공성을 함께 고려하는 AI 윤리 기준",
        issues: "공공책임 / 환경정보 / 지속가능성",
        detailLabel: "적용 장면",
        detailContent: "학교, 기관, 시민강좌, 에너지 교육",
        tags: ["교육", "컨설팅", "보고서"]
      },
      {
        title: "AI 의료윤리",
        desc: "건강과 보건, 민감정보와 설명 책임을 다루는 AI 윤리 기준",
        issues: "정확성 / 민감정보 / 오해방지",
        detailLabel: "적용 장면",
        detailContent: "의료입문 교육, 보건특강, 건강이해 교육",
        tags: ["교육", "인증", "보고서"]
      },
      {
        title: "AI 법률윤리",
        desc: "법률정보의 오해를 풀고 책임 있는 설명을 가능하게 하는 기준",
        issues: "사례해석 / 책임표현 / 정확한 안내",
        detailLabel: "적용 장면",
        detailContent: "생활법률, 기관교육, 실무특강",
        tags: ["교육", "컨설팅", "보고서"]
      },
      {
        title: "AI 회계윤리",
        desc: "숫자와 실무 흐름을 쉽게 설명하되 왜곡하지 않기 위한 기준",
        issues: "수치해석 / 단순화위험 / 실무책임",
        detailLabel: "적용 장면",
        detailContent: "소상공인 교육, 실무입문, 창업교육",
        tags: ["교육", "보고서"]
      },
      {
        title: "AI 특허윤리",
        desc: "기술과 권리, 출원과 사업화를 정확하게 설명하기 위한 기준",
        issues: "권리이해 / 절차정확성 / 과장방지",
        detailLabel: "적용 장면",
        detailContent: "창업교육, 지식재산 특강, 기술사업화 교육",
        tags: ["교육", "컨설팅", "보고서"]
      },
      {
        title: "AI 과학윤리",
        desc: "과학 개념을 학생 눈높이에 맞게 정확하고 안전하게 설명하기 위한 기준",
        issues: "과학정확성 / 탐구설계 / 학생안전",
        detailLabel: "적용 장면",
        detailContent: "방과후 과학수업, 진로교육, 캠프",
        tags: ["교육", "시험", "보고서"]
      },
    ],
    content: [
      {
        title: "AI 문서윤리",
        desc: "문서, 보고서, 기획서, 안내문 작성 과정에서 필요한 신뢰와 출처의 기준",
        issues: "허위정보 / 표절 / 저작권",
        detailLabel: "대표 문제",
        detailContent: "검증되지 않은 내용, 출처 불명, 자동 작성 남용",
        tags: ["교육", "시험", "보고서"]
      },
      {
        title: "AI 음성윤리",
        desc: "음성 생성과 복제, 안내 음성 활용 시 필요한 동의와 책임의 기준",
        issues: "동의 / 사칭 / 도용",
        detailLabel: "대표 문제",
        detailContent: "음성 클로닝, 신원 오인, 보이스피싱",
        tags: ["교육", "컨설팅", "보고서"]
      },
      {
        title: "AI 영상윤리",
        desc: "합성영상과 딥페이크 시대에 필요한 초상권과 조작 방지 기준",
        issues: "딥페이크 / 초상권 / 표시책임",
        detailLabel: "대표 문제",
        detailContent: "얼굴 합성, 가짜 영상, 신뢰 훼손",
        tags: ["교육", "인증", "컨설팅"]
      },
      {
        title: "AI 이미지윤리",
        desc: "생성 이미지와 시각 자료 활용에 필요한 작가 권리와 출처의 기준",
        issues: "스타일모방 / 출처 / 저작권",
        detailLabel: "대표 문제",
        detailContent: "작가풍 모방, 이미지 재가공, 상업적 사용 책임",
        tags: ["교육", "보고서"]
      },
      {
        title: "AI 광고·홍보윤리",
        desc: "광고문구와 홍보물에서 과장과 오인을 막기 위한 AI 윤리 기준",
        issues: "허위표현 / 소비자오인 / 책임광고",
        detailLabel: "대표 문제",
        detailContent: "과장 홍보, 자동 생성 광고문구, 신뢰 저하",
        tags: ["교육", "컨설팅", "보고서"]
      },
      {
        title: "AI 교육콘텐츠윤리",
        desc: "학생 대상 자료와 교안, 활동지 제작에 필요한 안전성과 설명 책임의 기준",
        issues: "아동대상안전 / 저작권 / 설명책임",
        detailLabel: "대표 문제",
        detailContent: "부정확한 자료, 학부모 신뢰 저하, 교육현장 오남용",
        tags: ["교육", "시험", "인증"]
      },
    ]
  };

  const tabs = [
    { id: 'industry', label: '산업별 AI 윤리' },
    { id: 'content', label: '콘텐츠별 AI 윤리' },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50/30">
      <section className="bg-white py-20 border-b border-slate-200">
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
          <div className="flex justify-center mb-16 border-b border-slate-200">
            <div className="flex gap-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={clsx(
                    "pb-4 text-xl font-bold transition-all relative",
                    activeTab === tab.id ? "text-[#8B1D3B]" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <Motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#8B1D3B]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "grid gap-6 md:gap-8",
                activeTab === 'industry' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {fieldData[activeTab].map((item, idx) => (
                <Motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-[#8B1D3B] mb-4">{item.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                    {item.desc}
                  </p>
                  
                  <div className="w-full h-px bg-slate-100 mb-6" />

                  <div className="space-y-6 flex-grow">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">핵심 이슈</h4>
                      <p className="text-slate-900 text-sm font-bold">{item.issues}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{item.detailLabel}</h4>
                      <p className="text-slate-800 text-sm leading-relaxed">{item.detailContent}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-50 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[#8B1D3B] text-xs font-bold bg-[#8B1D3B]/5 px-3 py-1 rounded-full border border-[#8B1D3B]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
