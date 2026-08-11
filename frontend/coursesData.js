/* ==========================================================================
   ENGLORAY LEARNING - CENTRAL COURSES JSON DATASET
   Contains Grade 5, Term 1, Chapter 1 Classes Data
   ========================================================================== */

const COURSES_DATA = {
  gradeNumber: 5,
  gradeName: "Grade 5",
  termNumber: 1,
  termName: "Term 1",
  chapterNumber: 1,
  chapterTitle: "Chapter 1: Computer Skills",
  chapterDescription: "Computer Fundamentals, Hardware Devices, Input/Output/Storage Devices, Computer Care & Ethics.",
  
  classes: [
    {
      id: 6,
      dayNumber: 1,
      title: "Class 1: Computer Fundamentals, Hardware Devices & Computer System",
      description: "Topics Covered: Introduction to Computers, Computer Fundamentals, Computer System, Hardware Devices, Internal Hardware, External Hardware, Functions of Hardware Devices, Input, Output and Storage Overview, Uses of Computers in Daily Life, Advantages of Computers, Basic Computer Terminology, Revision.",
      isUnlockedByAdmin: true,
      prerequisiteDayNumber: null,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Watch the complete lesson video to understand hardware devices & computer fundamentals.",
          videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Read through the detailed topic documentation and download reference material.",
          pdfUrl: "/asset/5th class/chapter 1/class 1/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Computer System: Combination of hardware and software working together.",
            "Internal Hardware: CPU, Motherboard, RAM, Hard Disk drive.",
            "External Peripherals: Monitor, Keyboard, Mouse, Printer, Scanner.",
            "Functions: Input processing, output display, and permanent data storage."
          ]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Explore the educational website link for hands-on interactive tutorials & diagrams.",
          websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/computer-hardware/",
          portalName: "GeeksforGeeks - Computer Hardware Fundamentals"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Test your knowledge. Passing score is 80%.",
          passingScorePercent: 80,
          question: "Which component is considered internal hardware?",
          options: [
            { id: 31, text: "CPU / Motherboard", isCorrect: true },
            { id: 32, text: "Printer", isCorrect: false },
            { id: 33, text: "External USB Flash Drive", isCorrect: false }
          ]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Complete the practical worksheet and upload your completed document or picture.",
          instructions: "Class 1: Hardware Device Identification, Computer System Labeling Activity & Picture Matching Worksheet. Refer to the practical activity document below.",
          pdfUrl: "/asset/5th class/chapter 1/class 1/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    },
    {
      id: 7,
      dayNumber: 2,
      title: "Class 2: Input, Output & Storage Devices in Daily Life",
      description: "Topics Covered: Input Devices, Output Devices, Storage Devices, Keyboard, Mouse, Scanner, Microphone, Webcam, Monitor, Printer, Speakers, Hard Disk, Pen Drive, Memory Card, CD/DVD, Device Classification, Uses of Devices in Daily Life, Revision.",
      isUnlockedByAdmin: true, // Set to true by Admin/Teacher for demonstration
      prerequisiteDayNumber: 1,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Watch the complete lesson video on input, output, and storage device categorization.",
          videoUrl: "https://www.youtube.com/embed/Jt6mnMnRXzc"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Examine detailed classifications of primary input and output peripherals.",
          pdfUrl: "/asset/5th class/chapter 1/class 2/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Input Devices: Keyboard, Mouse, Scanner, Microphone, Webcam.",
            "Output Devices: Monitor, Printer, Speakers, Headphones, Projector.",
            "Storage Media: Hard Disk Drive, Solid State Drive, USB Flash Drive, SD Cards.",
            "Daily Classification: Real-life scenarios matching devices to tasks."
          ]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Interactive keyboard & peripheral exploration guide.",
          websiteUrl: "https://www.computerhope.com/jargon/k/keyboard.htm",
          portalName: "Computer Hope - Computer Input Devices Guide"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Test your understanding of input and output devices. Passing score is 80%.",
          passingScorePercent: 80,
          question: "Which of the following is an INPUT device?",
          options: [
            { id: 41, text: "Monitor Screen", isCorrect: false },
            { id: 42, text: "Keyboard", isCorrect: true },
            { id: 43, text: "Printer", isCorrect: false }
          ]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Complete the device sorting worksheet and upload your work.",
          instructions: "Class 2: Input, Output & Storage Device Sorting Game, Device Classification Worksheet & Team Activity.",
          pdfUrl: "/asset/5th class/chapter 1/class 2/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    },
    {
      id: 8,
      dayNumber: 3,
      title: "Class 3: Computer Care, Digital Ethics & Responsible Technology Use",
      description: "Topics Covered: Computer Care and Maintenance, Safe Handling of Computer Equipment, Computer Lab Rules, Digital Ethics, Responsible Use of Technology, Internet Safety Basics, Creating Strong Passwords, Protecting Personal Information, Cyber Safety Rules, Respecting Others Online, Screen Time Awareness, Good Digital Habits, Digital Footprint, Revision.",
      isUnlockedByAdmin: false,
      prerequisiteDayNumber: 2,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Learn safe internet habits, lab safety rules, and password security.",
          videoUrl: "https://www.youtube.com/embed/Xzwvr2dHxgw"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Read rules for lab safety, digital citizenship, and online privacy.",
          pdfUrl: "/asset/5th class/chapter 1/class 3/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Lab Safety: Keep food and liquids away from workstations.",
            "Strong Passwords: Combine uppercase, lowercase, numbers, and symbols.",
            "Digital Ethics: Treat peers online with kindness and respect.",
            "Cyber Safety: Never share personal details or passwords publicly."
          ]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Read Do's and Don'ts of Computer Lab Etiquette.",
          websiteUrl: "https://www.scribd.com/document/517654952/Do-s-and-Don-Ts-of-Computer-Lab",
          portalName: "Scribd - Computer Lab Etiquette & Safety Document"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Test your digital safety knowledge. Passing score is 80%.",
          passingScorePercent: 80,
          question: "What is a good rule for creating a safe password?",
          options: [
            { id: 51, text: "Use your birthdate or 123456", isCorrect: false },
            { id: 52, text: "Mix letters, numbers, and symbols securely", isCorrect: true },
            { id: 53, text: "Share your password with all your friends", isCorrect: false }
          ]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Complete the computer care poster activity.",
          instructions: "Class 3: Computer Care Checklist, Digital Ethics Role Play, Responsible Technology Discussion & Safety Poster Activity.",
          pdfUrl: "/asset/5th class/chapter 1/class 3/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    },
    {
      id: 9,
      dayNumber: 4,
      title: "Class 4: Revision, Discussion & Assessment",
      description: "Topics Covered: Revision of Computer Fundamentals, Hardware Devices, Input/Output/Storage Devices, Computer Care, Digital Ethics, Responsible Technology Use, Computer Safety Review, Device Identification Practice, Question & Answer Session, Chapter Assessment, Oral Discussion, Feedback & Improvement Tips.",
      isUnlockedByAdmin: false,
      prerequisiteDayNumber: 3,
      steps: {
        step1Video: {
          title: "Step 1: Watch Class Video",
          description: "Comprehensive summary and revision of Chapter 1 Computer Skills.",
          videoUrl: "https://www.youtube.com/embed/Iv8X7aLikLE"
        },
        step2TopicPdf: {
          title: "Step 2: Review Topics Covered",
          description: "Chapter 1 full review guide and assessment preparations.",
          pdfUrl: "/asset/5th class/chapter 1/class 4/TOPIC COVERED.pdf",
          fileName: "TOPIC COVERED.pdf",
          keyConcepts: [
            "Hardware Overview: Distinction between input, output, and storage.",
            "Ethics Review: Good digital habits and cyber hygiene.",
            "Assessment Prep: Review question sets and device identification."
          ]
        },
        step3Website: {
          title: "Step 3: Interactive Learning Activity",
          description: "Review computer hardware fundamentals quiz portal.",
          websiteUrl: "https://www.geeksforgeeks.org/computer-science-fundamentals/computer-hardware/",
          portalName: "GeeksforGeeks - Hardware Revision Portal"
        },
        step4Quiz: {
          title: "Step 4: Concept Check Quiz",
          description: "Final Chapter 1 revision quiz. Passing score is 80%.",
          passingScorePercent: 80,
          question: "What is the primary function of an Output device?",
          options: [
            { id: 61, text: "Display or print processed data to the user", isCorrect: true },
            { id: 62, text: "Enter data into the computer system", isCorrect: false },
            { id: 63, text: "Store files when computer is turned off", isCorrect: false }
          ]
        },
        step5Task: {
          title: "Step 5: Practical Activity & Task Submission",
          description: "Submit final chapter practical assessment sheet.",
          instructions: "Class 4: Computer Quiz, Picture Identification, Team Challenge, Oral Assessment & Practical Revision.",
          pdfUrl: "/asset/5th class/chapter 1/class 4/practical activities.pdf",
          fileName: "practical activities.pdf"
        }
      }
    }
  ]
};
