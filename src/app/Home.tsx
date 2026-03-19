import React, { useState } from 'react';
import { motion as Motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  Award, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Globe,
  MessageSquare,
  FileText,
  Zap,
  Stethoscope, 
  CreditCard, 
  Car, 
  Video,
  Database,
  Lock,
  Eye,
  Scale
} from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import aiEthicsScales from "figma:asset/ai_ethics_scale_dark.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const [showDiagnosisModal, setShowDiagnosisModal] = useState(false);

  return (
    <div className="flex flex-col bg-[#FDFCF8] text-slate-800">
      {/* Hero Section: Ethical Balance & Trust */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0D4C54]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#B8860B]/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <Motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D4C54]/10 border border-[#0D4C54]/20 text-[#0D4C54] text-sm font-bold mb-8 backdrop-blur-md">
                  <Award className="w-4 h-4 fill-current" />
                  <span>PREMIUM AI ETHICS & GOVERNANCE</span>
                </div>

                <div className="text-[#0D4C54]/60 font-mono text-sm tracking-[0.5em] mb-6 uppercase font-black">
                  — TRUST IS THE NEW ALGORITHM
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] mb-8 text-slate-900 break-keep min-w-max">
                  AI의 미래는 <br />
                  <span className="text-[#0D4C54] relative inline-block">
                    기술이 아니라
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#0D4C54]/10 -z-10 rounded-full" />
                  </span> <br />
                  윤리로 <br />
                  결정됩니다.
                </h1>

                {/* International Organizations Standards */}
                <div className="flex flex-wrap items-center gap-6 mb-12 py-6 border-y border-slate-100">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">GLOBAL STANDARDS:</div>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-blue-600">OECD</span>
                      <span className="text-[10px] font-bold text-slate-500">AI Principles</span>
                    </div>
                    <div className="w-px h-6 bg-slate-200" />
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-indigo-600">UNESCO</span>
                      <span className="text-[10px] font-bold text-slate-500">Recommendation</span>
                    </div>
                    <div className="w-px h-6 bg-slate-200" />
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-emerald-600">EU</span>
                      <span className="text-[10px] font-bold text-slate-500">AI Act (Framework)</span>
                    </div>
                  </div>
                </div>

                <p className="text-2xl md:text-3xl font-bold text-slate-700 mb-12 leading-tight">
                  단순한 기술을 넘어 <br />
                  <span className="text-[#0D4C54]">인류의 가치를 증명하는 표준</span>을 만듭니다.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <button
                    onClick={() => setShowDiagnosisModal(true)}
                    className="group relative px-12 py-6 bg-[#0D4C54] text-white rounded-[24px] font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-teal-900/30"
                  >
                    <span className="relative flex items-center gap-3">
                      무료 윤리 진단 시작하기
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>
                  <Link
                    to="/about"
                    className="px-12 py-6 bg-white border-2 border-slate-200 text-slate-800 rounded-[24px] font-black text-xl hover:bg-slate-50 transition-all shadow-sm"
                  >
                    핵심 가치 보기
                  </Link>
                </div>
              </Motion.div>
            </div>

            {/* Right Visual: Scales Image (Scaled up, no frame) */}
            <div className="lg:w-1/2 relative flex justify-center items-center">
              <Motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 w-full flex justify-center"
              >
                <div className="relative w-full max-w-[900px]">
                  <div className="absolute inset-0 bg-radial-gradient from-[#0D4C54]/10 via-transparent to-transparent opacity-60 scale-150 pointer-events-none" />
                  <img
                    src={aiEthicsScales}
                    alt="AI Ethics Governance Scales"
                    className="w-full h-auto object-contain scale-125 lg:scale-150 drop-shadow-[0_50px_100px_rgba(13,76,84,0.3)] pointer-events-none"
                  />
                  
                  {/* High Trust Badge */}
                  <div className="absolute -top-10 -right-4 p-10 bg-white/95 backdrop-blur-2xl border-2 border-slate-100 rounded-[48px] shadow-3xl hidden md:block animate-bounce-slow">
                    <div className="text-6xl font-black text-[#0D4C54] leading-none">99.8%</div>
                    <div className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mt-3">Algorithm Trust</div>
                  </div>
                </div>
              </Motion.div>
            </div>
          </div>

          {/* 4-Step Process Cards: Horizontal, Large (3x) */}
          <div className="mt-40 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                label: "윤리 진단", 
                step: "01",
                desc: "알고리즘의 잠재적 편향성과 윤리적 리스크를 정밀 분석합니다.", 
                sub: "Diagnosis",
                icon: Search,
                bg: "bg-teal-50",
                color: "text-teal-600"
              },
              { 
                label: "위험 평가", 
                step: "02",
                desc: "산업별 규제 기준에 따른 AI 시스템의 영향도를 평가합니다.", 
                sub: "Evaluation",
                icon: AlertTriangle,
                bg: "bg-amber-50",
                color: "text-amber-600"
              },
              { 
                label: "기술 검증", 
                step: "03",
                desc: "데이터 투명성과 결정 과정의 정당성을 기술적으로 증명합니다.", 
                sub: "Verification",
                icon: ShieldCheck,
                bg: "bg-blue-50",
                color: "text-blue-600"
              },
              { 
                label: "신뢰 인증", 
                step: "04",
                desc: "글로벌 표준을 통과한 기업에 공신력 있는 인증을 부여합니다.", 
                sub: "Certification",
                icon: CheckCircle2,
                bg: "bg-emerald-50",
                color: "text-emerald-600"
              }
            ].map((item, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (i * 0.1), duration: 0.6 }}
                className="group bg-white border-2 border-slate-100 p-12 rounded-[56px] shadow-2xl hover:shadow-3xl hover:border-[#0D4C54]/30 transition-all"
              >
                <div className={`w-24 h-24 ${item.bg} rounded-[36px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-sm font-black ${item.color} uppercase tracking-widest`}>{item.step}</span>
                  <div className="h-px flex-1 bg-slate-100" />
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter">{item.sub}</span>
                </div>
                <h3 className="text-4xl font-black text-slate-900 mb-8">{item.label}</h3>
                <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mind Map Section: Ethics Domains (Industry vs Content) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-base font-bold text-[#0D4C54] uppercase tracking-[0.3em] mb-6">ETHICS MIND MAP</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
              AI 윤리는 특정 분야에 <br />국한되지 않습니다.
            </h3>
            <p className="text-xl text-slate-500 font-medium">
              산업 현장부터 우리가 즐기는 콘텐츠까지, <br />모든 영역에서 각기 다른 형태로 적용되는 윤리 거버넌스를 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Domain 1: Industry Ethics */}
            <Motion.div 
              variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
              className="bg-[#0D4C54] rounded-[80px] p-20 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-20 h-20 bg-white/10 rounded-[30px] flex items-center justify-center">
                    <Database className="w-10 h-10 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-black">산업별 AI 윤리</h4>
                    <p className="text-teal-200 font-bold tracking-widest uppercase text-sm mt-1">Industrial Governance</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {[
                    { title: "반도체/제조", risk: "설계 자동화 및 공정 최적화에서의 기술 유출 방지", icon: Zap },
                    { title: "의료/헬스케어", risk: "AI 진단 결과에 대한 신뢰성 및 환자 데이터 보호", icon: Stethoscope },
                    { title: "금융/핀테크", risk: "신용평가 및 대출 심사의 공정성 확보", icon: CreditCard },
                    { title: "자율주행/모빌리티", risk: "긴급 상황에서의 인명 보호 우선순위 결정 및 책임 소재", icon: Car },
                    { title: "공공행정", risk: "공공 서비스 자동화에 따른 인권 보호와 투명성", icon: Globe }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-8 p-8 bg-white/5 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group/card">
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center group-hover/card:bg-teal-400 group-hover/card:text-[#0D4C54] transition-all">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-2xl font-black mb-2">{item.title}</div>
                        <div className="text-teal-100/70 text-lg leading-relaxed">{item.risk}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Motion.div>

            {/* Domain 2: Content Ethics */}
            <Motion.div 
              variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
              className="bg-[#F9F8F3] rounded-[80px] p-20 border-2 border-slate-100 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(13,76,84,0.05),transparent)] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-20 h-20 bg-[#0D4C54]/10 rounded-[30px] flex items-center justify-center">
                    <Video className="w-10 h-10 text-[#0D4C54]" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-slate-900">콘텐츠 분야별 AI 윤리</h4>
                    <p className="text-slate-400 font-bold tracking-widest uppercase text-sm mt-1">Content Integrity</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {[
                    { title: "미디어/언론", risk: "딥페이크 탐지 및 정보 조작 방지 가이드라인 수립", icon: Eye },
                    { title: "예술/디자인", risk: "생성형 AI 저작권 보호 및 창작자 권리 보장", icon: FileText },
                    { title: "교육/에듀테크", risk: "학습 데이터 편향 제거 및 맞춤형 공정 교육 실현", icon: Users },
                    { title: "소셜 미디어", risk: "알고리즘 중독 방지 및 혐오 표현 필터링 최적화", icon: MessageSquare },
                    { title: "보안/인증", risk: "생체 인식 기반 개인정보 보호 및 위변조 방지", icon: Lock }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-8 p-8 bg-white rounded-[40px] border border-slate-100 hover:border-[#0D4C54]/30 transition-all group/card shadow-sm">
                      <div className="w-16 h-16 bg-[#0D4C54]/5 rounded-2xl flex items-center justify-center group-hover/card:bg-[#0D4C54] group-hover/card:text-white transition-all">
                        <item.icon className="w-8 h-8 text-[#0D4C54]" />
                      </div>
                      <div>
                        <div className="text-2xl font-black mb-2 text-slate-900">{item.title}</div>
                        <div className="text-slate-500 text-lg leading-relaxed">{item.risk}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Verification Case Section */}
      <section className="py-40 bg-[#FDFCF8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <Motion.div 
              variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
              className="lg:col-span-8 p-16 bg-white border border-slate-100 rounded-[64px] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0D4C54]/5 rounded-full blur-[100px] -mr-40 -mt-40" />
              <div className="relative z-10">
                <h3 className="text-base font-bold text-[#0D4C54] uppercase tracking-[0.3em] mb-8">VERIFICATION IMPACT</h3>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">
                  기술적 완성도를 넘어 <br />
                  <span className="text-[#0D4C54]">윤리적 정당성</span>을 증명합니다.
                </h2>
                <p className="text-slate-600 text-2xl max-w-3xl leading-relaxed mb-16 font-medium">
                  단순한 알고리즘이 아닌 인간을 향한 선한 영향력. 우리는 AI가 만들어내는 결과의 투명성을 검증하고, 사회적 책임을 다할 수 있도록 정밀한 윤리 거버넌스를 구축합니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-slate-100">
                  <div>
                    <div className="text-5xl font-black text-slate-900 mb-3">99.9%</div>
                    <p className="text-slate-500 text-lg font-bold tracking-tight">진단 및 검증 데이터 정합성</p>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-[#0D4C54] mb-3">ISO 42001</div>
                    <p className="text-slate-500 text-lg font-bold tracking-tight">글로벌 AI 관리 표준 준수</p>
                  </div>
                  <div>
                    <div className="text-5xl font-black text-slate-800 mb-3">Trust+</div>
                    <p className="text-slate-500 text-lg font-bold tracking-tight">자체 윤리 인증 브랜드 가치</p>
                  </div>
                </div>
              </div>
            </Motion.div>

            <Motion.div 
              variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}
              className="lg:col-span-4 p-16 bg-[#0D4C54] rounded-[64px] text-white flex flex-col justify-between group cursor-pointer shadow-2xl shadow-teal-900/30"
            >
              <div>
                <Scale className="w-16 h-16 mb-12 text-teal-300 group-hover:rotate-12 transition-transform" />
                <h3 className="text-4xl font-black mb-6">글로벌 규제 대응</h3>
                <p className="text-teal-50/80 text-xl leading-relaxed font-medium">
                  EU AI Act 및 OECD 표준 등 복잡한 글로벌 규제를 선제적으로 분석하여 기업의 법적 리스크를 최소화합니다.
                </p>
              </div>
              <Link to="/fields" className="mt-12 flex items-center gap-4 text-2xl font-black group-hover:gap-8 transition-all">
                표준 가이드 보기 <ArrowRight className="w-8 h-8" />
              </Link>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-[80px] overflow-hidden bg-[#0D4C54] p-16 md:p-32 text-center shadow-3xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[150%] bg-white rounded-full blur-[120px]" />
              <div className="absolute bottom-[-30%] right-[-20%] w-[80%] h-[150%] bg-[#B8860B] rounded-full blur-[120px]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-tight">
                당신의 AI는 <br />충분히 신뢰받고 있습니까?
              </h2>
              <p className="text-teal-50 text-2xl md:text-3xl mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
                우리는 단순한 컨설팅을 넘어, 기술의 영혼을 디자인합니다. <br />
                진단, 검토, 인증을 아우르는 전문적인 거버넌스 체계를 <br />
                지금 바로 구축하세요.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <Link
                  to="/join"
                  className="bg-white text-[#0D4C54] px-16 py-7 rounded-3xl font-black text-2xl hover:bg-teal-50 transition-all shadow-2xl"
                >
                  파트너십 신청하기
                </Link>
                <Link
                  to="/contact"
                  className="bg-teal-800/50 backdrop-blur-md text-white border-2 border-white/20 px-16 py-7 rounded-3xl font-black text-2xl hover:bg-teal-800 transition-all"
                >
                  전문가 상담 요청
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showDiagnosisModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm shadow-6xl">
          <Motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white rounded-[40px] p-8 md:p-14 w-full max-w-5xl relative overflow-y-auto max-h-[95vh] shadow-2xl"
          >
            <button 
              onClick={() => setShowDiagnosisModal(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-600 rounded-full hover:bg-slate-200 transition-colors z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0D4C54]/10 text-[#0D4C54] rounded-2xl mb-6">
                 <Scale className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">어떤 진단이 필요하신가요?</h2>
              <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">조직의 특성과 진단 목적에 맞춰<br/>가장 효율적인 AI 윤리 진단을 선택해주세요.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {[
                { title: 'Check 점수표', desc: '서비스 기획 단계에서의 직관적이고 빠른 윤리 자가 점검', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50' },
                { title: 'AI평가', desc: '알고리즘의 편향성 데이터 관리 등 상세 기술 리스크 분석', icon: Search, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                { title: '직원용', desc: '일반 실무자 대상의 AI 활용 가이드라인 준수 여부 점검', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: '학생용', desc: '교육 현장에서의 건전한 정보 수용과 AI 툴 안전 교육 진단', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
                { title: '임원용', desc: '조직 전반의 거버넌스, 정책 수립 및 규제 대응 역량 진단', icon: ShieldCheck, color: 'text-[#0D4C54]', bg: 'bg-[#0D4C54]/10' }
              ].map((item, idx) => (
                <Link 
                  key={idx} 
                  to="/services" 
                  onClick={() => setShowDiagnosisModal(false)}
                  className="flex flex-col items-start p-8 rounded-[32px] border-2 border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:-translate-y-2 transition-all group bg-white cursor-pointer"
                >
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tight group-hover:text-slate-950">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </Motion.div>
        </div>
      )}
    </div>
  );
}
