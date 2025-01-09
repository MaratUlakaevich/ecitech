import React, { FC, useState } from 'react'
import { styles } from '../constants/styles';
import TechItem from './UI/TechItem';

const StackSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');

  return (
    <div className="relative -mx-12 p-10 bg-gray-800 lg:rounded-3xl">
      <div className="max-w-[1128px] mx-auto">
        <h2 className={`${styles.lgh2} mx-auto text-4xl font-bold text-white mb-8`}>
          Technology Stack
        </h2>
        <p className={`${styles.lgp} lg:w-[50rem] text-gray-400 mb-12 lg:mb-20`}>
          The development team working on a project uses only modern and scalable technologies to implement mobile and web applications the way you mean it
        </p>

        <div className="flex lg:hidden mb-8">
          <button 
            className={`flex-1 py-2 text-center text-2xl font-bold text-white border-b-2 ${
              activeTab === 'web' 
                ? 'text-white border-white' 
                : 'text-gray-400 border-transparent'
            }`}
            onClick={() => setActiveTab('web')}
          >
            Web Technologies
          </button>
          <button 
            className={`flex-1 py-2 text-center text-2xl font-bold text-white border-b-2 ${
              activeTab === 'mobile' 
                ? 'text-white border-white' 
                : 'text-gray-400 border-transparent'
            }`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile Technologies
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Web Technologies */}
          <div className={`${activeTab === 'web' ? 'block' : 'hidden lg:block'}`}>
            <h3 className="hidden lg:block text-2xl font-bold text-white mb-8">Web Technologies</h3>
            
            <div className="flex lg:flex-row flex-col items-start lg:space-x-20 space-y-10 lg:space-y-0">
              <div>
                <h4 className="text-xl text-white mb-6">Backend</h4>
                <div className="lg:grid lg:grid-cols-2 flex gap-10">
                  <TechItem src="/img/tech/TS.svg" name="TypeScript" />
                  <TechItem src="/img/tech/Python.svg" name="Python" />
                  <TechItem src="/img/tech/Ruby.svg" name="Ruby" />
                  <TechItem src="/img/tech/Node.svg" name="Node.JS" />
                  <TechItem src="/img/tech/NET.svg" name=".NET" />
                  <TechItem src="/img/tech/Java.svg" name="Java" />
                </div>
              </div>

              <div>
                <h4 className="text-xl text-white mb-6">Frontend</h4>
                <div className="lg:grid lg:grid-cols-2 flex gap-10">
                  <TechItem src="/img/tech/React.svg" name="React" />
                  <TechItem src="/img/tech/Angular.svg" name="Angular" />
                  <TechItem src="/img/tech/Vue.svg" name="Vue" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Technologies */}
          <div className={`${activeTab === 'mobile' ? 'block' : 'hidden lg:block'}`}>
            <h3 className="hidden lg:block text-2xl font-bold text-white mb-8">Mobile Technologies</h3>
            
            <div className="lg:grid lg:grid-cols-2 flex justify-between gap-8">
              <div>
                <h4 className="text-xl text-white mb-6">iOS</h4>
                <div className="flex gap-8">
                  <TechItem src="/img/tech/Swift.svg" name="Swift" />
                </div>
              </div>

              <div>
                <h4 className="text-xl text-white mb-6">Cross Platform</h4>
                <div className="flex gap-8">
                  <TechItem src="/img/tech/Flutter.svg" name="Flutter" />
                  <TechItem src="/img/tech/ReactNative.svg" name="React Native" />
                </div>
              </div>

              <div>
                <h4 className="text-xl text-white mb-6">Android</h4>
                <div className="flex gap-8">
                  <TechItem src="/img/tech/Kotlin.svg" name="Kotlin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackSection;