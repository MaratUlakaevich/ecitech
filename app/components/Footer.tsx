import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="text-gray-400 py-12">
      <div className="md:max-w-[1128px] max-w-[605px] mx-auto px-4">
        {/* Основной блок футера */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Услуги */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/web-development" className="hover:text-white">Web Development</Link></li>
              <li><Link href="/services/mobile-development" className="hover:text-white">Mobile Development</Link></li>
              <li><Link href="/services/devops" className="hover:text-white">DevOps Services</Link></li>
              <li><Link href="/services/ux-ui" className="hover:text-white">UX/UI Design</Link></li>
              <li><Link href="/services/seo" className="hover:text-white">Custom Software Development</Link></li>
            </ul>
          </div>

          {/* Отрасли */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link href="/industries/fintech" className="hover:text-white">FinTech</Link></li>
              <li><Link href="/industries/healthcare" className="hover:text-white">Healthcare</Link></li>
              <li><Link href="/industries/education" className="hover:text-white">EdTech</Link></li>
              <li><Link href="/industries/ecommerce" className="hover:text-white">Travel</Link></li>
              <li><Link href="/industries/real-estate" className="hover:text-white">Social</Link></li>
            </ul>
          </div>

          {/* Блог и инсайты */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Insights</h3>
            <ul className="space-y-2">
              <li><Link href="/blog/develop-app-cost" className="hover:text-white"></Link></li>
              <li><Link href="/blog/build-ridesharing" className="hover:text-white"></Link></li>
              <li><Link href="/blog/fitness-app" className="hover:text-white"></Link></li>
              <li><Link href="/blog/crm-agriculture" className="hover:text-white font-bold"></Link></li>
              <li><Link href="/blog/web-design" className="hover:text-white"></Link></li>
            </ul>
          </div>

          {/* Контакты и офисы */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Offices</h3>
            <a href="#" className="text-sm">+971 56 658 5789</a>
            <p className="text-sm mb-2">Saudi Arabia, Ar-Riyadh</p>
            <a href="tel:+7 909 997 16 33" className="text-sm mt-2">+7 909 997 16 33</a>
            <p className="text-sm">Russia, Moscow</p>
          </div>

          {/* Emails */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Emails</h3>
            <p className="text-sm">Build your team:</p>
            <p className="text-sm text-white">ulakaev@ecitech.online</p>
            <p className="text-sm mt-3">We are hiring:</p>
            <p className="text-sm text-white">ulakaev@ecitech.online</p>
          </div>
        </div>

        {/* Нижний блок футера */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col  justify-between items-center">
          <div className="flex space-x-6 mt-4 md:mt-0 mb-10">
            <Link href="https://www.linkedin.com/company/ecitech-sa" target="_blank" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">Clutch</Link>
            <Link href="#" className="hover:text-white">Facebook</Link>
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">Dribbble</Link>
          </div>

          <div className="flex space-x-4 text-sm mt-4 md:mt-0 mb-10">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/cookies-policy" className="hover:text-white">Cookies Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()} ECITech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
