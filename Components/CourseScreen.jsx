import React from 'react';

const CourseScreen = ({ data }) => {
  // Find the specific entry with pageContents
  const courseData = data.testdata.find(item => item.pageContents);

  if (!courseData) {
    return <div>No content available</div>;
  }

  const { pageContents } = courseData;
  return (
    <div>
      {pageContents.map((item, index) => (
        <div key={index} className="max-w-6xl p-3 mx-auto">
          <h3 className='text-2xl mb-5 underline text-center captilize'>{item.template}</h3>
          <p className='text-pretty mb-3'>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseScreen;

