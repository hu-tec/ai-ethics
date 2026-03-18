import React from 'react';
import { motion as Motion } from 'motion/react';
import { Shield, BookOpen, History, Target, Cpu, CheckCircle2, Globe } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Motion.div {...fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">AI 윤리 소개</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                인간 가치와 인권에 맞게 AI를 설계·사용하도록 하는 정책, 원칙, 거버넌스 체계. 
                기술의 발전과 인간의 공존을 위한 가이드라인입니다.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                alt="AI Ethics Concept"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">AI 윤리란 무엇인가?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-2xl h-fit">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">인간 중심 AI (Human-Centered)</h3>
                    <p className="text-slate-600">AI는 인간을 대체하는 것이 아니라, 인간의 능력을 확장하고 삶의 질을 높이는 도구여야 합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-2xl h-fit">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">신뢰 가능한 AI (Trustworthy)</h3>
                    <p className="text-slate-600">결과를 신뢰할 수 있도록 투명하고 설명 가능한 알고리즘을 지향합니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-2xl h-fit">
                    <History className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">지속 가능한 거버넌스</h3>
                    <p className="text-slate-600">일회성 평가가 아닌, 기술 발전에 따라 유연하게 대응하는 관리 체계를 구축합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI 윤리 8대 핵심 원칙</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">전 세계 공통적으로 강조되는 핵심 가치입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", desc: "AI가 어떻게 작동하는지 설명 가능해야 함", icon: "👁️" },
              { title: "Fairness", desc: "특정 집단에 대한 편향과 차별 방지", icon: "⚖️" },
              { title: "Accountability", desc: "결과에 대한 책임 주체가 명확해야 함", icon: "📝" },
              { title: "Privacy", desc: "데이터 수집 및 활용 시 개인정보 보호", icon: "🔒" },
              { title: "Safety", desc: "인간과 사회에 물리적·정신적 피해 방지", icon: "🛡️" },
              { title: "Human Autonomy", desc: "인간의 의사결정과 자율성 존중", icon: "👤" },
              { title: "Trust", desc: "사회 구성원 간의 기술적 신뢰 확보", icon: "🤝" },
              { title: "Sustainability", desc: "환경과 미래 세대에 미치는 영향 고려", icon: "🌱" },
            ].map((principle, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Timeline: High-End Card Layout */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI 윤리 발전 과정</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">글로벌 거버넌스가 정립되어 온 핵심 타임라인입니다.</p>
          </div>

          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {[
                { 
                  period: "초기 (~2017)", 
                  stage: "원칙 정립기", 
                  content: "학계 중심의 AI 안전성 논의가 시작되었으며, 아실로마(Asilomar) AI 원칙 등 초기 선언문들이 발표된 시기입니다.",
                  icon: "🌱"
                },
                { 
                  period: "중기 (2018~2021)", 
                  stage: "가이드라인 확산기", 
                  content: "OECD, UNESCO, EU 등 주요 국제기구들이 신뢰 가능한 AI를 위한 범지구적 윤리 가이드라인을 정립하고 공유한 시기입니다.",
                  icon: "🌍"
                },
                { 
                  period: "현재 (2022~현재)", 
                  stage: "법제화 및 실행기", 
                  content: "EU AI Act 통과 등 윤리가 단순 권고를 넘어 실제 법적 구속력을 갖기 시작했으며, 기술 표준화가 본격화되는 시기입니다.",
                  icon: "⚖️"
                }
              ].map((item, idx) => (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col h-full hover:border-blue-500/50 hover:-translate-y-2 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-blue-600 font-bold text-sm px-4 py-1.5 bg-blue-50 rounded-full">{item.period}</span>
                    <div className="text-3xl group-hover:scale-125 transition-transform">{item.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.stage}</h3>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-24 transition-all" />
                  <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                    {item.content}
                  </p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
