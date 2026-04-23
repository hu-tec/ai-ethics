import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Zap, Car, CreditCard, Landmark, ShoppingBag,
  Stethoscope, Scale, Calculator, FileBadge, Shield, Terminal,
  FileText, Mic, Video, Image as ImageIcon, Megaphone, Wand2,
  Monitor, GraduationCap, Film, Globe, Copyright, Music
} from 'lucide-react';
import { clsx } from 'clsx';

type TabType = 'industry' | 'professional' | 'functional' | 'content';

export default function Fields() {
  const [activeTab, setActiveTab] = useState<TabType>('industry');

  const fieldData: Record<TabType, { name: string, icon: any }[]> = {
    industry: [
      { name: "조선/반도체", icon: Cpu },
      { name: "에너지", icon: Zap },
      { name: "자율주행", icon: Car },
      { name: "금융", icon: CreditCard },
      { name: "공공행정", icon: Landmark },
      { name: "이커머스/통신", icon: ShoppingBag },
    ],
    professional: [
      { name: "의료", icon: Stethoscope },
      { name: "법률", icon: Scale },
      { name: "회계", icon: Calculator },
      { name: "특허", icon: FileBadge },
      { name: "보안", icon: Shield },
      { name: "기술", icon: Terminal },
    ],
    functional: [
      { name: "문서", icon: FileText },
      { name: "음성", icon: Mic },
      { name: "영상", icon: Video },
      { name: "이미지", icon: ImageIcon },
      { name: "광고", icon: Megaphone },
      { name: "AI툴", icon: Wand2 },
    ],
    content: [
      { name: "광고", icon: Monitor },
      { name: "교육, 컨텐츠", icon: GraduationCap },
      { name: "웹툰, 드라마, 영화", icon: Film },
      { name: "K-문화", icon: Globe },
      { name: "저작권, 초상권", icon: Copyright },
      { name: "미술, 음악, 창의적인 것", icon: Music },
    ]
  };

  const tabs = [
    { id: 'industry', label: '산업별' },
    { id: 'professional', label: '전문별' },
    { id: 'functional', label: '기능별' },
    { id: 'content', label: '컨텐츠별' },
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
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={clsx(
                    "px-6 md:px-10 py-3 rounded-full text-base md:text-lg font-bold transition-all whitespace-nowrap",
                    activeTab === tab.id ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
            >
              {fieldData[activeTab].map((item, idx) => (
                <Motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-slate-50 p-12 rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <item.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900">{item.name}</h3>
                </Motion.div>
              ))}
            </Motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
