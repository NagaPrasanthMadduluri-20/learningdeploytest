
import CourseScreen from '  @/Components/CourseScreen';
import { generatePageData } from '  @/data/Genericetestdata';
import { notFound } from 'next/navigation';
import React from 'react';

function isValidCourseId(id) {
    // Check if it matches the pattern 'course-' followed by 5 digits
    const match = id.match(/^course-(\d{5})$/);
    if (!match) return false;
    
    // Check if the number is between 1 and 20000
    const number = parseInt(match[1]);
    return number >= 1 && number <= 20000;
  }

export async function generateStaticParams() {
  const ids = Array.from({ length: 20000 }, (_, i) => ({
    id: `course-${(i + 1).toString().padStart(5, '0')}`
  }));
  
  return ids;
}

const Page = ({ params }) => {

      // Show 404 if the ID format is invalid or out of range
      if (!isValidCourseId(params.id)) {
        notFound();
      }

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