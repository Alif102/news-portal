import { useState } from 'react';
import NewsTabScroll from './NewsTabScroll';

const NewsTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="shadow-xl w-[100%] h-[490px]">
      <div className="flex ">
        <button
          className={`px-3 py-2 ${
            activeTab === 1 ? 'shadow-lg text-black' : 'shadow-xl'
          }`}
          onClick={() => setActiveTab(1)}
        >
          সর্বশেষ
        </button>
        <button
          className={`px-3 py-2 ${
            activeTab === 2 ? 'shadow-lg text-black' : 'shadow-xl'
          }`}
          onClick={() => setActiveTab(2)}
        >
          সর্বোচ্চ পঠিত
        </button>
      </div>
      <div
        className="mt-4 h-96 overflow-y-scroll"
        // style={{ background: activeTab === 1 ? '#BDBDBD' : '#D9D9D9' }}
      >
        {activeTab === 1 && (
          <div className="p-4">
            <NewsTabScroll/>
          </div>
        )}
        {activeTab === 2 && (
          <div className="p-4">
            <NewsTabScroll/>
          </div>
        )}
      </div>
      <div className='shadow-lg w-full mt-4 h-8'>
<h1 className=' text-center p-1 font-bold'>আজকের সব খবর</h1>
      </div>
    </div>
  );
};

export default NewsTabs;
