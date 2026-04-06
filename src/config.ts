export const siteConfig = {
  name: "Syu-Huei Huang",
  title: "Actively Seeking Internship Opportunuties in Summer 2026",
  description: "Portfolio website of Syu-Huei Huang",
  accentColor: "#1d4ed8",
  social: {
    email: "syuhueihuang@example.com",
    linkedin: "https://linkedin.com/in/syuhueihuang",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/syuhueihuang",
  },
  aboutMe:
    `I am Syu-Huei Huang, an M.S. student in Electrical and Computer Engineering at the University of Florida, specializing in Computer Vision, Deep Learning, and Autonomous Navigation. 

    My research focuses on enhancing the perception and decision-making capabilities of autonomous systems. I am currently developing a VLM-Guided Autonomous Mobile Manipulation System. By leveraging the zero-shot reasoning capabilities of Vision-Language Models, I am building a framework that allows mobile robots to interpret natural language commands, navigate autonomously, and manipulate objects precisely without the need for task-specific retraining. My academic contributions include a published paper on video captioning in the IEEE Internet of Things Journal. 

    I am passionate about pushing the boundaries of AI to solve complex, real-world challenges in robotics and medical imaging.`,
  skills: [
    "Python",
    "C/C++",
    "MATLAB",
    "Git",
    "Linux",
    "ROS2",
    "AWS EC2",
    "NVIDIA Jetson Nano/TX2",
    "Raspberry Pi",
    "Arduino",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Scikit-learn",
    "YOLO",
    "Transformers",
    "U-Net",
    "GANs",
    "ResNet",
    "Image Processing",
    "CNN",
  ],
  projects: [
    {
      name: "VLM-Guided Autonomous Mobile Manipulation System",
      description:
        "Developed an end-to-end VLM/LLM-based robotic system using ROS2, integrating SLAM-based navigation and object detection for precise autonomous pick-and-place tasks.",
      link: "",
      skills: ["Python", "ROS2", "LLM/VLM", "Object Detection", "SLAM"],
    },
    {
      name: "Real-time Lane Departure Warning System",
      description:
        "Led a cross-functional team of 8 to develop an ADAS prototype, establishing a CARLA-based testing pipeline for risk-free validation before deploying a real-time lane detection model on NVIDIA Jetson Nano with CUDA",
      link: "",
      skills: ["OpenCV", "Deep Learning", "Embedded Systems", "CARLA" ,"Project Leadership"],
    },
    {
      name: "CT-MR Thorax-abdomen Intra-patient Registration based on Diffeomorphic VoxelMorph",
      description:
        "Developed a Diffeomorphic VoxelMorph framework utilizing Stationary Velocity Fields and hybrid loss to handle large deformations, yielding <strong>>100%</strong> MI improvement and reducing folding artifacts to <strong>0.08%</strong> compared to standard baselines",
      link: "",
      skills: ["Medical Imaging", "Diffeomorphic Registration", "VoxelMorph", "Mutual Information", "Deformation Field Analysis"],
    },
    {
      name: "Multi-Class Cardiac and Lung Anatomy Segmentation",
      description:
        "Leveraged PyTorch and MONAI to implement CNN and Transformer-based models for multi-class segmentation, achieving an <strong>83.05%</strong> Dice score on ACDC MRI and COVID-19 X-ray benchmarks",
      link: "",
      skills: ["Medical Imaging", "U-Net", "SwinUNETR", "Res-UNet", "TransUNet"],
    },
    {
      name: "ML-Powered Ship Detection & Feature Reduction",
      description:
        "Developed a ship detection system based on machine learning and dimensionality reduction techniques, achieving up to <strong>95.53%</strong> accuracy by employing Random Forest, MLP , PCA, Isomap, LLE, and t-SNE algorithms",
      link: "",
      skills: ["MLP", "PCA", "Optimization", "Isomap", "LLE", "t-SNE"],
    },
  ],
  experience: [
    {
      company: "IoT Smart Living Laboratory",
      title: "Research Assistant",
      dateRange: "Sep 2021 - June 2023",
      bullets: [
        "First-authored a research paper published in IEEE Internet of Things Journal, presenting a novel attention mechanism for video captioning suitable for edge devices",
        "Designed a learnable mask attention mechanism and a custom loss function to prioritize salient visual information, outperforming SOTA methods with improvements of <strong>12.6%</strong> in BLEU4, <strong>4.27%</strong> in METEOR, and <strong>22.5%</strong> in CIDEr",
        "Built a lightweight frame selection model utilizing a novel attention enhancement residual gated network, successfully reducing model parameters by <strong>56.9%</strong> while maintaining inference performance",
        "Conducted extensive experiments on large-scale datasets to validate the system's robustness and efficiency in real-world IoT scenarios",
      ],
    },
    {
      company: "Intelligent Control Laboratory",
      title: "Undergraduate Research Assistant",
      dateRange: "Feb 2020 - May 2021",
      bullets: [
        "Developed a real-time fire detection system using OpenCV on Raspberry Pi, enabling vision-based decision-making with <strong>95%</strong> accuracy in autonomous rescue scenarios",
        "Designed Arduino microcontroller in C++ to control actuators (water pump, motors), achieving real-time response with <strong>less than 1-second</strong> latency based on sensory input and Raspberry Pi commands",
        "Won the outstanding award in the Academic Year Project Competition held by the department",
      ],
    },
  ],
  education: [
    {
      school: "University of Florida",
      degree: "Master of Science in Electrical and Computer Engineering",
      dateRange: "2025 - 2027",
      achievements: [
        "GPA: 4.0",
        "Achievement Award Scholarship",
      ],
    },
    {
      school: "National Taiwan University of Science and Technology",
      degree: "Master of Science in Electrical Engineering",
      dateRange: "2021 - 2023",
      achievements: [
        "Published as First Author in IEEE Internet of Things Journal, focusing on Dense Video Captioning",
        "Best Paper Award issued by 2023 National Computer Symposium",
        "Fisrt Place of 2022 Advantech AIoT Developer Innoworks Competition",
      ],
    },
    {
      school: "Chung Yuan Christian University",
      degree: "Bachelor of Science in Electrical Engineering",
      dateRange: "2017 - 2021",
      achievements: [
        "Academic Excellence Award",
        "Outstanding Service Award",
        "President of the 43th Student Association of the Department of Electrical Engineering",
      ],
    },
  ],
  publications: [
    {
      title: "Sequence-Aware Learnable Sparse Mask for Frame-Selectable End-to-End Dense Video Captioning for IoT Smart Cameras",
      authors: "Syu-Huei Huang, Ching-Hu Lu",
      journal: "IEEE Internet of Things Journal",
      year: 2023,
      link: "https://ieeexplore.ieee.org/document/10330595",
      description: "In recent years, Artificial Intelligence of Things (AIoT) has been widely adopted across various smart systems, accelerating the development of edge computing. Nevertheless, existing research on end-to-end dense video captioning falls short in one of two areas: 1) either it does not prioritize global information or 2) it tends to focus on irrelevant details. Our study proposes an end-to-end dense video captioning model with sequence-aware learnable sparse mask. This model results in improved focus on essential information in a video while ignoring irrelevant details, thus enhancing the quality of caption generation. In addition, existing video captioning research which uses all input video frames are frequently hampered by redundancy and thus generate incorrect captions. To overcome this issue, we propose a lightweight frame selection model that primarily utilizes our proposed lightweight attention-enhancement residual gated network to achieve the desired accuracy with a smaller computational cost. The effectiveness of our proposed approaches was tested and compared to existing models. Our model achieved higher accuracy compared to previous studies, and the lightweight frame selection network resulted in higher efficiency while generating more accurate captions after frame selection."
    },
    {
      title: "Hand-detection with Transferrable Design for Smart Factories",
      authors: "Guan-Ting Liu, Ching-Hu Lu, Syu-Huei Huang",
      journal: "2021 International Symposium on Intelligent Signal Processing and Communication Systems (ISPACS)",
      year: 2021,
      link: "https://ieeexplore.ieee.org/document/9651134",
      description: "Nowadays, a smart factory in Industry 4.0 often must produce a variety of products, so its assemblers need to learn different assembly processes and post-inspections. Smart cameras that leverage edge computing (hereinafter referred to as edge cameras) can now incorporate deep neural networks (DNNs) and have been widely used in smart factories. However, in response to the demand for rapid learning and deployment of DNNs across different assembly lines, which has not been addressed in previous studies, we propose 'Knowledge Transfer across Multiple Assembly Lines' (KTaMAL) to transfer learned knowledge across different assembly lines. The experimental results show that the model prediction accuracy of KTaMAL is improved by 8% compared with non-transfer-learning based approaches and the training time can be significantly reduced by approximately 80%."
    },
  ],
};
