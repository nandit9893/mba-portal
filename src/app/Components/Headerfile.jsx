'use client';

import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold mx-auto">MY APPLICATION</h1>
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image 
          src="/logo.jpg" 
          alt="Profile Picture" 
          width={48} 
          height={48} 
          className="object-cover"
        />
      </div>
    </header>
  );
};

export default Header;

