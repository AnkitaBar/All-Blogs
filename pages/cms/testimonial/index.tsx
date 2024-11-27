import { allTestimonialQuery } from '@/customHooks/cms.query.hooks';
import TestimonialCards from '@/ui/cards/testimonialCards';
import React from 'react'

const AllTestimonial = () => {
  const { data, isPending } = allTestimonialQuery();
  const allTestimonialData = data?.testimonials || [];
  console.log('data', data);
  
  return (
    <>
    <h2>Testimonial</h2>
        <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
        {
            Array.isArray(allTestimonialData) && allTestimonialData.length > 0 ? (
                allTestimonialData.map((testimonial, index) => (
                    <div key={index}>
                        <TestimonialCards {...testimonial}/>
                    </div>
                ))
            ) : (
                <p>No testimonials found</p>
            )
        }
        </div>
    </>
  )
}

export default AllTestimonial;