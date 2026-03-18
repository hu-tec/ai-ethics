import React from 'react';
import { motion as Motion } from 'motion/react';
import { Newspaper, FileText, MessageCircle, Calendar, ArrowRight, Search } from 'lucide-react';

export default function Community() {
  const news = [
    { title: "EU AI Act 공식 발효에 따른 국내 기업 대응 가이드", date: "2024-03-15", category: "정책" },
    { title: "생성형 AI의 환각(Hallucination) 방지를 위한 최신 기술 동향", date: "2024-03-10", category: "기술" },
    { title: "금융권 AI 윤리 인증 100호 돌파 성과 보고", date: "2024-03-05", category: "성과" },
  ];

  const reports = [
    { title: "2024 글로벌 AI 윤리 트렌드 리포트", type: "Annual Report", author: "AI Ethics Center" },
    { title: "의료 분야 AI 진단 모델의 편향성 분석 연구", type: "Case Study", author: "Expert Panel" },
    { title: "딥페이크 탐지 및 규제 방안에 관한 정책 제언", type: "Policy Paper", author: "Policy Research Group" },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">커뮤니티</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                최신 AI 윤리 동향부터 전문 연구 자료까지, 
                지식을 공유하고 더 나은 미래를 함께 논의하는 공간입니다.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="flex items-center gap-4">
              <Newspaper className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">최신 뉴스 및 정책 동향</h2>
            </div>
            <button className="text-slate-500 font-bold hover:text-blue-600 transition-colors flex items-center gap-2">
              더 보기 <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 shadow-xl shadow-slate-100/50 transition-all cursor-pointer">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg mb-4 inline-block">{item.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">{item.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="flex items-center gap-4">
              <FileText className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">연구 자료실</h2>
            </div>
            <div className="relative">
              <input type="text" placeholder="자료 검색..." className="pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl flex items-center justify-between border border-slate-100 hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{report.title}</h4>
                    <p className="text-sm text-slate-400">{report.type} • {report.author}</p>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discussion / Forum CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <MessageCircle className="w-64 h-64 -translate-x-1/2 -translate-y-1/2 absolute top-0 left-0" />
              <MessageCircle className="w-48 h-48 translate-x-1/2 translate-y-1/2 absolute bottom-0 right-0" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">전문가 토론 광장</h2>
              <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
                익명 또는 실명으로 AI 윤리에 관한 다양한 의견을 나누고 새로운 아이디어를 제안해보세요.
              </p>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2 mx-auto">
                토론 참여하기
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
