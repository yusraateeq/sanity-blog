"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const About = () => {
    useEffect(() => {
        document.querySelector('body')?.classList.add('fade-in');
    }, []);

    return (
        <div>
            <Header />
            <div className="bg-gray-50 min-h-screen">
                <section className="text-center py-24 bg-gradient-to-r from-blue-800 via-blue-950 to-blue-900 text-white">
                    <h1 className="md:text-5xl text-3xl font-bold tracking-wide">Welcome to My World of Blogging</h1>
                    <p className="mt-6 md:text-xl text-md font-medium">Sharing stories, ideas, and experiences for a creative journey</p>
                </section>

                <section className="max-w-6xl mx-auto p-8 lg:p-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <Image
                                src="https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/2f/c8/t-tp-1632826094-who-am-i-display-lettering_ver_1.jpg" // External Image URL from Unsplash
                                alt="About Image"
                                width={800}
                                height={400}
                                className="rounded-xl shadow-2xl w-[500] md:h-96 h-72 transition-transform duration-500 transform hover:scale-105"
                            />
                        </div>
                        <div className="lg:w-1/2 text-md space-y-6">
                            <h2 className="text-4xl font-semibold text-gray-800">Who Am I?</h2>
                            <p className="text-gray-700">
                                Hi, I’m [Your Name], a passionate blogger who loves to write about all things creative, from technology and design to personal growth and lifestyle. I’ve created this space to share my experiences, insights, and thoughts on the things that inspire me.
                            </p>
                            <p className="text-gray-700">
                                My journey started with a curiosity for [specific topic or hobby]. Over time, it transformed into a deep passion for creating content that resonates with people. I hope my posts spark creativity, foster learning, and inspire you to follow your passions.
                            </p>
                            <p className="text-gray-700">
                                Join me as I explore different topics, experiment with new ideas, and continue to grow both as a writer and an individual.
                            </p>
                        </div>
                    </div>
                </section>
               
            </div>
            <Footer />
        </div>
    );
};

export default About;
