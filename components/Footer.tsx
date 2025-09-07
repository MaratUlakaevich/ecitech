import React, { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="text-gray-400 py-12">
      <div className="md:max-w-[1128px] max-w-[605px] mx-auto px-8 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="hover:text-white"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="hover:text-white">
                  DevOps Services
                </Link>
              </li>
              <li>
                <Link href="/services/ux-ui" className="hover:text-white">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-white">
                  Custom Software Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/fintech" className="hover:text-white">
                  FinTech
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="hover:text-white"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-white">
                  EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce" className="hover:text-white">
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/real-estate"
                  className="hover:text-white"
                >
                  Social
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Offices</h3>
            <Link href="#" className="text-sm">
              +966 53 700 0805
            </Link>
            <p className="text-sm mb-2">Saudi Arabia, Ar-Riyadh</p>
            <Link href="tel:+7 909 997 16 33" className="text-sm mt-2">
              +7 909 997 16 33
            </Link>
            <p className="text-sm">Russia, Moscow</p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Emails</h3>
            <p className="text-sm">Build your team:</p>
            <Link
              href="mailto:ulakaev@ecitech.online"
              className="text-sm text-white"
            >
              info@ecitech.online
            </Link>
            <p className="text-sm mt-3">We are hiring:</p>
            <Link
              href="mailto:ulakaev@ecitech.online"
              className="text-sm text-white"
            >
              hr@ecitech.online
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col justify-between items-center w-full">
          <div className="flex mt-4 md:mt-0 mb-10 w-full flex-wrap justify-around">
            <Link
              href="https://www.linkedin.com/company/ecitech-sa"
              target="_blank"
              className="hover:text-white m-2"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://clutch.co/profile/ecitech"
              target="_blank"
              className="hover:text-white m-2"
            >
              Clutch
            </Link>
            <Link href="#" className="hover:text-white m-2">
              Facebook
            </Link>
            <Link 
              href="https://x.com/ecitech_online"
              target="_blank"
              className="hover:text-white m-2"
            >
              Twitter
            </Link>
            <Link href="#" className="hover:text-white m-2">
              Dribbble
            </Link>
          </div>

          <div className="flex w-full flex-wrap justify-around text-sm mt-4 md:mt-0 mb-10">
            <Link href="/privacy-policy" className="hover:text-white m-2">
              Privacy Policy
            </Link>
            <Link href="/cookies-policy" className="hover:text-white m-2">
              Cookies Policy
            </Link>
            <Link href="/terms" className="hover:text-white m-2">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ECITech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
