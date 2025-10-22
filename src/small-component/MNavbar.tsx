import React from 'react';
import { AiFillHome, AiFillBell } from 'react-icons/ai';
import { MdGroups, MdWork } from 'react-icons/md';
import { FaPlusSquare } from 'react-icons/fa';

export default function MNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Home */}
        <NavItem icon={<AiFillHome size={24} />} label="Home" />
        
        {/* My Network */}
        <NavItem icon={<MdGroups size={24} />} label="Network" />
        
        {/* Post */}
        <NavItem icon={<FaPlusSquare size={24} />} label="Post" />
        
        {/* Notifications */}
        <NavItem icon={<AiFillBell size={24} />} label="Alerts" />
        
        {/* Jobs */}
        <NavItem icon={<MdWork size={24} />} label="Jobs" />
      </div>
    </nav>
  );
}

// Reusable Nav Item Component
function NavItem({ icon, label }) {
  return (
    <button className="flex flex-col items-center justify-center text-gray-600 hover:text-black text-sm flex-1">
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
