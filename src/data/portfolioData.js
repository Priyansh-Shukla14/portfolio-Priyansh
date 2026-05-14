export const skills = {
  "Frontend": [
    { name: "HTML & CSS", level: 100 },
    { name: "JavaScript", level: 100 },
    { name: "React JS", level: 100 },
    { name: "Tailwind CSS", level: 100 },
  ],
  "Backend & Tools": [
    { name: "Node.js", level: 100 },
    { name: "Express.js", level: 100 },
    { name: "Git & GitHub", level: 100 },
    { name: "MongoDB", level: 100 },
  ],
  "Other Skills": [
    { name: "DSA / Problem Solving", level: 100 },
    { name: "Responsive Design", level: 100 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI for Bharat",
    subtitle: "AI Coding Coach",

    shortDesc: "An AI-powered coding coach platform currently under development to help students learn programming with guided feedback and explanations.",

    techStack: ["React", "Node.js", "Express", "MongoDB"],

    fullDescription:
      "AI for Bharat is an AI-powered coding education platform currently under development, aimed at helping students learn programming through guided problem-solving. The platform focuses on providing feedback on code, identifying mistakes, and encouraging logical thinking through step-by-step explanations. It is being designed to support learners at different levels by adapting to their progress and improving their problem-solving skills.",

    problemStatement:
      "Many students struggle to learn programming due to a lack of proper guidance and feedback while practicing problems. Existing platforms often provide solutions without helping users understand the reasoning behind them, making it difficult to build strong problem-solving skills.",

    tools: ["React JS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],

    techniques: ["Code Analysis", "Pattern-based Error Detection", "Guided Problem Solving", "Incremental Learning Approach"],

    keyFeatures: [
      "Code feedback system for identifying mistakes",
      "Step-by-step guided explanations",
      "Practice-based learning approach",
      "Progress tracking for users",
      "Clean and simple user interface",
      "Scalable architecture for future AI integration",
    ],

    challenges:
      "Designing a system that provides meaningful feedback without directly giving away answers is a key challenge. The focus is on building a guided learning experience that helps users think and solve problems independently rather than relying on direct solutions.",
    github: "https://github.com/Priyansh-Shukla14/AI-FOR-BHARAT-AWS-HACKATHON.git",
    demo: "#",
    color: "#F5C842",
  },
  {
    id: 2,
    title: "Smart Helmet",
    subtitle: "Accident Prevention System",

    shortDesc: "IoT-based smart helmet that detects accidents in real-time and automatically alerts emergency contacts with GPS location.",

    techStack: ["Arduino", "IoT", "Twilio API", "Google Maps API"],

    fullDescription:
      "Smart Helmet for Accident Prevention is an IoT-based safety system integrated into a motorcycle helmet. The system uses multiple sensors such as accelerometer, gyroscope, and GPS modules to detect accident events in real-time. Once an accident is detected, it instantly sends an SOS alert along with precise GPS coordinates to pre-registered emergency contacts using Twilio, while location tracking is handled via Google Maps API.",

    problemStatement:
      "Road accidents claim over 150,000 lives annually in India, and a major reason for fatalities is delayed medical assistance. In many cases, especially in remote areas, victims remain unattended for long periods due to the lack of an automatic alert system.",

    tools: ["Arduino Uno", "MPU-6050 Accelerometer", "NEO-6M GPS Module", "Twilio SMS API", "Google Maps API", "C++"],

    techniques: ["Sensor Fusion", "Threshold-based Crash Detection", "Real-time GPS Tracking", "IoT Communication Protocols", "Signal Processing"],

    keyFeatures: [
      "Multi-axis crash detection with high accuracy",
      "Automatic SOS with GPS coordinates via SMS",
      "False alarm prevention using smart filtering",
      "Helmet-on detection with tamper alerts",
      "Battery level monitoring and alerts",
      "Direct emergency contact notification",
    ],

    challenges:
      "Reducing false positives was a key challenge, as normal road conditions like potholes should not trigger an alert. This was addressed by implementing a multi-stage detection approach using sensor fusion and time-window analysis to accurately distinguish real accidents from noise or sudden movements.",
    github: "https://github.com/Priyansh-Shukla14/Smart-Helmet-For-Riders-.git",
    demo: "#",
    color: "#60A5FA",
  },
  {
    id: 3,
    title: "Anti-Poaching Tripwire",
    subtitle: "Wildlife Protection System",

    shortDesc: "IoT-based perimeter monitoring system that detects suspicious sounds and alerts authorities about potential poaching activities.",

    techStack: ["ESP32", "IoT", "Audio Processing", "Embedded Systems"],

    fullDescription:
      "The Anti-Poaching Tripwire System is an IoT-based wildlife protection solution designed to monitor forest areas for suspicious activities. The system uses microphones to continuously capture environmental sounds and detect abnormal audio patterns such as gunshots or unusual disturbances. When such sounds are detected, the system stores the audio and flags it for further analysis, helping authorities identify potential poaching activities.",

    problemStatement:
      "Wildlife poaching poses a serious threat to biodiversity, especially in remote forest areas where monitoring is limited. Traditional surveillance methods are expensive and not scalable, making it difficult for forest officials to continuously track illegal activities.",

    tools: ["ESP32", "MAX4466 Microphone", "INMP441 Microphone", "SD Card Module", "Python (for analysis)"],

    techniques: ["Audio Signal Processing", "Threshold-based Sound Detection", "Chunk-based Audio Analysis", "Embedded System Design"],

    keyFeatures: [
      "Real-time sound-based trigger detection",
      "Audio recording for suspicious events",
      "Low-power embedded deployment",
      "Offline audio analysis for classification",
      "Simple and cost-effective design",
      "Scalable for multiple forest locations",
    ],

    challenges:
      "Distinguishing meaningful sounds like gunshots from background noise was a major challenge. This was handled using threshold-based triggering combined with chunk-level audio analysis, ensuring that only relevant audio segments are captured while reducing unnecessary recordings.",
    github: "https://github.com/Priyansh-Shukla14/Anti-Poaching-System.git",
    demo: "#",
    color: "#34D399",
  },
  {
    id: 4,
    title: "Automated Book Sorting",
    subtitle: "Rover-Mounted Robotic Arm System",
    shortDesc: "Team project developing a rover-mounted robotic arm that autonomously picks up books and places them in designated locations, controlled via Arduino.",
    techStack: ["Arduino", "SolidWorks", "Robotics", "Mechanical Design"],
    fullDescription:
      "The Automated Book Sorting System is a comprehensive robotics project featuring a rover-mounted robotic arm designed to autonomously pick up books and place them in pre-defined locations. The system combines electrical controls via Arduino with precision mechanical components designed in SolidWorks, creating a fully integrated solution for intelligent library automation.",
    problemStatement:
      "Manual book sorting in libraries is labor-intensive and time-consuming. There is a need for an autonomous system that can reliably identify book locations, pick them up without damage, and place them in designated shelving areas, reducing manual workload and improving efficiency.",
    tools: ["Arduino", "SolidWorks", "Servo Motors", "Stepper Motors", "Sensors (Proximity, Ultrasonic)", "Mechanical Components (Gears, Frames, Joints)"],
    techniques: ["Robotic Arm Kinematics", "Motion Path Planning", "Sensor-Based Navigation", "CAD Modeling", "Embedded Systems Programming", "Autonomous Control Systems"],
    keyFeatures: [
      "Autonomous rover navigation using ultrasonic sensors",
      "Multi-DOF robotic arm with precise motion control",
      "Gripper mechanism for safe book handling",
      "Pre-programmed placement locations",
      "Real-time sensor feedback for obstacle avoidance",
      "Arduino-based centralized control system",
    ],
    challenges:
      "The main challenges were achieving proper arm kinematics for accurate book placement and ensuring smooth interaction between the rover's navigation and arm's manipulation. Solved through iterative SolidWorks simulations and Arduino motion calibration, along with implementing feedback mechanisms from multiple sensors.",
    github: "https://github.com/Priyansh-Shukla14/Automated-Book-Sorting-System-Using-Robotic-Arm-Integration.git",
    demo: "#",
    color: "#A78BFA",
  },
  {
    id: 5,
    title: "Acoustic Edge AI Detector",
    subtitle: "Edge-AI Monitoring Network",
    shortDesc: "A secure, multi-page web platform for an Edge-AI Acoustic Detection Network featuring authenticated access and a cyber-aesthetic design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    fullDescription: "The Acoustic Edge AI Event Detector is a secure monitoring platform designed for an Edge-AI Acoustic Detection Network. It provides an intuitive dashboard for monitoring edge-level acoustic events with a professional, dark cyber-aesthetic interface. The system ensures that only authenticated users can access internal pages and monitoring logs.",
    problemStatement: "Monitoring remote acoustic sensors requires a centralized platform that is both secure and accessible. There was a critical need for an authenticated interface that could display edge-AI event detections while strictly preventing unauthorized access to the system.",
    tools: ["HTML5", "Vanilla CSS", "JavaScript", "Vercel"],
    techniques: ["Authentication Handling", "Client-Side Routing", "Responsive UI/UX", "Static Deployment Optimization"],
    keyFeatures: [
      "Mandatory login-protected navigation",
      "Dynamic dashboard for event monitoring",
      "Professional dark cyber-aesthetic theme",
      "Seamless client-side redirection",
      "Optimized for Vercel deployment"
    ],
    challenges: "Handling client-side routing securely on a static deployment platform (Vercel) posed challenges with 404 errors during page reloads. This was resolved by configuring proper routing rules and optimizing the authentication workflow for immediate dashboard redirection upon successful login.",
    github: "https://github.com/Priyansh-Shukla14/Distributed-Edge-Ai-Event-Detector.git",
    demo: "#",
    color: "#EF4444",
  },
];

export const experiences = [
  {
    org: "RVCE Rotaract Club",
    logo: import.meta.env.BASE_URL + "images/rotaract.png",
    roles: [
      {
        title: "Organiser",
        period: "Dec 2025 – Present",
        events: [
          {
            name: "Project Pustak",
            desc: " Volunteered in Project Pustak, contributing to a book donation drive that collected and distributed 24,000+ books to underprivileged schools across Bangalore.",
          },
          {
            name: "FastTrek 4.0",
            desc: "Volunteered in FastTrek 4.0, assisting in the coordination of a trek to Kaurva Kunda Hills for 500+ students. ",
          },
          {
            name: "Secret Santa",
            desc: "Volunteered in a Secret Santa initiative, visiting NGOs and distributing gifts to underprivileged children during Christmas, contributing to spreading joy and community engagement.",
          },
          {
            name: "Uptown Junk",
            desc: "Volunteered at “Uptown Junk” event organized by Rotaract Club, contributing to the coordination of a Treasure Hunt (Day 1) and a Best Out of Waste competition (Day 2). Assisted in event execution, participant management. ",
          },
        ],
      },
      {
        title: "Member",
        period: "Nov 2025 – Dec 2025",
        events: [],
      },
    ],
  },
  {
    org: "PROJECT JATAYU at RVCE",
    logo: "https://github.com/project-jatayu.png",
    roles: [
      {
        title: "Member",
        period: "Nov 2024 – Dec 2025",
        events: [
          {
            name: "Autonomous Aerial Vehicle Development",
            desc: "Contributed to the development and testing of autonomous aerial systems, working on control systems and sensor integration.",
          },
        ],
      },
    ],
  },
];

export const achievements = [
  {
    title: "1st Place – CTF by CyberPeace Corps",
    year: "2025",
    desc: "Secured 1st place in the Capture The Flag competition organized by CyberPeace Corps, KIITS, demonstrating strong cybersecurity and problem-solving skills.",
    icon: "🏆",
  },
  {
    title: "8th Position – Hackemon CTF at RVCE",
    year: "2025",
    desc: "Achieved 8th position in Hackemon CTF held at RV College of Engineering, competing against teams across multiple colleges.",
    icon: "🎯",
  },
  {
    title: "Best Organiser of the Month – Rotaract RVCE",
    year: "Jan 2026",
    desc: "Awarded the 'Best Organiser of the Month' certificate for January 2026 in recognition of dedicated service at Rotaract Club RVCE.",
    icon: "🌟",
  },
];
