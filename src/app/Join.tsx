import React, { useState } from 'react';
import { motion as Motion } from 'motion/react';
import { Users, BookOpen, Briefcase, Star, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Join() {
  const [submitting, setSubmitting] = useState(false);

  const roles = [
    { title: "AI 윤리 자문위원", icon: Star, desc: "정부 및 기업의 AI 정책 수립에 참여하여 전문가적 견해를 제공합니다." },
    { title: "인증 평가 전문가", icon: CheckCircle2, desc: "AI 시스템의 윤리 적합성을 평가하고 인증 심사를 수행합니다." },
    { title: "전문 강사", icon: BookOpen, desc: "기업 및 공공기관의 임직원을 대상으로 맞춤형 AI 윤리 교육을 진행합니다." },
    { title: "연구 및 집필", icon: Briefcase, desc: "글로벌 트렌드 분석 보고서 및 윤리 가이드라인 집필에 참여합니다." },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      field: (form.elements.namedItem('field') as HTMLSelectElement).value,
      bio: (form.elements.namedItem('bio') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch(`${API_URL}/api/aiethics_applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('서버 오류');
      toast.success('전문가 신청이 접수되었습니다. 담당자가 곧 연락드리겠습니다.');
      form.reset();
    } catch {
      toast.error('신청 접수에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">전문가 모집</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                기술, 법률, 철학, 정책 등 다양한 분야의 전문가분들을 모십니다. 
                신뢰할 수 있는 AI 미래를 함께 만들어갈 파트너를 찾습니다.
              </p>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">주요 활동 분야</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 hover:shadow-blue-100 transition-all group">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <role.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{role.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-blue-600 p-12 text-white">
              <Users className="w-16 h-16 mb-8" />
              <h2 className="text-3xl font-bold mb-6">지금 바로 <br />합류하세요.</h2>
              <p className="text-blue-100 leading-relaxed mb-8">
                귀하의 전문성이 AI 시대를 안전하고 정의롭게 만드는 가장 강력한 힘이 됩니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>expert@aiethics.or.kr</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">성함</label>
                    <input name="name" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="홍길동" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">이메일</label>
                    <input name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="example@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">주요 전문 분야</label>
                  <select name="field" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                    <option value="">분야를 선택해주세요</option>
                    <option value="tech">AI 기술 / 개발</option>
                    <option value="law">법률 / 규제</option>
                    <option value="philosophy">철학 / 윤리</option>
                    <option value="policy">정책 / 행정</option>
                    <option value="industry">특화 산업 (의료, 금융 등)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">경력 요약 및 자기소개</label>
                  <textarea name="bio" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="자유롭게 기술해주세요" required></textarea>
                </div>
                <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200 disabled:opacity-50">
                  {submitting ? '접수 중...' : '지원서 제출하기'}
                  {!submitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
