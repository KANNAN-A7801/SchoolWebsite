/* ==========================================================================
   ENGLORAY LEARNING - CENTRAL COURSES JSON DATASET
   Contains Grade 3 through Grade 10 Courses, Chapter 1 Classes, Video Embeds & Website Links
   ========================================================================== */

const COURSES_DATA = {
  currentGradeNumber: 5,
  currentTermNumber: 1,
  currentChapterNumber: 1,
  
  // Default Active Chapter Classes List (Grade 5 Chapter 1)
  classes: [
    {
      id: 6,
      dayNumber: 1,
      title: "Class 1: Computer Fundamentals, Hardware Devices & Computer System",
      description: "Topics Covered: Introduction to Computers, Computer Fundamentals, Computer System, Hardware Devices, Internal Hardware, External Hardware, Functions of Hardware Devices, Input, Output and Storage Overview.",
      isUnlockedByAdmin: true,
      prerequisiteDayNumber: null,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Watch the complete lesson video to master topic concepts.",
          videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Read through the detailed topic documentation and reference material.",
          pdfUrl: "/asset/5th class/chapter 1/class 1/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Computer System: Combination of hardware and software working together.",
            "Internal Hardware: CPU, Motherboard, RAM, Hard Disk drive.",
            "External Peripherals: Monitor, Keyboard, Mouse, Printer, Scanner."
]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Explore the interactive educational website portal for hands-on practice.",
          websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
          portalName: "Educational Resource Portal"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Test your understanding of the class topics. Passing score is 80%.",
          passingScorePercent: 80,
          question: "Which component is considered internal hardware?",
          options: [
            {
                        "id": 31,
                        "text": "CPU / Motherboard",
                        "isCorrect": true
            },
            {
                        "id": 32,
                        "text": "Printer",
                        "isCorrect": false
            },
            {
                        "id": 33,
                        "text": "External USB Flash Drive",
                        "isCorrect": false
            }
]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Complete the practical worksheet and submit your work.",
          instructions: "Class 1: Hardware Device Identification & Picture Matching Worksheet.",
          pdfUrl: "/asset/5th class/chapter 1/class 1/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    },
    {
      id: 7,
      dayNumber: 2,
      title: "Class 2: Input, Output & Storage Devices in Daily Life",
      description: "Topics Covered: Input Devices, Output Devices, Storage Devices, Keyboard, Mouse, Scanner, Microphone, Webcam, Monitor, Printer, Speakers, Hard Disk, Pen Drive.",
      isUnlockedByAdmin: true,
      prerequisiteDayNumber: 1,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Watch the complete lesson video to master topic concepts.",
          videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Read through the detailed topic documentation and reference material.",
          pdfUrl: "/asset/5th class/chapter 1/class 2/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Input Devices: Keyboard, Mouse, Scanner, Microphone, Webcam.",
            "Output Devices: Monitor, Printer, Speakers, Headphones, Projector.",
            "Storage Media: Hard Disk Drive, Solid State Drive, USB Flash Drive, SD Cards."
]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Explore the interactive educational website portal for hands-on practice.",
          websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
          portalName: "Educational Resource Portal"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Test your understanding of the class topics. Passing score is 80%.",
          passingScorePercent: 80,
          question: "Which device is used to enter text into a computer?",
          options: [
            {
                        "id": 41,
                        "text": "Keyboard",
                        "isCorrect": true
            },
            {
                        "id": 42,
                        "text": "Monitor",
                        "isCorrect": false
            },
            {
                        "id": 43,
                        "text": "Speakers",
                        "isCorrect": false
            }
]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Complete the practical worksheet and submit your work.",
          instructions: "Class 2: Input, Output & Storage Device Sorting Worksheet.",
          pdfUrl: "/asset/5th class/chapter 1/class 2/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    },
    {
      id: 8,
      dayNumber: 3,
      title: "Class 3: Computer Care, Digital Ethics & Responsible Technology Use",
      description: "Topics Covered: Safe Handling, Lab Rules, Digital Ethics, Internet Safety Basics, Strong Passwords, Protecting Information, Screen Time Awareness.",
      isUnlockedByAdmin: false,
      prerequisiteDayNumber: 2,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Watch the complete lesson video to master topic concepts.",
          videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Read through the detailed topic documentation and reference material.",
          pdfUrl: "/asset/5th class/chapter 1/class 3/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Digital Ethics: Be respectful, honest, and safe online.",
            "Password Security: Combine uppercase, lowercase, numbers, and symbols.",
            "Screen Time: Take regular eye breaks every 20 minutes."
]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Explore the interactive educational website portal for hands-on practice.",
          websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
          portalName: "Educational Resource Portal"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Test your understanding of the class topics. Passing score is 80%.",
          passingScorePercent: 80,
          question: "What is a good rule for online password security?",
          options: [
            {
                        "id": 51,
                        "text": "Keep passwords secret and use strong combinations",
                        "isCorrect": true
            },
            {
                        "id": 52,
                        "text": "Share passwords with everyone online",
                        "isCorrect": false
            },
            {
                        "id": 53,
                        "text": "Use simple words like 12345",
                        "isCorrect": false
            }
]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Complete the practical worksheet and submit your work.",
          instructions: "Class 3: Computer Safety Checklist & Digital Ethics Poster Worksheet.",
          pdfUrl: "/asset/5th class/chapter 1/class 3/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    },
    {
      id: 9,
      dayNumber: 4,
      title: "Class 4: Revision, Discussion & Assessment",
      description: "Topics Covered: Chapter Revision, Device Identification, Question & Answer Session, Feedback & Practical Revision.",
      isUnlockedByAdmin: false,
      prerequisiteDayNumber: 3,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Watch the complete lesson video to master topic concepts.",
          videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Read through the detailed topic documentation and reference material.",
          pdfUrl: "/asset/5th class/chapter 1/class 4/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Comprehensive recap of computer fundamentals and ethics.",
            "Device identification and daily life scenario problem solving."
]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Explore the interactive educational website portal for hands-on practice.",
          websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
          portalName: "Educational Resource Portal"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Test your understanding of the class topics. Passing score is 80%.",
          passingScorePercent: 80,
          question: "What type of device is a digital scanner?",
          options: [
            {
                        "id": 61,
                        "text": "Input Device",
                        "isCorrect": true
            },
            {
                        "id": 62,
                        "text": "Output Device",
                        "isCorrect": false
            },
            {
                        "id": 63,
                        "text": "Storage Device",
                        "isCorrect": false
            }
]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Complete the practical worksheet and submit your work.",
          instructions: "Class 4: Practical Revision & Oral Assessment Challenge.",
          pdfUrl: "/asset/5th class/chapter 1/class 4/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    }
  ],

  // Full Curriculum Hierarchy (Grades 3 to 10)
  grades: [
    {
      gradeNumber: 3,
      gradeName: "Grade 3",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: Computer Fundamentals",
          description: "What is a computer, main computer parts, sitting posture & computer safety.",
          classes: [
            {
              id: 301,
              dayNumber: 1,
              title: "Class 1: What is a Computer? Uses of Computers in Daily Life",
              description: "Introduction to electronic machines, where computers are used (schools, hospitals, banks), and desktop overview.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 1/Topics Covered.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Computers process data to perform daily tasks.", "Found in schools, hospitals, banks, and homes."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which of the following is an electronic machine?",
                  options: [{"id": 3011, "text": "Computer", "isCorrect": true}, {"id": 3012, "text": "Wooden Chair", "isCorrect": false}, {"id": 3013, "text": "Paper Book", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Computer Picture Identification & Uses Matching Activity.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 1/Practical  Activities.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 302,
              dayNumber: 2,
              title: "Class 2: Main Parts of a Computer (Monitor, Keyboard, Mouse, CPU)",
              description: "Learn CPU box, display screen, keyboard keys, and mouse clicking techniques.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 2/Topic Covered.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["CPU is the brain of the computer.", "Keyboard helps type letters and numbers."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is known as the brain of the computer?",
                  options: [{"id": 3021, "text": "CPU (Central Processing Unit)", "isCorrect": true}, {"id": 3022, "text": "Monitor Screen", "isCorrect": false}, {"id": 3023, "text": "Speakers", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 2: Label the Computer Parts Diagram Worksheet.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 2/Practical Activities.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 303,
              dayNumber: 3,
              title: "Class 3: Computer Care, Lab Rules & Sitting Posture",
              description: "Cleanliness, safe posture, lab guidelines, and gentle device handling.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 3/TOPIC COVERED.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Keep computer lab clean and dust-free.", "Sit upright with back supported."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "How should you press keys on a keyboard?",
                  options: [{"id": 3031, "text": "Gently and softly", "isCorrect": true}, {"id": 3032, "text": "Bang them hard", "isCorrect": false}, {"id": 3033, "text": "Press with heavy objects", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 3: Computer Safety Rules & Good Posture Demonstration.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 3/Practical Activity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 304,
              dayNumber: 4,
              title: "Class 4: Chapter Revision & Oral Discussion",
              description: "Summary of fundamentals, parts identification, and oral quiz review.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 4/TOPIC COVERED.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Recap of computer definition, core parts, and safe handling."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which part displays text and images like a TV?",
                  options: [{"id": 3041, "text": "Monitor", "isCorrect": true}, {"id": 3042, "text": "Mouse", "isCorrect": false}, {"id": 3043, "text": "Keyboard", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 4: Chapter 1 Oral Quiz & Interactive Parts Identification Challenge.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 4/practical activity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    },
    {
      gradeNumber: 4,
      gradeName: "Grade 4",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: Computer Basics & Operating System",
          description: "Hardware vs Software, Windows Desktop, Files, Folders, and Mouse Gestures.",
          classes: [
            {
              id: 401,
              dayNumber: 1,
              title: "Class 1: Computer Systems & Core Functions",
              description: "Introduction to computer system components and the input-process-output data flow.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/dGAEvyDdYQA?si=ROehMABttqY7mlb5"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/4th class/Chapter-1/1/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Input -> Process -> Output cycle.", "Data is converted into meaningful information."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://youtu.b",
                  portalName: "Youtu.b Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is the first step in the data processing flow?",
                  options: [{"id": 4011, "text": "Input", "isCorrect": true}, {"id": 4012, "text": "Output", "isCorrect": false}, {"id": 4013, "text": "Printout", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Input-Process-Output Flowchart Assignment.",
                  pdfUrl: "/asset/4th class/Chapter-1/1/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 402,
              dayNumber: 2,
              title: "Class 2: Hardware vs Software Concepts",
              description: "Differentiating physical parts (hardware) from digital programs (software).",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/dGAEvyDdYQA?si=ROehMABttqY7mlb5"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/4th class/Chapter-1/2/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Hardware: Physical touchable components.", "Software: Instructions executed by hardware."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://youtu.b",
                  portalName: "Youtu.b Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which item is an example of Software?",
                  options: [{"id": 4021, "text": "MS Paint Program", "isCorrect": true}, {"id": 4022, "text": "Computer Keyboard", "isCorrect": false}, {"id": 4023, "text": "Mouse Pad", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 2: Hardware vs Software Sorting Worksheet.",
                  pdfUrl: "/asset/4th class/Chapter-1/2/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 403,
              dayNumber: 3,
              title: "Class 3: Operating System & Windows Desktop Interface",
              description: "Taskbar, Start Menu, Desktop Icons, Wallpaper, and Window Controls.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/dGAEvyDdYQA?si=ROehMABttqY7mlb5"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/4th class/Chapter-1/3/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["OS manages computer resources and files.", "Desktop is the main opening screen."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://youtu.b",
                  portalName: "Youtu.b Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which button opens all installed computer programs?",
                  options: [{"id": 4031, "text": "Start Menu Button", "isCorrect": true}, {"id": 4032, "text": "Recycle Bin", "isCorrect": false}, {"id": 4033, "text": "Volume Slider", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 3: Desktop Exploration & Icon Arrangement Practice.",
                  pdfUrl: "/asset/4th class/Chapter-1/3/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 404,
              dayNumber: 4,
              title: "Class 4: File & Folder Management Basics",
              description: "Creating new folders, saving files, renaming, and deleting files safely.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/dGAEvyDdYQA?si=ROehMABttqY7mlb5"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/4th class/Chapter-1/4/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Folders organize related files into groups.", "File names identify individual documents."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://youtu.b",
                  portalName: "Youtu.b Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is used to organize multiple files together?",
                  options: [{"id": 4041, "text": "Folder", "isCorrect": true}, {"id": 4042, "text": "Power Switch", "isCorrect": false}, {"id": 4043, "text": "Monitor Cable", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 4: Create & Rename Student Practice Folder Activity.",
                  pdfUrl: "/asset/4th class/Chapter-1/4/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    },
    {
      gradeNumber: 5,
      gradeName: "Grade 5",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: Computer Skills & Hardware Devices",
          description: "Computer Fundamentals, Hardware Devices, Input/Output/Storage Devices, Computer Care & Ethics.",
          classes: [
            {
              id: 6,
              dayNumber: 1,
              title: "Class 1: Computer Fundamentals, Hardware Devices & Computer System",
              description: "Topics Covered: Introduction to Computers, Computer Fundamentals, Computer System, Hardware Devices, Internal Hardware, External Hardware, Functions of Hardware Devices, Input, Output and Storage Overview.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/5th class/chapter 1/class 1/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Computer System: Combination of hardware and software working together.", "Internal Hardware: CPU, Motherboard, RAM, Hard Disk drive.", "External Peripherals: Monitor, Keyboard, Mouse, Printer, Scanner."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which component is considered internal hardware?",
                  options: [{"id": 31, "text": "CPU / Motherboard", "isCorrect": true}, {"id": 32, "text": "Printer", "isCorrect": false}, {"id": 33, "text": "External USB Flash Drive", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 1: Hardware Device Identification & Picture Matching Worksheet.",
                  pdfUrl: "/asset/5th class/chapter 1/class 1/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 7,
              dayNumber: 2,
              title: "Class 2: Input, Output & Storage Devices in Daily Life",
              description: "Topics Covered: Input Devices, Output Devices, Storage Devices, Keyboard, Mouse, Scanner, Microphone, Webcam, Monitor, Printer, Speakers, Hard Disk, Pen Drive.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/5th class/chapter 1/class 2/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Input Devices: Keyboard, Mouse, Scanner, Microphone, Webcam.", "Output Devices: Monitor, Printer, Speakers, Headphones, Projector.", "Storage Media: Hard Disk Drive, Solid State Drive, USB Flash Drive, SD Cards."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which device is used to enter text into a computer?",
                  options: [{"id": 41, "text": "Keyboard", "isCorrect": true}, {"id": 42, "text": "Monitor", "isCorrect": false}, {"id": 43, "text": "Speakers", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 2: Input, Output & Storage Device Sorting Worksheet.",
                  pdfUrl: "/asset/5th class/chapter 1/class 2/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 8,
              dayNumber: 3,
              title: "Class 3: Computer Care, Digital Ethics & Responsible Technology Use",
              description: "Topics Covered: Safe Handling, Lab Rules, Digital Ethics, Internet Safety Basics, Strong Passwords, Protecting Information, Screen Time Awareness.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/5th class/chapter 1/class 3/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Digital Ethics: Be respectful, honest, and safe online.", "Password Security: Combine uppercase, lowercase, numbers, and symbols.", "Screen Time: Take regular eye breaks every 20 minutes."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is a good rule for online password security?",
                  options: [{"id": 51, "text": "Keep passwords secret and use strong combinations", "isCorrect": true}, {"id": 52, "text": "Share passwords with everyone online", "isCorrect": false}, {"id": 53, "text": "Use simple words like 12345", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 3: Computer Safety Checklist & Digital Ethics Poster Worksheet.",
                  pdfUrl: "/asset/5th class/chapter 1/class 3/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 9,
              dayNumber: 4,
              title: "Class 4: Revision, Discussion & Assessment",
              description: "Topics Covered: Chapter Revision, Device Identification, Question & Answer Session, Feedback & Practical Revision.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/5th class/chapter 1/class 4/TOPIC COVERED.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Comprehensive recap of computer fundamentals and ethics.", "Device identification and daily life scenario problem solving."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What type of device is a digital scanner?",
                  options: [{"id": 61, "text": "Input Device", "isCorrect": true}, {"id": 62, "text": "Output Device", "isCorrect": false}, {"id": 63, "text": "Storage Device", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 4: Practical Revision & Oral Assessment Challenge.",
                  pdfUrl: "/asset/5th class/chapter 1/class 4/practical activities.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    },
    {
      gradeNumber: 6,
      gradeName: "Grade 6",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: Computer Fundamentals & Architecture",
          description: "CPU architecture, memory types (RAM/ROM), storage units, and motherboard buses.",
          classes: [
            {
              id: 601,
              dayNumber: 1,
              title: "Class 1: Primary Memory vs Secondary Memory",
              description: "RAM, ROM, Cache Memory, Hard Disk, SSD, and Memory Hierarchy.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/qMkFoU12lHI?si=-pDVGiKvsQGGmUr7"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["RAM is volatile working memory.", "ROM stores permanent boot instructions."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/operating-systems/operating-systems/",
                  portalName: "Www.geeksforgeeks.org Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which type of memory loses its content when power is switched off?",
                  options: [{"id": 6011, "text": "RAM (Random Access Memory)", "isCorrect": true}, {"id": 6012, "text": "ROM (Read Only Memory)", "isCorrect": false}, {"id": 6013, "text": "Hard Disk Drive", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Memory Classification & RAM vs ROM Comparison Table.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 602,
              dayNumber: 2,
              title: "Class 2: CPU Architecture & Control Unit Functions",
              description: "ALU, Control Unit, Registers, Clock Speed, and Processing Cycles.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/qMkFoU12lHI?si=-pDVGiKvsQGGmUr7"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["ALU performs arithmetic and logical operations.", "Control Unit manages data movement."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/operating-systems/operating-systems/",
                  portalName: "Www.geeksforgeeks.org Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which CPU unit performs mathematical calculations?",
                  options: [{"id": 6021, "text": "ALU (Arithmetic Logic Unit)", "isCorrect": true}, {"id": 6022, "text": "Power Supply", "isCorrect": false}, {"id": 6023, "text": "Graphics Port", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 2: CPU Internal Block Diagram Labeling Activity.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 603,
              dayNumber: 3,
              title: "Class 3: Input/Output Device Interfacing & Ports",
              description: "USB ports, HDMI, Ethernet, Bluetooth, wireless devices, and device drivers.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/qMkFoU12lHI?si=-pDVGiKvsQGGmUr7"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Device drivers allow OS to communicate with hardware.", "USB is universal serial bus."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/operating-systems/operating-systems/",
                  portalName: "Www.geeksforgeeks.org Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What software program enables the OS to recognize new hardware?",
                  options: [{"id": 6031, "text": "Device Driver", "isCorrect": true}, {"id": 6032, "text": "Web Browser", "isCorrect": false}, {"id": 6033, "text": "Calculator", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 3: Computer Ports & Connector Cables Identification Guide.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 604,
              dayNumber: 4,
              title: "Class 4: Chapter 1 Review & Quiz Challenge",
              description: "Recap of memory hierarchy, CPU functions, ports, and hardware troubleshooting.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/qMkFoU12lHI?si=-pDVGiKvsQGGmUr7"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Review of memory units (KB, MB, GB, TB) and hardware architecture."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/operating-systems/operating-systems/",
                  portalName: "Www.geeksforgeeks.org Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "How many Megabytes (MB) are in 1 Gigabyte (GB)?",
                  options: [{"id": 6041, "text": "1024 MB", "isCorrect": true}, {"id": 6042, "text": "100 MB", "isCorrect": false}, {"id": 6043, "text": "10 MB", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 4: Chapter 1 Interactive Quiz & Hardware Matching Challenge.",
                  pdfUrl: "/asset/6th class/Chapter 1 Computer Fundamentals/Class VI – Term I Digital Foundation.docx",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    },
    {
      gradeNumber: 7,
      gradeName: "Grade 7",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: Computer Fundamentals & Peripherals",
          description: "Computer Architecture, System Unit, Internal Component Functions, Input/Output Media.",
          classes: [
            {
              id: 701,
              dayNumber: 1,
              title: "Class 1: Computer Architecture & Motherboard Components",
              description: "Processor sockets, RAM slots, expansion cards, power supply, and system buses.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/7th class/Class VII – Term I Future Skills.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Motherboard acts as the central printed circuit board.", "Buses transport data between CPU and memory."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which component connects all hardware parts on a computer?",
                  options: [{"id": 7011, "text": "Motherboard", "isCorrect": true}, {"id": 7012, "text": "Hard Disk", "isCorrect": false}, {"id": 7013, "text": "Monitor", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Motherboard Component Labeling & Function Matching Worksheet.",
                  pdfUrl: "/asset/7th class/Class VII – Term I Future Skills.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 702,
              dayNumber: 2,
              title: "Class 2: Secondary Storage Devices & Optical/Solid State Media",
              description: "HDD, SSD, NVMe, USB Flash drives, SD Cards, Optical discs (CD/DVD/Blu-ray).",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/7th class/1/CLASSES COVERED.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["SSD uses flash memory with zero moving parts.", "NVMe provides high-speed data throughput."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which storage device has no moving mechanical parts?",
                  options: [{"id": 7021, "text": "SSD (Solid State Drive)", "isCorrect": true}, {"id": 7022, "text": "Mechanical Hard Disk Drive", "isCorrect": false}, {"id": 7023, "text": "Floppy Disk", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 2: Storage Media Comparison & Transfer Speed Analysis Activity.",
                  pdfUrl: "/asset/7th class/1/Chapter-End Activities.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 703,
              dayNumber: 3,
              title: "Class 3: Advanced Input/Output Peripherals & Sensors",
              description: "Barcodes, RFID readers, biometric scanners, touchscreens, high-res plotters.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/7th class/1/FULL SYLLABUS.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Biometric scanners verify physical identity.", "Barcodes enable automated inventory."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which input device scans fingerprints for secure access?",
                  options: [{"id": 7031, "text": "Biometric Scanner", "isCorrect": true}, {"id": 7032, "text": "Dot Matrix Printer", "isCorrect": false}, {"id": 7033, "text": "Computer Speaker", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 3: Specialized Input/Output Peripherals Categorization.",
                  pdfUrl: "/asset/7th class/1/Chapter-End Activities.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 704,
              dayNumber: 4,
              title: "Class 4: Chapter 1 Review & Architecture Quiz",
              description: "Comprehensive review of motherboard buses, storage media, and peripheral interfacing.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/7th class/1/CLASSES COVERED.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Review of motherboard slots, storage speeds, and sensor inputs."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which bus transmits memory addresses from CPU to RAM?",
                  options: [{"id": 7041, "text": "Address Bus", "isCorrect": true}, {"id": 7042, "text": "Power Line", "isCorrect": false}, {"id": 7043, "text": "Audio Cable", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 4: Computer Architecture & Peripherals Revision Quiz.",
                  pdfUrl: "/asset/7th class/1/Chapter-End Activities.docx",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    },
    {
      gradeNumber: 8,
      gradeName: "Grade 8",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: Canva Basics & Visual Media Creation",
          description: "Graphic design principles, templates, posters, banners, and color theory.",
          classes: [
            {
              id: 801,
              dayNumber: 1,
              title: "Class 1: Introduction to Canva & Design Workspace",
              description: "Canvas setup, element placement, typography, and poster design.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/zEU7RrnYDp8?si=6PMddGc0q_s571bW"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Visual hierarchy guides viewer attention.", "Color harmony creates attractive designs."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.canva.in/templates/",
                  portalName: "Www.canva.in Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which tool in Canva is used to add text elements to your canvas?",
                  options: [{"id": 8011, "text": "Text Tool Sidebar", "isCorrect": true}, {"id": 8012, "text": "Background Filler", "isCorrect": false}, {"id": 8013, "text": "Crop Tool", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Design an Educational Event Poster in Canva.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 802,
              dayNumber: 2,
              title: "Class 2: Design Elements, Shapes & Icon Placement",
              description: "Working with shapes, lines, frames, graphics, and background gradients.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/zEU7RrnYDp8?si=6PMddGc0q_s571bW"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Shapes create visual structure.", "Frames mask photos into custom shapes."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.canva.in/templates/",
                  portalName: "Www.canva.in Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What Canva element allows cropping an image into a circle or custom shape?",
                  options: [{"id": 8021, "text": "Frame", "isCorrect": true}, {"id": 8022, "text": "Border Box", "isCorrect": false}, {"id": 8023, "text": "Text Box", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 2: Create a Custom Social Media Graphic using Shapes & Frames.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 803,
              dayNumber: 3,
              title: "Class 3: Typography & Font Pairing Techniques",
              description: "Font families (Serif vs Sans-Serif), hierarchy, line spacing, and readability.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/zEU7RrnYDp8?si=6PMddGc0q_s571bW"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Pair bold headers with clean body fonts.", "Ensure high contrast between text and background."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.canva.in/templates/",
                  portalName: "Www.canva.in Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which font style is cleanest for modern digital displays?",
                  options: [{"id": 8031, "text": "Sans-Serif (e.g. Inter / Outfit)", "isCorrect": true}, {"id": 8032, "text": "Curling Script", "isCorrect": false}, {"id": 8033, "text": "Decorative Gothic", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 3: Typography & Font Hierarchy Pairing Challenge.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 804,
              dayNumber: 4,
              title: "Class 4: Color Palettes & Contrast Rules",
              description: "Primary, secondary, complementary colors, contrast ratios, and mood boards.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/zEU7RrnYDp8?si=6PMddGc0q_s571bW"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Complementary colors create strong visual pop.", "Dark text on light background improves readability."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.canva.in/templates/",
                  portalName: "Www.canva.in Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which color combination offers the highest readability contrast?",
                  options: [{"id": 8041, "text": "Dark Navy Text on White Background", "isCorrect": true}, {"id": 8042, "text": "Yellow Text on White Background", "isCorrect": false}, {"id": 8043, "text": "Light Gray Text on White Background", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 4: Build a 4-Color Brand Palette & Mood Board in Canva.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 805,
              dayNumber: 5,
              title: "Class 5: Designing Digital Certificates & Badges",
              description: "Alignment tools, grid snapping, downloading PNG/PDF formats, and printing.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 4,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/zEU7RrnYDp8?si=6PMddGc0q_s571bW"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Alignment ensures professional symmetry.", "Export as PNG for web or PDF for print."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.canva.in/templates/",
                  portalName: "Www.canva.in Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which file format is best for high quality printing?",
                  options: [{"id": 8051, "text": "PDF Print", "isCorrect": true}, {"id": 8052, "text": "Low-res GIF", "isCorrect": false}, {"id": 8053, "text": "Text File", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 5: Design a Student Excellence Certificate in Canva.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 806,
              dayNumber: 6,
              title: "Class 6: Chapter 1 Design Project Presentation",
              description: "Showcase student design projects, peer reviews, and creative feedback.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 5,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/zEU7RrnYDp8?si=6PMddGc0q_s571bW"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Presenting design rationale and accepting constructive feedback."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.canva.in/templates/",
                  portalName: "Www.canva.in Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is the key objective of visual hierarchy in graphic design?",
                  options: [{"id": 8061, "text": "Guide the viewer's eye to the most important message first", "isCorrect": true}, {"id": 8062, "text": "Fill every inch of white space with clipart", "isCorrect": false}, {"id": 8063, "text": "Use as many different fonts as possible", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 6: Present Your Custom Canva Poster to the Class.",
                  pdfUrl: "/asset/8th class/Chapter 1 Canva Basics/Class VIII – Graphic Design & Digital Creativity.docx",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    },
    {
      gradeNumber: 9,
      gradeName: "Grade 9",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: Information Technology & Systems Architecture",
          description: "Data processing lifecycle, OS management, network fundamentals & file systems.",
          classes: [
            {
              id: 901,
              dayNumber: 1,
              title: "Class 1: Data Processing Cycle & Computer System Architecture",
              description: "Input, Processing, Storage, Output cycle and data representations.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/nVyD6THcvDQ?si=hYwHQGDu6i39_BsI"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Data processing converts raw facts into meaningful information.", "CPU coordinates ALU and Control Unit."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.coursera.org/articles/ai-productivity-tools",
                  portalName: "Www.coursera.org Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What are the four core stages of the data processing cycle?",
                  options: [{"id": 9011, "text": "Input, Processing, Storage, Output", "isCorrect": true}, {"id": 9012, "text": "Download, Upload, Edit, Delete", "isCorrect": false}, {"id": 9013, "text": "Compile, Debug, Run, Print", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Data Processing Cycle Flow Diagram & System Architecture Mapping.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 902,
              dayNumber: 2,
              title: "Class 2: Operating System Functions & File Systems",
              description: "Process management, memory allocation, file systems (FAT32, NTFS, ext4), and GUI.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/0dJj3XpTey0?si=8BQ9wBxdPH51wBME"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["File systems store and organize files on disk drives.", "NTFS supports file permissions and encryption."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://library.thechicagoschool.edu/c.php?g=1318063&p=10144836",
                  portalName: "Library.thechicagoschool.edu Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which file system is standard on modern Windows operating systems?",
                  options: [{"id": 9021, "text": "NTFS", "isCorrect": true}, {"id": 9022, "text": "Audio CD-DA", "isCorrect": false}, {"id": 9023, "text": "HTML5", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 2: File System Comparison & Directory Tree Building Exercise.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 903,
              dayNumber: 3,
              title: "Class 3: Computer Memory & Storage Units (Bytes to Terabytes)",
              description: "Binary representation, bits, bytes, KB, MB, GB, TB, PB, and data conversion calculations.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/wGLd43TkCGc?si=UeWlSWS318aekhhh"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["1 Byte = 8 Bits.", "1 Gigabyte (GB) = 1024 Megabytes (MB)."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.revisely.com/notes-documents-generator",
                  portalName: "Www.revisely.com Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "How many bits make up 1 Byte of data?",
                  options: [{"id": 9031, "text": "8 Bits", "isCorrect": true}, {"id": 9032, "text": "100 Bits", "isCorrect": false}, {"id": 9033, "text": "1024 Bits", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 3: Storage Unit Conversion Worksheet & Calculation Practice.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 904,
              dayNumber: 4,
              title: "Class 4: Computer Peripheral Interfacing & Expansion Buses",
              description: "PCIe slots, USB-C, Thunderbolt, HDMI, display adapters, and peripheral throughput.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/IwSrmRImDC8?si=3t5Rq0pLnJPZHwbC"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["PCIe slots connect high-speed GPUs and NVMe drives.", "Thunderbolt supports video, data, and power."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.voiset.io/for-students",
                  portalName: "Www.voiset.io Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which high-speed bus connects dedicated graphics cards to the motherboard?",
                  options: [{"id": 9041, "text": "PCI Express (PCIe)", "isCorrect": true}, {"id": 9042, "text": "Floppy Drive Connector", "isCorrect": false}, {"id": 9043, "text": "VGA Port", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 4: High-Speed Peripheral Interfacing & Port Architecture Worksheet.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 905,
              dayNumber: 5,
              title: "Class 5: Data Security, Backups & Disk Defragmentation",
              description: "Data corruption prevention, cloud backups, disk cleanup, and antivirus scanning.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 4,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/uSiMGzMaxdk?si=QA7E3K_150ZDHxnt"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["3-2-1 backup strategy: 3 copies, 2 media types, 1 offsite copy.", "Defragmentation reorganizes scattered file sectors."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.explorance.com/resources/responsible-ai/",
                  portalName: "Www.explorance.com Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is the recommended 3-2-1 rule for data backups?",
                  options: [{"id": 9051, "text": "3 copies of data, on 2 different media types, with 1 copy offsite", "isCorrect": true}, {"id": 9052, "text": "Save 3 files in 2 folders every 1 month", "isCorrect": false}, {"id": 9053, "text": "Keep 3 passwords on 2 phones for 1 user", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 5: Data Backup Strategy & Maintenance Checklist Worksheet.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 906,
              dayNumber: 6,
              title: "Class 6: Chapter 1 Assessment & System Fundamentals Quiz",
              description: "Comprehensive evaluation of computer systems, memory units, OS functions, and data security.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 5,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Recap of IT architecture, operating system roles, and storage media."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which utility reorganizes file blocks on a mechanical hard drive for faster access?",
                  options: [{"id": 9061, "text": "Disk Defragmenter", "isCorrect": true}, {"id": 9062, "text": "Web Browser", "isCorrect": false}, {"id": 9063, "text": "Text Editor", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 6: Chapter 1 Systems Fundamentals Assessment & Problem Solving Challenge.",
                  pdfUrl: "/asset/9th class/Class IX – Term I.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    },
    {
      gradeNumber: 10,
      gradeName: "Grade 10",
      chapters: [
        {
          chapterNumber: 1,
          chapterTitle: "Chapter 1: AI Productivity & Advanced Research",
          description: "Artificial Intelligence tools, search techniques, research synthesis, and AI ethics.",
          classes: [
            {
              id: 1001,
              dayNumber: 1,
              title: "Class 1: Introduction to Artificial Intelligence Tools & Methods",
              description: "AI assistants, research synthesis, fact-checking, and workflow tools.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: null,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/15PK38MUEPM"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["AI tools assist in organizing research and summarizing complex texts.", "Always cross-verify AI generated citations."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.notion.com/",
                  portalName: "Www.notion.com Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is a essential practice when using AI for academic research?",
                  options: [{"id": 10011, "text": "Fact-check citations and primary sources", "isCorrect": true}, {"id": 10012, "text": "Copy paste results without reading", "isCorrect": false}, {"id": 10013, "text": "Assume AI is always 100% accurate", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 1 Practical: AI Tool Exploration & Fact-Checking Research Activity.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 1002,
              dayNumber: 2,
              title: "Class 2: Effective Prompt Engineering & Search Techniques",
              description: "Role + Task + Context + Format prompt structure for high quality output.",
              isUnlockedByAdmin: true,
              prerequisiteDayNumber: 1,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/P08jrZhyNxw"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Structured prompts yield precise responses.", "Include clear context and format constraints."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://ai.meta.com/learn/ai-basics/how-to-use-ai-beginners-guide/",
                  portalName: "Ai.meta.com Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which component of prompt engineering specifies the desired output style?",
                  options: [{"id": 10021, "text": "Format", "isCorrect": true}, {"id": 10022, "text": "Browser Cache", "isCorrect": false}, {"id": 10023, "text": "Hyperlink", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 2 Practical: Construct Multi-part Structured AI Prompts.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 1003,
              dayNumber: 3,
              title: "Class 3: Text Summarization & AI Note-Taking Workflows",
              description: "Using AI models to extract key bullet points, action items, and executive summaries.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 2,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/yt53GmtyL6Q"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["AI text summarization identifies core ideas from lengthy articles.", "Synthesize notes into structured outlines."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://knowunity.nl/blog/how-to-use-ai-to-write-summaries",
                  portalName: "Knowunity.nl Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is the primary benefit of AI text summarization?",
                  options: [{"id": 10031, "text": "Extracting key insights and saving research time", "isCorrect": true}, {"id": 10032, "text": "Deleting original source files", "isCorrect": false}, {"id": 10033, "text": "Replacing all human reading completely", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 3 Practical: Long-Form Document Summarization & Key Takeaways Activity.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 1004,
              dayNumber: 4,
              title: "Class 4: Project Planning & Automated Data Organization",
              description: "Project timelines, task breakdown structures, data classification, and automation.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 3,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/opGFlxq5VGE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Project planning breaks large goals into actionable milestones.", "Automated tools streamline task tracking."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "Which structure breaks down complex projects into manageable steps?",
                  options: [{"id": 10041, "text": "Work Breakdown Structure (WBS)", "isCorrect": true}, {"id": 10042, "text": "Random List", "isCorrect": false}, {"id": 10043, "text": "Trash Can", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 4 Practical: Build a Project Plan & Timeline Outline using AI Assistance.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 1005,
              dayNumber: 5,
              title: "Class 5: AI Ethics, Fact-Checking & Citation Standards",
              description: "Understanding bias, hallucinations, copyright, plagiarism, and academic integrity.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 4,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/U3ntLOPqCpg"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["AI Hallucination occurs when an AI generates false or unverified facts.", "Always cite original primary sources."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/artificial-intelligence/ai-ethics/",
                  portalName: "Www.geeksforgeeks.org Resource"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is meant by 'AI Hallucination'?",
                  options: [{"id": 10051, "text": "When an AI model generates confident but false information", "isCorrect": true}, {"id": 10052, "text": "When a computer turns off automatically", "isCorrect": false}, {"id": 10053, "text": "When internet speed increases", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 5 Practical: Fact-Checking Audit & Citation Verification Challenge.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            },
            {
              id: 1006,
              dayNumber: 6,
              title: "Class 6: Chapter 1 AI Research Project Presentation",
              description: "Presenting AI productivity workflows, prompt engineering strategies, and peer review.",
              isUnlockedByAdmin: false,
              prerequisiteDayNumber: 5,
              steps: {
                step1Video: {
                  title: "Step 1: Watch Class Video",
                  description: "Watch the complete lesson video to understand class concepts.",
                  videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
                },
                step2TopicPdf: {
                  title: "Step 2: Review Topics Covered",
                  description: "Read detailed topic documentation and concepts.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "TOPIC COVERED.pdf",
                  keyConcepts: ["Demonstrating ethical AI research workflows and structured outputs."]
                },
                step3Website: {
                  title: "Step 3: Interactive Learning Activity",
                  description: "Interactive learning resource and activity portal.",
                  websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/",
                  portalName: "Educational Resource Portal"
                },
                step4Quiz: {
                  title: "Step 4: Concept Check Quiz",
                  description: "Test your understanding of the class topic.",
                  passingScorePercent: 80,
                  question: "What is essential for ensuring academic integrity when using AI tools?",
                  options: [{"id": 10061, "text": "Transparency, primary source verification, and proper citation", "isCorrect": true}, {"id": 10062, "text": "Submitting unedited AI generated essays", "isCorrect": false}, {"id": 10063, "text": "Ignoring copyright laws", "isCorrect": false}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 6 Practical: Present Your AI-Assisted Research Project to the Class.",
                  pdfUrl: "/asset/10th class/Class X – Term I syllabus structure.pdf",
                  fileName: "practical activities.pdf"
                }
              }
            }
          ]
        }
      ]
    }
  ]
};
