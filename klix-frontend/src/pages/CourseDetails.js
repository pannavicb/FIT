import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetails, bookCourse } from '../services/api';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const response = await getCourseDetails(id);
      setCourse(response.data);
    };
    fetchCourseDetails();
  }, [id]);

  const handleBooking = async () => {
    // You would need to get the userId from your context or state
    const userId = 1; // Replace with the actual user ID
    await bookCourse(id, userId);
    alert('Course booked successfully!');
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <button onClick={handleBooking}>Book Course</button>
    </div>
  );
};

export default CourseDetails;
