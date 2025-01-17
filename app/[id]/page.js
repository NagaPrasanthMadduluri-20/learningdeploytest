
import CourseScreen from '  @/Components/CourseScreen';
import { generatePageData } from '  @/data/Genericetestdata';
import { notFound } from 'next/navigation';
import React from 'react';



export async function generateStaticParams() {
  const ids = Array.from({ length: 20000 }, (_, i) => ({
    id: `course-${(i + 1).toString().padStart(5, '0')}`
  }));
  
  return ids;
}

const Page = ({ params }) => {

 

  // Use the imported generatePageData instead of getTemplateData
  const pageData = generatePageData(params.id);
  

  return (
    <main>
      <div>
        <CourseScreen data={pageData} />
      </div>
    </main>
  );
};

export default Page;