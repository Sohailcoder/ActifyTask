import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { AiFillDashboard, AiOutlineUser, AiOutlineLineChart } from 'react-icons/ai';
import { BiUpload } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { RiFeedbackFill } from 'react-icons/ri';
import { CgProfile } from "react-icons/cg";




const sidebarItems = [
  {
    title: 'Dashboard',
    icon: <AiFillDashboard />,
    path: '/',
    items: [], // No sub-items for Dashboard
  },
  {
    title: 'Account',
    icon: <AiOutlineUser />,
    path: '/accounts',
    items: [
      { name: 'Accounts', icon: <AiOutlineUser />, path: '/table' },
      { name: 'Account Report', icon: <AiOutlineLineChart />, path: '/account-report' },
      { name: 'Account Upload', icon: <BiUpload />, path: '/account-upload' },
    ],
  },
  {
    title: 'Contact',
    icon: <FiPhoneCall />,
    path: '/contact',
    items: [], // No sub-items for Contact
  },
  {
    title: 'Feedback',
    icon: <RiFeedbackFill />,
    path: '/feedback',
    items: [], // No sub-items for Feedback
  },
  {
    title: 'Profile',
    icon: <CgProfile />,
    path: '/Profile',
    items: [], // No sub-items for Feedback
  },
];

const Sidebar = ({ children }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className='flex'>
    <div className="w-64 bg-gray-100 h-screen p-4">
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className="mb-4">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              {item.icon}
              <Link to={item.path} className="ml-2">
                {item.title}
              </Link>
              {item.items.length > 0 && (
                <span className="ml-auto">
                  {openSections[index] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              )}
            </div>
            {item.items.length > 0 && openSections[index] && (
              <ul className="ml-6 mt-2">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="mb-2 flex items-center">
                    {subItem.icon}
                    <Link to={subItem.path} className="ml-2">
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
    <main>{children}</main>
    </div>
    
  );
};



export default Sidebar;
