import React from 'react';
import { Link } from 'react-router';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">AI Ethics Center</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              신뢰 가능한 인공지능 미래를 위해 글로벌 기준에 맞춘 윤리 가이드라인과 컨설팅 서비스를 제공합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">주요 서비스</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">AI 윤리 진단</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">기업 윤리 컨설팅</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">AI 윤리 교육</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">윤리 인증 및 평가</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">정보 센터</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/status" className="hover:text-blue-400 transition-colors">글로벌 규제 동향</Link></li>
              <li><Link to="/community" className="hover:text-blue-400 transition-colors">연구 보고서</Link></li>
              <li><Link to="/community" className="hover:text-blue-400 transition-colors">뉴스레터</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">AI 윤리 가이드라인</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">고객 지원</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>서울특별시 강남구 테헤란로 123 AI 빌딩 10층</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>02-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>contact@aiethics.or.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} AI Ethics Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-300 transition-colors">이용약관</a>
            <a href="#" className="hover:text-slate-300 transition-colors">쿠키정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
