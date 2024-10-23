import React from "react";

const Home: React.FC = () => {
  return (
    <div className=" min-h-screen p-2 md:px-4 xl:px-10 flex flex-col gap-5">
      {/* Hero Section */}
      <section className="bg-gradient-to-r p-2 rounded-lg from-blue-500 to-purple-500 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">MaxxYourself</h1>
          <p className="text-lg mb-8">
            Unlock your full potential with our personalized fitness and
            nutrition plans.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">
              Personalized Workout Plans
            </h3>
            <p className="text-white/70">
              Achieve your fitness goals with custom workout routines tailored
              to your body type and experience level.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Nutrition Guidance</h3>
            <p className="text-white/70">
              Fuel your body the right way with our expert-designed nutrition
              plans and recipes.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Performance Enhancement</h3>
            <p className="text-white/70">
              Take your performance to the next level with our tips and
              strategies for maximizing your physical abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className=" py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="bg-white/10 p-6 rounded-lg shadow-md mx-4 mb-4">
              <p className="text-white/70 mb-4">
                "AlphaMax has transformed my fitness journey! The personalized
                plans are amazing, and I've seen incredible results."
              </p>
              <p className="font-bold">- John Doe</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 p-6 rounded-lg shadow-md mx-4 mb-4">
              <p className="text-white/70 mb-4">
                "I love the nutrition guidance and recipes. They've helped me
                make healthier choices and feel more energized."
              </p>
              <p className="font-bold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 flex flex-col justify-evenly gap-20 rounded-lg text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl pb-10 font-bold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <a
            href="/signup"
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200"
          >
            Join Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
