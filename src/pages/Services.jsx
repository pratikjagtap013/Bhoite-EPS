import React from "react";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="services">
        <div className="service-card">
          <h2>Sustainable Architecture Design</h2>
          <p>Building a Greener Future - Every day, the impact of climate change becomes more evident, affecting daily lives in cities around the world. Issues such as public health concerns, resource depletion, lack of basic sanitation, and extreme weather events are reshaping the way we live. In response, the concept of green building offers a global solution for cities, communities, and neighborhoods to address these pressing environmental challenges. A shift towards sustainable cities can also catalyze significant growth in real estate markets.</p>
        </div>
        <div className="service-card">
          <h2>Master Plan Architecture</h2>
          <p>A Framework for Future Development
            A Master Plan Architecture is more than a blueprint—it’s a comprehensive framework that guides the development of urban areas, campuses, or organizations. It connects key elements like development zones, structural relationships, heights, circulation, orientation, ventilation, and street layouts. These components work together to create a detailed, cohesive design that developers and architects can follow.
          </p>
        </div>
        {/* <div className="service-card">
          <h2>Consulting</h2>
          <p>Expert guidance on digital transformation and best practices.</p>
        </div> */}
      </div>
    </div>
  );
}

export default Services;
