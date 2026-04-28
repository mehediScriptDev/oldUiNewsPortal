import React from 'react';
import Link from 'next/link';

const Leftsidebar = ({ categories, activeId }) => {
    return (
        <div>
            <h1 className="text-xl font-semibold">All categories</h1>
          {categories?.news_category?.map((category) => (
            <Link
              href={`/category/${category.category_id}`}
              key={category.category_id}
              className={
                activeId === category.category_id
                  ? "text-[#D72050] font-semibold bg-gray-300 my-2 rounded-lg p-3 text-center block"
                  : "font-semibold text-center bg-gray-300 my-2 rounded-lg p-3 block"
              }
            >
              {category.category_name}
            </Link>
          ))}
        </div>
    );
};

export default Leftsidebar;