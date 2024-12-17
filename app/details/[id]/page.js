import EventDetails from '@/components/details/EventDetails';
import EventVenue from '@/components/details/EventVenue';

import HeroSection from '@/components/details/HeroSection';
import React from 'react';

const EventDetailsPage = ({ params: { id } }) => {
    return (
        <main>
            <HeroSection />
            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <EventDetails />
                    <EventVenue />
                </div>
            </section>
        </main>
    );
};

export default EventDetailsPage;