import React from 'react';
import { motion as Motion } from 'motion/react';
import { Search, ShieldCheck, BookOpen, Award, BarChart, ArrowRight, ClipboardCheck, Zap } from 'lucide-react';

const steps = [
  {
    title: "윤리 진단 (Diagnosis)",
    icon: Search,
    desc: "기존 AI 시스템의 알고리즘, 데이터 수집 방식, 운영 프로세스를 정밀 분석하여 잠재적 윤리 리스크를 식별합니다.",
    items: ["알고리즘 편향 검사", "데이터 편향성 분석", "개인정보 보호 규정 준수 여부"]
  },
  {
    title: "위험 평가 (Risk Assessment)",
    icon: BarChart,
    desc: "식별된 리스크가 사회와 비즈니스에 미치는 영향을 등급별로 분류하고 우선순위를 결정합니다.",
    items: ["사회적 파급력 분석", "법적 규제 위반 가능성", "비즈니스 지속성 평가"]
  },
  {
    title: "가이드라인 수립 (Guidelines)",
    icon: BookOpen,
    desc: "기업의 가치와 산업적 특성을 고려한 맞춤형 AI 윤리 행동 강령 및 운영 가이드를 제작합니다.",
    items: ["맞춤형 윤리 헌장 제정", "개발자용 체크리스트", "운영 거버넌스 수립"]
  },
  {
    title: "검증 및 인증 (Certification)",
    icon: Award,
    desc: "외부 전문가 그룹의 리뷰를 거쳐 최종적인 윤리 적합성을 검증하고 공신력 있는 인증서를 발급합니다.",
    items: ["전문가 위원회 리뷰", "윤리 적합성 보고서", "신뢰 가능한 AI 인증"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">업무 프로세스</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                체계적이고 과학적인 프로세스를 통해 기업의 AI 윤리 역량을 강화합니다. 
                진단부터 인증까지, 전문가 그룹이 전 과정을 함께합니다.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="relative bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-blue-100/50 transition-all hover:-translate-y-2 flex flex-col h-full group">
                  <div className="absolute -top-4 -left-4 text-6xl font-black text-slate-100/50 group-hover:text-blue-50 transition-colors">0{idx + 1}</div>
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg mb-6 relative z-10">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-grow">{step.desc}</p>
                  <div className="space-y-3 mt-auto pt-6 border-t border-slate-50">
                    {step.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-slate-700 text-xs font-medium">
                        <ClipboardCheck className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Engagement */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">예상 소요 비용 및 리소스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Standard 진단", price: "별도 문의", desc: "단일 서비스/모델 대상", period: "4주 내외" },
              { title: "Enterprise 컨설팅", price: "별도 문의", desc: "전사 차원 거버넌스 수립", period: "12주 내외" },
              { title: "윤리 교육 패키지", price: "별도 문의", desc: "임직원 역량 강화 교육", period: "원데이/정기" },
            ].map((plan, idx) => (
              <div key={idx} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="text-xl font-bold mb-2">{plan.title}</h4>
                <div className="text-3xl font-black text-blue-400 mb-4">{plan.price}</div>
                <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                <div className="text-slate-200 font-medium border-t border-white/10 pt-6">평균 소요 기간: {plan.period}</div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto">
              맞춤형 견적 요청하기
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
