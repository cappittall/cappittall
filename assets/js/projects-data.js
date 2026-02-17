// Projects Data
// Based on GitHub Portfolio Analysis

const projects = [
    {
        id: 1,
        title: "AI Chatbot Platform",
        description: "Full-stack conversational AI platform with FastAPI backend, supporting multi-channel messaging (WhatsApp, Instagram, Facebook), real-time chat, product recommendations, and analytics.",
        image: "./assets/images/projects/chatbot.jpg",
        tags: ["Python", "FastAPI", "AI/ML", "PostgreSQL", "WebSocket"],
        category: ["ai", "web"],
        github: "https://github.com/cappittall/chatbot",
        demo: "https://yediyirmi.tr",
        stars: 0,
        language: "Python"
    },
    {
        id: 2,
        title: "Call Center AI System",
        description: "Advanced AI-powered call center solution with OpenAI Realtime API integration, AudioSocket bridge, speech-to-text, text-to-speech, and intelligent call routing with Asterisk PBX.",
        image: "./assets/images/projects/callcenter.jpg",
        tags: ["Python", "Asterisk", "OpenAI", "Real-time AI", "VoIP"],
        category: ["ai", "automation"],
        github: "https://github.com/cappittall/callcenter",
        stars: 0,
        language: "Python"
    },
    {
        id: 3,
        title: "Computer Vision Analytics",
        description: "Real-time face detection and analytics system using TensorFlow, OpenCV, and edge computing. Features include age/gender detection, emotion recognition, and attendance tracking.",
        image: "./assets/images/projects/face-analytics.jpg",
        tags: ["Python", "TensorFlow", "OpenCV", "Edge TPU", "Computer Vision"],
        category: ["cv", "ai"],
        github: "https://github.com/cappittall/face-analytics",
        stars: 0,
        language: "Python"
    },
    {
        id: 4,
        title: "PyCoral for Python 3.10",
        description: "Custom wheel packages for Google Coral Edge TPU with Python 3.10 support. Enables high-performance machine learning inference on edge devices.",
        image: "./assets/images/projects/pycoral.jpg",
        tags: ["Python", "Edge Computing", "Machine Learning", "Coral"],
        category: ["ai", "cv"],
        github: "https://github.com/cappittall/pycoral_whl_4_python3.10",
        stars: 3,
        language: "Jupyter Notebook"
    },
    {
        id: 5,
        title: "EfficientNet Object Detection",
        description: "Training pipeline for object detection models using EfficientNet architecture. Jupyter notebooks for model training, evaluation, and deployment.",
        image: "./assets/images/projects/efficientnet.jpg",
        tags: ["TensorFlow", "EfficientNet", "Object Detection", "Jupyter"],
        category: ["ai", "cv"],
        github: "https://github.com/cappittall/Train-OD-model-with-efficientnet",
        stars: 2,
        language: "Jupyter Notebook"
    },
    {
        id: 6,
        title: "Video Analytics Platform",
        description: "Real-time video analytics system for surveillance, crowd detection, and behavioral analysis using deep learning models and OpenCV.",
        image: "./assets/images/projects/video-analytics.jpg",
        tags: ["Python", "OpenCV", "Deep Learning", "Video Processing"],
        category: ["cv", "ai"],
        github: "https://github.com/cappittall/video-analytics",
        stars: 0,
        language: "Python"
    },
    {
        id: 7,
        title: "Galvo Laser Control System",
        description: "Advanced galvo laser cutting system for guipure curtain manufacturing with pattern recognition, automated path generation, and real-time process monitoring.",
        image: "./assets/images/projects/laser.jpg",
        tags: ["Python", "Computer Vision", "Industrial Automation", "Control Systems"],
        category: ["automation", "cv"],
        github: "https://github.com/cappittall/carpet",
        stars: 0,
        language: "Python"
    },
    {
        id: 8,
        title: "Marketplace Messaging Hub",
        description: "Unified messaging platform for e-commerce marketplaces including Trendyol, Hepsiburada, and N11. Automated customer support and order management.",
        image: "./assets/images/projects/marketplace.jpg",
        tags: ["Python", "FastAPI", "E-commerce", "API Integration"],
        category: ["web", "automation"],
        github: "https://github.com/cappittall/marketplace-messaging",
        stars: 0,
        language: "Python"
    },
    {
        id: 9,
        title: "Assistant API Platform",
        description: "RESTful API for AI assistants with OpenAI GPT integration, conversation management, and multi-user support. Built with FastAPI and PostgreSQL.",
        image: "./assets/images/projects/assistant-api.jpg",
        tags: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "API"],
        category: ["ai", "web"],
        github: "https://github.com/cappittall/assistantapi",
        stars: 0,
        language: "Python"
    },
    {
        id: 10,
        title: "Law GPT - Legal Assistant",
        description: "AI-powered legal document analysis and question answering system. Uses RAG (Retrieval Augmented Generation) with legal document embeddings.",
        image: "./assets/images/projects/lawgpt.jpg",
        tags: ["Python", "OpenAI", "RAG", "Vector Search", "Legal Tech"],
        category: ["ai", "web"],
        github: "https://github.com/cappittall/lawGPT",
        stars: 0,
        language: "Python"
    },
    {
        id: 11,
        title: "Motion Detection System",
        description: "Advanced motion detection and tracking system using OpenCV. Features include zone monitoring, alert triggering, and event recording.",
        image: "./assets/images/projects/motion.jpg",
        tags: ["Python", "OpenCV", "Motion Detection", "Security"],
        category: ["cv", "automation"],
        github: "https://github.com/cappittall/motion",
        stars: 0,
        language: "Python"
    },
    {
        id: 12,
        title: "Match Analytics Dashboard",
        description: "Sports analytics platform for match statistics, player performance tracking, and tactical analysis with interactive visualizations.",
        image: "./assets/images/projects/match-analytics.jpg",
        tags: ["Python", "Data Analytics", "Visualization", "Sports"],
        category: ["web", "ai"],
        github: "https://github.com/cappittall/match-analytics",
        stars: 0,
        language: "Python"
    },
    {
        id: 13,
        title: "Product Recommendation Engine",
        description: "ML-powered product recommendation system with collaborative filtering, content-based filtering, and hybrid approaches for e-commerce platforms.",
        image: "./assets/images/projects/recommendations.jpg",
        tags: ["Python", "Machine Learning", "Recommendation Systems", "E-commerce"],
        category: ["ai", "web"],
        github: "https://github.com/cappittall/chatbot",
        stars: 0,
        language: "Python"
    },
    {
        id: 14,
        title: "Thermal Imaging System",
        description: "Thermal camera integration and image processing system for temperature monitoring, anomaly detection in industrial/security applications.",
        image: "./assets/images/projects/thermal.jpg",
        tags: ["Python", "OpenCV", "Thermal Imaging", "Industrial"],
        category: ["cv", "automation"],
        github: "https://github.com/cappittall/thermal",
        stars: 0,
        language: "Python"
    },
    {
        id: 15,
        title: "Bread Counter AI",
        description: "Computer vision system for automated bread counting in bakeries. Real-time detection and counting using YOLOv5 and custom trained models.",
        image: "./assets/images/projects/bread-counter.jpg",
        tags: ["Python", "YOLOv5", "Computer Vision", "Industrial AI"],
        category: ["cv", "ai"],
        github: "https://github.com/cappittall/ekmeksay",
        stars: 0,
        language: "Python"
    },
    {
        id: 16,
        title: "Safety PPE Detection",
        description: "Real-time detection of Personal Protective Equipment (PPE) for workplace safety compliance. Detects helmets, vests, masks using deep learning.",
        image: "./assets/images/projects/ppe-detection.jpg",
        tags: ["Python", "YOLO", "Safety", "Computer Vision"],
        category: ["cv", "ai"],
        github: "https://github.com/cappittall/DESK-AI-BACKEND-FALL-PPE-INTRUSION",
        stars: 0,
        language: "Python"
    },
    {
        id: 17,
        title: "Instagram Management Tool",
        description: "Automated Instagram post scheduling, analytics tracking, and engagement management with Django backend.",
        image: "./assets/images/projects/instagram.jpg",
        tags: ["Python", "Django", "Instagram API", "Social Media"],
        category: ["web", "automation"],
        github: "https://github.com/cappittall/django_instagram2",
        stars: 0,
        language: "Python"
    },
    {
        id: 18,
        title: "JPEG to STL Converter",
        description: "Image to 3D model converter. Transforms JPEG images into STL files for 3D printing with customizable depth and resolution.",
        image: "./assets/images/projects/jpeg2stl.jpg",
        tags: ["Python", "3D Modeling", "Image Processing", "STL"],
        category: ["cv", "automation"],
        github: "https://github.com/cappittall/jpeg2stl",
        stars: 0,
        language: "Python"
    }
];

// Function to get projects by category
function getProjectsByCategory(category) {
    if (category === 'all') {
        return projects;
    }
    return projects.filter(project => project.category.includes(category));
}

// Function to get featured projects (top 6)
function getFeaturedProjects() {
    return projects.slice(0, 6);
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, getProjectsByCategory, getFeaturedProjects };
}
