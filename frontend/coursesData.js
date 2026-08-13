/* ==========================================================================
   ENGLORAY LEARNING - CENTRAL COURSES JSON DATASET
   Contains Grade 3 through Grade 10 Courses, 5 Quiz Questions per Class, Video Embeds & Website Links
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
          description: "Test your understanding of the class topics. All 5 questions must be answered. Passing score is 80%.",
          passingScorePercent: 80,
          question: "1. Which component is considered internal hardware inside the CPU cabinet?",
          options: [
            {
                        "id": 611,
                        "text": "Motherboard & RAM",
                        "isCorrect": true
            },
            {
                        "id": 612,
                        "text": "External Desktop Speakers",
                        "isCorrect": false
            },
            {
                        "id": 613,
                        "text": "USB Flash Drive",
                        "isCorrect": false
            }
],
          questions: [
            {
                        "id": 61,
                        "question": "1. Which component is considered internal hardware inside the CPU cabinet?",
                        "options": [
                                    {
                                                "id": 611,
                                                "text": "Motherboard & RAM",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 612,
                                                "text": "External Desktop Speakers",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 613,
                                                "text": "USB Flash Drive",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 62,
                        "question": "2. What is the physical machinery and electronic parts of a computer called?",
                        "options": [
                                    {
                                                "id": 621,
                                                "text": "Hardware",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 622,
                                                "text": "Software",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 623,
                                                "text": "Web Browser",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 63,
                        "question": "3. Which internal board connects the CPU, memory, and expansion slots?",
                        "options": [
                                    {
                                                "id": 631,
                                                "text": "Motherboard",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 632,
                                                "text": "Mouse Pad",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 633,
                                                "text": "Screen Protector",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 64,
                        "question": "4. Which peripheral device is used to scan paper documents into digital images?",
                        "options": [
                                    {
                                                "id": 641,
                                                "text": "Scanner",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 642,
                                                "text": "Speaker",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 643,
                                                "text": "Projector",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 65,
                        "question": "5. What combination forms a fully operational Computer System?",
                        "options": [
                                    {
                                                "id": 651,
                                                "text": "Hardware + Software",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 652,
                                                "text": "Monitor + Paper",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 653,
                                                "text": "Cable + Plastic Box",
                                                "isCorrect": false
                                    }
                        ]
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
          description: "Test your understanding of the class topics. All 5 questions must be answered. Passing score is 80%.",
          passingScorePercent: 80,
          question: "1. Which device is primarily used to enter text into a computer?",
          options: [
            {
                        "id": 711,
                        "text": "Keyboard",
                        "isCorrect": true
            },
            {
                        "id": 712,
                        "text": "Monitor",
                        "isCorrect": false
            },
            {
                        "id": 713,
                        "text": "Speakers",
                        "isCorrect": false
            }
],
          questions: [
            {
                        "id": 71,
                        "question": "1. Which device is primarily used to enter text into a computer?",
                        "options": [
                                    {
                                                "id": 711,
                                                "text": "Keyboard",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 712,
                                                "text": "Monitor",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 713,
                                                "text": "Speakers",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 72,
                        "question": "2. Which of the following is an Output device?",
                        "options": [
                                    {
                                                "id": 721,
                                                "text": "Printer",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 722,
                                                "text": "Webcam",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 723,
                                                "text": "Microphone",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 73,
                        "question": "3. Which device records human voice and audio input?",
                        "options": [
                                    {
                                                "id": 731,
                                                "text": "Microphone",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 732,
                                                "text": "Hard Disk",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 733,
                                                "text": "Mouse",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 74,
                        "question": "4. Which portable storage media plugs into a USB port?",
                        "options": [
                                    {
                                                "id": 741,
                                                "text": "USB Flash Drive / Pen Drive",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 742,
                                                "text": "RAM Chip",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 743,
                                                "text": "CPU Fan",
                                                "isCorrect": false
                                    }
                        ]
            },
            {
                        "id": 75,
                        "question": "5. Which device projects video onto a large classroom screen?",
                        "options": [
                                    {
                                                "id": 751,
                                                "text": "Digital Projector",
                                                "isCorrect": true
                                    },
                                    {
                                                "id": 752,
                                                "text": "Barcode Reader",
                                                "isCorrect": false
                                    },
                                    {
                                                "id": 753,
                                                "text": "Trackball",
                                                "isCorrect": false
                                    }
                        ]
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
                  question: "1. Which of the following is an electronic machine?",
                  options: [{"id": 30111, "text": "Computer", "isCorrect": true}, {"id": 30112, "text": "Wooden Chair", "isCorrect": false}, {"id": 30113, "text": "Paper Book", "isCorrect": false}],
                  questions: [{"id": 3011, "question": "1. Which of the following is an electronic machine?", "options": [{"id": 30111, "text": "Computer", "isCorrect": true}, {"id": 30112, "text": "Wooden Chair", "isCorrect": false}, {"id": 30113, "text": "Paper Book", "isCorrect": false}]}, {"id": 3012, "question": "2. Where are computers used to keep patient records?", "options": [{"id": 30121, "text": "Hospitals", "isCorrect": true}, {"id": 30122, "text": "Playgrounds", "isCorrect": false}, {"id": 30123, "text": "Swimming Pools", "isCorrect": false}]}, {"id": 3013, "question": "3. What can a computer do faster than humans?", "options": [{"id": 30131, "text": "Perform math calculations", "isCorrect": true}, {"id": 30132, "text": "Eat food", "isCorrect": false}, {"id": 30133, "text": "Sleep at night", "isCorrect": false}]}, {"id": 3014, "question": "4. Which place uses computers to teach students and display lessons?", "options": [{"id": 30141, "text": "Schools & Classrooms", "isCorrect": true}, {"id": 30142, "text": "Bus Stop", "isCorrect": false}, {"id": 30143, "text": "Fruit Shop", "isCorrect": false}]}, {"id": 3015, "question": "5. A desktop computer is designed to stay on top of a...", "options": [{"id": 30151, "text": "Desk or Table", "isCorrect": true}, {"id": 30152, "text": "Pocket", "isCorrect": false}, {"id": 30153, "text": "Tree Branch", "isCorrect": false}]}]
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
                  question: "1. What is known as the brain of the computer?",
                  options: [{"id": 30211, "text": "CPU (Central Processing Unit)", "isCorrect": true}, {"id": 30212, "text": "Monitor Screen", "isCorrect": false}, {"id": 30213, "text": "Speakers", "isCorrect": false}],
                  questions: [{"id": 3021, "question": "1. What is known as the brain of the computer?", "options": [{"id": 30211, "text": "CPU (Central Processing Unit)", "isCorrect": true}, {"id": 30212, "text": "Monitor Screen", "isCorrect": false}, {"id": 30213, "text": "Speakers", "isCorrect": false}]}, {"id": 3022, "question": "2. Which computer part has many buttons called keys?", "options": [{"id": 30221, "text": "Keyboard", "isCorrect": true}, {"id": 30222, "text": "Mouse", "isCorrect": false}, {"id": 30223, "text": "Scanner", "isCorrect": false}]}, {"id": 3023, "question": "3. Which part displays pictures and video like a television?", "options": [{"id": 30231, "text": "Monitor", "isCorrect": true}, {"id": 30232, "text": "CPU", "isCorrect": false}, {"id": 30233, "text": "Printer", "isCorrect": false}]}, {"id": 3024, "question": "4. Which small device is clicked to select items on screen?", "options": [{"id": 30241, "text": "Mouse", "isCorrect": true}, {"id": 30242, "text": "Keyboard", "isCorrect": false}, {"id": 30243, "text": "Speaker", "isCorrect": false}]}, {"id": 3025, "question": "5. How many main core hardware parts make up a basic desktop setup?", "options": [{"id": 30251, "text": "4 Parts (Monitor, CPU, Keyboard, Mouse)", "isCorrect": true}, {"id": 30252, "text": "1 Part", "isCorrect": false}, {"id": 30253, "text": "100 Parts", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 2: Label the Computer Parts Diagram Worksheet.",
                  pdfUrl: "/asset/3rd class/Chapter 1 Computer Fundamentals/CLASSES 1-4/CLASS 2/Practical Activities.docx",
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
                  question: "1. What is the first stage of data flow in a computer system?",
                  options: [{"id": 40111, "text": "Input", "isCorrect": true}, {"id": 40112, "text": "Output", "isCorrect": false}, {"id": 40113, "text": "Printout", "isCorrect": false}],
                  questions: [{"id": 4011, "question": "1. What is the first stage of data flow in a computer system?", "options": [{"id": 40111, "text": "Input", "isCorrect": true}, {"id": 40112, "text": "Output", "isCorrect": false}, {"id": 40113, "text": "Printout", "isCorrect": false}]}, {"id": 4012, "question": "2. Which component carries out data processing?", "options": [{"id": 40121, "text": "CPU Processor", "isCorrect": true}, {"id": 40122, "text": "Mouse Pad", "isCorrect": false}, {"id": 40123, "text": "Headphones", "isCorrect": false}]}, {"id": 4013, "question": "3. What is processed data called once it becomes useful?", "options": [{"id": 40131, "text": "Information", "isCorrect": true}, {"id": 40132, "text": "Raw Garbage", "isCorrect": false}, {"id": 40133, "text": "Electricity", "isCorrect": false}]}, {"id": 4014, "question": "4. Which device provides output to the user?", "options": [{"id": 40141, "text": "Monitor or Printer", "isCorrect": true}, {"id": 40142, "text": "Keyboard", "isCorrect": false}, {"id": 40143, "text": "Scanner", "isCorrect": false}]}, {"id": 4015, "question": "5. What order represents the correct data processing cycle?", "options": [{"id": 40151, "text": "Input -> Process -> Output -> Storage", "isCorrect": true}, {"id": 40152, "text": "Output -> Input -> Delete", "isCorrect": false}, {"id": 40153, "text": "Storage -> Output -> Input", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Input-Process-Output Flowchart Assignment.",
                  pdfUrl: "/asset/4th class/Chapter-1/1/practical activities.pdf",
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
                  question: "1. Which component is considered internal hardware inside the CPU cabinet?",
                  options: [{"id": 611, "text": "Motherboard & RAM", "isCorrect": true}, {"id": 612, "text": "External Desktop Speakers", "isCorrect": false}, {"id": 613, "text": "USB Flash Drive", "isCorrect": false}],
                  questions: [{"id": 61, "question": "1. Which component is considered internal hardware inside the CPU cabinet?", "options": [{"id": 611, "text": "Motherboard & RAM", "isCorrect": true}, {"id": 612, "text": "External Desktop Speakers", "isCorrect": false}, {"id": 613, "text": "USB Flash Drive", "isCorrect": false}]}, {"id": 62, "question": "2. What is the physical machinery and electronic parts of a computer called?", "options": [{"id": 621, "text": "Hardware", "isCorrect": true}, {"id": 622, "text": "Software", "isCorrect": false}, {"id": 623, "text": "Web Browser", "isCorrect": false}]}, {"id": 63, "question": "3. Which internal board connects the CPU, memory, and expansion slots?", "options": [{"id": 631, "text": "Motherboard", "isCorrect": true}, {"id": 632, "text": "Mouse Pad", "isCorrect": false}, {"id": 633, "text": "Screen Protector", "isCorrect": false}]}, {"id": 64, "question": "4. Which peripheral device is used to scan paper documents into digital images?", "options": [{"id": 641, "text": "Scanner", "isCorrect": true}, {"id": 642, "text": "Speaker", "isCorrect": false}, {"id": 643, "text": "Projector", "isCorrect": false}]}, {"id": 65, "question": "5. What combination forms a fully operational Computer System?", "options": [{"id": 651, "text": "Hardware + Software", "isCorrect": true}, {"id": 652, "text": "Monitor + Paper", "isCorrect": false}, {"id": 653, "text": "Cable + Plastic Box", "isCorrect": false}]}]
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
                  question: "1. Which device is primarily used to enter text into a computer?",
                  options: [{"id": 711, "text": "Keyboard", "isCorrect": true}, {"id": 712, "text": "Monitor", "isCorrect": false}, {"id": 713, "text": "Speakers", "isCorrect": false}],
                  questions: [{"id": 71, "question": "1. Which device is primarily used to enter text into a computer?", "options": [{"id": 711, "text": "Keyboard", "isCorrect": true}, {"id": 712, "text": "Monitor", "isCorrect": false}, {"id": 713, "text": "Speakers", "isCorrect": false}]}, {"id": 72, "question": "2. Which of the following is an Output device?", "options": [{"id": 721, "text": "Printer", "isCorrect": true}, {"id": 722, "text": "Webcam", "isCorrect": false}, {"id": 723, "text": "Microphone", "isCorrect": false}]}, {"id": 73, "question": "3. Which device records human voice and audio input?", "options": [{"id": 731, "text": "Microphone", "isCorrect": true}, {"id": 732, "text": "Hard Disk", "isCorrect": false}, {"id": 733, "text": "Mouse", "isCorrect": false}]}, {"id": 74, "question": "4. Which portable storage media plugs into a USB port?", "options": [{"id": 741, "text": "USB Flash Drive / Pen Drive", "isCorrect": true}, {"id": 742, "text": "RAM Chip", "isCorrect": false}, {"id": 743, "text": "CPU Fan", "isCorrect": false}]}, {"id": 75, "question": "5. Which device projects video onto a large classroom screen?", "options": [{"id": 751, "text": "Digital Projector", "isCorrect": true}, {"id": 752, "text": "Barcode Reader", "isCorrect": false}, {"id": 753, "text": "Trackball", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 2: Input, Output & Storage Device Sorting Worksheet.",
                  pdfUrl: "/asset/5th class/chapter 1/class 2/practical activities.pdf",
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
                  question: "1. Which type of memory loses its content when power is switched off?",
                  options: [{"id": 60111, "text": "RAM (Random Access Memory)", "isCorrect": true}, {"id": 60112, "text": "ROM (Read Only Memory)", "isCorrect": false}, {"id": 60113, "text": "Hard Disk Drive", "isCorrect": false}],
                  questions: [{"id": 6011, "question": "1. Which type of memory loses its content when power is switched off?", "options": [{"id": 60111, "text": "RAM (Random Access Memory)", "isCorrect": true}, {"id": 60112, "text": "ROM (Read Only Memory)", "isCorrect": false}, {"id": 60113, "text": "Hard Disk Drive", "isCorrect": false}]}, {"id": 6012, "question": "2. What type of memory stores permanent BIOS boot instructions?", "options": [{"id": 60121, "text": "ROM (Read Only Memory)", "isCorrect": true}, {"id": 60122, "text": "RAM", "isCorrect": false}, {"id": 60123, "text": "Virtual Memory", "isCorrect": false}]}, {"id": 6013, "question": "3. What is high-speed memory located directly between CPU and RAM called?", "options": [{"id": 60131, "text": "Cache Memory", "isCorrect": true}, {"id": 60132, "text": "DVD ROM", "isCorrect": false}, {"id": 60133, "text": "SD Card", "isCorrect": false}]}, {"id": 6014, "question": "4. Which storage device stores operating system files permanently?", "options": [{"id": 60141, "text": "Hard Disk / SSD", "isCorrect": true}, {"id": 60142, "text": "System RAM", "isCorrect": false}, {"id": 60143, "text": "CPU Registers", "isCorrect": false}]}, {"id": 6015, "question": "5. What term describes memory that requires continuous power to hold data?", "options": [{"id": 60151, "text": "Volatile Memory", "isCorrect": true}, {"id": 60152, "text": "Non-Volatile Memory", "isCorrect": false}, {"id": 60153, "text": "Optical Memory", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Memory Classification & RAM vs ROM Comparison Table.",
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
                  question: "1. Which main circuit board connects all internal computer hardware?",
                  options: [{"id": 70111, "text": "Motherboard", "isCorrect": true}, {"id": 70112, "text": "Hard Disk Drive", "isCorrect": false}, {"id": 70113, "text": "Monitor Panel", "isCorrect": false}],
                  questions: [{"id": 7011, "question": "1. Which main circuit board connects all internal computer hardware?", "options": [{"id": 70111, "text": "Motherboard", "isCorrect": true}, {"id": 70112, "text": "Hard Disk Drive", "isCorrect": false}, {"id": 70113, "text": "Monitor Panel", "isCorrect": false}]}, {"id": 7012, "question": "2. What electrical channels transmit data signals across motherboard components?", "options": [{"id": 70121, "text": "System Buses", "isCorrect": true}, {"id": 70122, "text": "USB Drivers", "isCorrect": false}, {"id": 70123, "text": "Power Cords", "isCorrect": false}]}, {"id": 7013, "question": "3. Which unit converts AC wall electricity into regulated DC power for components?", "options": [{"id": 70131, "text": "Power Supply Unit (PSU)", "isCorrect": true}, {"id": 70132, "text": "RAM Module", "isCorrect": false}, {"id": 70133, "text": "Sound Card", "isCorrect": false}]}, {"id": 7014, "question": "4. Where is the CPU chip mounted on the motherboard?", "options": [{"id": 70141, "text": "CPU Socket", "isCorrect": true}, {"id": 70142, "text": "SATA Port", "isCorrect": false}, {"id": 70143, "text": "PCI Express Slot", "isCorrect": false}]}, {"id": 7015, "question": "5. What slots are used to plug in graphics cards and sound cards?", "options": [{"id": 70151, "text": "Expansion Slots (PCIe)", "isCorrect": true}, {"id": 70152, "text": "HDMI Output", "isCorrect": false}, {"id": 70153, "text": "Audio Jack", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Motherboard Component Labeling & Function Matching Worksheet.",
                  pdfUrl: "/asset/7th class/Class VII – Term I Future Skills.docx",
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
                  question: "1. Which tool in Canva is used to add headings and body text?",
                  options: [{"id": 80111, "text": "Text Tool Sidebar", "isCorrect": true}, {"id": 80112, "text": "Background Canvas Filler", "isCorrect": false}, {"id": 80113, "text": "Crop Tool", "isCorrect": false}],
                  questions: [{"id": 8011, "question": "1. Which tool in Canva is used to add headings and body text?", "options": [{"id": 80111, "text": "Text Tool Sidebar", "isCorrect": true}, {"id": 80112, "text": "Background Canvas Filler", "isCorrect": false}, {"id": 80113, "text": "Crop Tool", "isCorrect": false}]}, {"id": 8012, "question": "2. What design principle arranges elements to guide the viewer's eye first?", "options": [{"id": 80121, "text": "Visual Hierarchy", "isCorrect": true}, {"id": 80122, "text": "Random Scattering", "isCorrect": false}, {"id": 80123, "text": "Monochrome Blur", "isCorrect": false}]}, {"id": 8013, "question": "3. What container element in Canva masks photos into custom geometric shapes?", "options": [{"id": 80131, "text": "Frames", "isCorrect": true}, {"id": 80132, "text": "Rulers", "isCorrect": false}, {"id": 80133, "text": "Color Swatches", "isCorrect": false}]}, {"id": 8014, "question": "4. Which export option is best for downloading high resolution printable posters?", "options": [{"id": 80141, "text": "PDF Print", "isCorrect": true}, {"id": 80142, "text": "Low Quality GIF", "isCorrect": false}, {"id": 80143, "text": "Plain Text File", "isCorrect": false}]}, {"id": 8015, "question": "5. What feature snaps canvas elements evenly to align borders and titles?", "options": [{"id": 80151, "text": "Smart Guides & Alignment Grids", "isCorrect": true}, {"id": 80152, "text": "Blur Tool", "isCorrect": false}, {"id": 80153, "text": "Color Picker", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Design an Educational Event Poster in Canva.",
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
                  question: "1. What are the four core stages of the data processing cycle?",
                  options: [{"id": 90111, "text": "Input, Processing, Storage, Output", "isCorrect": true}, {"id": 90112, "text": "Download, Upload, Edit, Delete", "isCorrect": false}, {"id": 90113, "text": "Compile, Debug, Run, Print", "isCorrect": false}],
                  questions: [{"id": 9011, "question": "1. What are the four core stages of the data processing cycle?", "options": [{"id": 90111, "text": "Input, Processing, Storage, Output", "isCorrect": true}, {"id": 90112, "text": "Download, Upload, Edit, Delete", "isCorrect": false}, {"id": 90113, "text": "Compile, Debug, Run, Print", "isCorrect": false}]}, {"id": 9012, "question": "2. Which component controls the execution of instructions inside the CPU?", "options": [{"id": 90121, "text": "Control Unit (CU)", "isCorrect": true}, {"id": 90122, "text": "Hard Disk Controller", "isCorrect": false}, {"id": 90123, "text": "Network Interface Card", "isCorrect": false}]}, {"id": 9013, "question": "3. What type of data representation uses binary 0s and 1s inside digital systems?", "options": [{"id": 90131, "text": "Machine Code / Binary Representation", "isCorrect": true}, {"id": 90132, "text": "Decimal Fractional Format", "isCorrect": false}, {"id": 90133, "text": "Roman Numerals", "isCorrect": false}]}, {"id": 9014, "question": "4. What is unprocessed raw facts and numbers called before computation?", "options": [{"id": 90141, "text": "Raw Data", "isCorrect": true}, {"id": 90142, "text": "Executive Summary", "isCorrect": false}, {"id": 90143, "text": "Final Insight", "isCorrect": false}]}, {"id": 9015, "question": "5. Which bus carries memory addresses from the processor to system RAM?", "options": [{"id": 90151, "text": "Address Bus", "isCorrect": true}, {"id": 90152, "text": "Power Bus", "isCorrect": false}, {"id": 90153, "text": "Serial Port", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Activity 1: Data Processing Cycle Flow Diagram & System Architecture Mapping.",
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
                  question: "1. What is an essential practice when using AI for academic research?",
                  options: [{"id": 100111, "text": "Fact-check citations and primary sources", "isCorrect": true}, {"id": 100112, "text": "Copy paste results without reading", "isCorrect": false}, {"id": 100113, "text": "Assume AI is always 100% accurate", "isCorrect": false}],
                  questions: [{"id": 10011, "question": "1. What is an essential practice when using AI for academic research?", "options": [{"id": 100111, "text": "Fact-check citations and primary sources", "isCorrect": true}, {"id": 100112, "text": "Copy paste results without reading", "isCorrect": false}, {"id": 100113, "text": "Assume AI is always 100% accurate", "isCorrect": false}]}, {"id": 10012, "question": "2. What phenomenon occurs when AI generates convincing but false facts?", "options": [{"id": 100121, "text": "AI Hallucination", "isCorrect": true}, {"id": 100122, "text": "System Reboot", "isCorrect": false}, {"id": 100123, "text": "Data Encryption", "isCorrect": false}]}, {"id": 10013, "question": "3. Which framework structures prompts with Role, Task, Context, and Format?", "options": [{"id": 100131, "text": "Structured Prompt Engineering Framework", "isCorrect": true}, {"id": 100132, "text": "Random Guessing", "isCorrect": false}, {"id": 100133, "text": "Binary Addition", "isCorrect": false}]}, {"id": 10014, "question": "4. Why is primary source verification necessary for AI responses?", "options": [{"id": 100141, "text": "To prevent misinformation and ensure academic accuracy", "isCorrect": true}, {"id": 100142, "text": "To decrease internet speed", "isCorrect": false}, {"id": 100143, "text": "To format fonts in bold", "isCorrect": false}]}, {"id": 10015, "question": "5. What core ethical rule governs student use of AI productivity assistants?", "options": [{"id": 100151, "text": "Transparency, original work synthesis, and proper citation", "isCorrect": true}, {"id": 100152, "text": "Plagiarizing online text directly", "isCorrect": false}, {"id": 100153, "text": "Hiding tools used", "isCorrect": false}]}]
                },
                step5Task: {
                  title: "Step 5: Practical Activity & Task Submission",
                  description: "Complete practical assignment.",
                  instructions: "Class 1 Practical: AI Tool Exploration & Fact-Checking Research Activity.",
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
