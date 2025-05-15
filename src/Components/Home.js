import React from 'react';
import { useNavigate } from "react-router-dom";
// import home from './Imgs/bg-image.jpg';
import '../App.css';

export default function Container1() {
    const navigate = useNavigate(); // Initialize navigation

    const handleRedirect = () => {
        navigate("/AnalyzeFile"); // Redirects to the /scan-results route
    };
    return (
        <>
            <section class="relative">
                <img alt="A computer setup with multiple screens displaying code and data visualizations, with a colorful keyboard and other tech gadgets"
                    class="w-full h-auto" height="600"
                    src="https://static.sitemantic.com/webbuilder/templates/images/information-technology/information-technology-1170-570-1.jpg"
                    width="1200" />
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 class="text-5xl font-bold">
                        Securing digital future by empowering security
                    </h1>
                    <p class="text-2xl mt-4">
                        "Detect. Protect. Defend"
                    </p>
                    <button class="mt-6 px-6 py-2 bg-blue-600 rounded-full text-white" onClick={handleRedirect} >
                        Start Now
                    </button>
                </div>
            </section>
            <section class="container mx-auto py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="text-center">
                        <img alt="A computer screen displaying file analysis data" class="mx-auto mb-4" height="200"
                            src="https://storage.googleapis.com/a1aa/image/KRIavoDrav3zaD8nG7tFwikAHmGSjWW5pzwV8CkYeSE.jpg"
                            width="300" />
                        <h3 class="text-xl font-semibold text-blue-300">
                            File Analysis
                        </h3>
                        <p class="mt-2">
                            We offer comprehensive file analysis services to help you understand and manage your data
                            effectively. Our team uses advanced tools to provide detailed insights.
                        </p>
                    </div>
                    <div class="text-center">
                        <img alt="A computer screen displaying URL analysis data" class="mx-auto mb-4" height="200"
                            src="https://storage.googleapis.com/a1aa/image/Y_q4w_06L1q8VpavX3a7kbXEKkI31ux3Z81eg3UvhsE.jpg"
                            width="300" />
                        <h3 class="text-xl font-semibold text-blue-300">
                            URL Analysis
                        </h3>
                        <p class="mt-2">
                            Our URL analysis services help you monitor and analyze web traffic, ensuring your online
                            presence is optimized and secure. We provide actionable insights to improve your web strategy.
                        </p>
                    </div>
                    <div class="text-center">
                        <img alt="A computer screen displaying a report" class="mx-auto mb-4" height="200"
                            src="https://storage.googleapis.com/a1aa/image/qsMPLbWWrPtnZEZIoyDEokpMF-Fx3E5FkLIIX13-Oh0.jpg"
                            width="300" />
                        <h3 class="text-xl font-semibold text-blue-300">
                            Report
                        </h3>
                        <p class="mt-2">
                            We provide detailed reports that summarize our findings and offer recommendations. Our reports
                            are designed to help you make informed decisions and improve your operations.
                        </p>
                    </div>
                </div>
            </section>
        </>

    );
}
