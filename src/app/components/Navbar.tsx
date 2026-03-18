import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Shield, Globe, BookOpen, Briefcase, Activity, Users, MessageSquare } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'AI 윤리 소개', path: '/about', icon: BookOpen },
    { name: '적용 분야', path: '/fields', icon: Globe },
    { name: '업무 프로세스', path: '/services', icon: Briefcase },
    { name: '국가별 현황', path: '/status', icon: Activity },
    { name: '전문가 모집', path: '/join', icon: Users },
    { name: '커뮤니티', path: '/community', icon: MessageSquare },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled ? 'bg-white/90 backdrop-blur-md py-3 border-slate-200 shadow-sm' : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#0D4C54] p-2 rounded-xl group-hover:bg-[#15616b] transition-colors shadow-lg shadow-teal-900/10">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-[#0D4C54]">AI Ethics Center</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-sm font-bold transition-all hover:text-[#0D4C54] uppercase tracking-widest',
                location.pathname === item.path ? 'text-[#0D4C54] border-b-2 border-[#0D4C54]' : 'text-slate-500'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#0D4C54] text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-[#15616b] transition-all shadow-md"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 p-3 rounded-lg text-base transition-colors',
                location.pathname === item.path ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'
              )}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 text-white text-center py-3 rounded-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            문의하기
          </Link>
        </div>
      </div>
    </nav>
  );
};
