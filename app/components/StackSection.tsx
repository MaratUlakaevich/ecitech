import React, { FC } from 'react'
import { styles } from '../constants/styles';


//make the container background gray and rounded, padding 24px, but the background should be larger than the section width so the content is equal the section width. AI! 
const StackSection: FC = () => {
  return (
    <div className="">
      <h2 className={`${styles.lgh2} mx-auto text-4xl font-bold text-white mb-8`}>
        Technology Stack
      </h2>
    </div>
  );
};

export default StackSection;