/* ==========================================================================
   ENGLORAY LEARNING - DYNAMIC JSON NAVIGATION ENGINE & APPLICATION LOGIC
   Loads class data from COURSES_DATA JSON object dynamically
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // LMS Application State
  const state = {
    currentClassId: 6, // Default Class 1 ID
    currentView: 'learning', // 'learning' or 'overview'
    completedStepsPerClass: {
      6: { step1Video: false, step2TopicPdf: false, step3Website: false, step4Quiz: false, step5Task: false },
      7: { step1Video: false, step2TopicPdf: false, step3Website: false, step4Quiz: false, step5Task: false },
      8: { step1Video: false, step2TopicPdf: false, step3Website: false, step4Quiz: false, step5Task: false },
      9: { step1Video: false, step2TopicPdf: false, step3Website: false, step4Quiz: false, step5Task: false }
    },
    unlockedClassIds: [6, 7], // Class 1 and Class 2 unlocked by default/admin
    selectedQuizOptionId: null,
    selectedFile: null
  };

  // DOM Element Selectors
  const elements = {
    // Views
    courseOverviewPage: document.getElementById('courseOverviewPage'),
    classLearningPage: document.getElementById('classLearningPage'),
    courseClassesGrid: document.getElementById('courseClassesGrid'),
    logoHeaderHome: document.getElementById('logoHeaderHome'),
    btnBackToCourse: document.getElementById('btnBackToCourse'),
    gradeSelectDropdown: document.getElementById('gradeSelectDropdown'),

    // Hero Header
    activeDayBadge: document.getElementById('activeDayBadge'),
    overallCompletionBadge: document.getElementById('overallCompletionBadge'),
    classTopicTitle: document.getElementById('classTopicTitle'),
    classTopicDescription: document.getElementById('classTopicDescription'),

    // Step 1 Video
    step1Title: document.getElementById('step1Title'),
    step1Desc: document.getElementById('step1Desc'),
    youtubeIframe: document.getElementById('youtubeIframe'),
    btnCompleteStep1: document.getElementById('btnCompleteStep1'),
    step1StatusBadge: document.getElementById('step1StatusBadge'),

    // Step 2 PDF
    step2Title: document.getElementById('step2Title'),
    step2Desc: document.getElementById('step2Desc'),
    topicPdfTitle: document.getElementById('topicPdfTitle'),
    linkTopicPdf: document.getElementById('linkTopicPdf'),
    keyConceptsList: document.getElementById('keyConceptsList'),
    btnCompleteStep2: document.getElementById('btnCompleteStep2'),
    step2StatusBadge: document.getElementById('step2StatusBadge'),

    // Step 3 Website
    step3Title: document.getElementById('step3Title'),
    step3Desc: document.getElementById('step3Desc'),
    portalNameText: document.getElementById('portalNameText'),
    websiteUrlText: document.getElementById('websiteUrlText'),
    linkWebsite: document.getElementById('linkWebsite'),
    btnCompleteStep3: document.getElementById('btnCompleteStep3'),
    step3StatusBadge: document.getElementById('step3StatusBadge'),

    // Step 4 Quiz
    step4Title: document.getElementById('step4Title'),
    step4Desc: document.getElementById('step4Desc'),
    quizQuestionText: document.getElementById('quizQuestionText'),
    quizOptionsContainer: document.getElementById('quizOptionsContainer'),
    btnSubmitQuiz: document.getElementById('btnSubmitQuiz'),
    quizResultBox: document.getElementById('quizResultBox'),
    resultTitle: document.getElementById('resultTitle'),
    resultSubtitle: document.getElementById('resultSubtitle'),
    step4StatusBadge: document.getElementById('step4StatusBadge'),

    // Step 5 Task Upload
    step5Title: document.getElementById('step5Title'),
    step5Desc: document.getElementById('step5Desc'),
    taskInstructionsText: document.getElementById('taskInstructionsText'),
    linkPracticalPdf: document.getElementById('linkPracticalPdf'),
    fileInput: document.getElementById('fileInput'),
    btnBrowseFile: document.getElementById('btnBrowseFile'),
    btnClearFile: document.getElementById('btnClearFile'),
    selectedFileInfo: document.getElementById('selectedFileInfo'),
    fileNameDisplay: document.getElementById('fileNameDisplay'),
    dropzone: document.getElementById('dropzone'),
    submissionStatusBox: document.getElementById('submissionStatusBox'),
    submissionMetaText: document.getElementById('submissionMetaText'),
    btnSubmitTask: document.getElementById('btnSubmitTask'),
    step5StatusBadge: document.getElementById('step5StatusBadge'),

    // Sidebar Elements
    progressPercentageText: document.getElementById('progressPercentageText'),
    progressRingFill: document.getElementById('progressRingFill'),
    progressionStatusTitle: document.getElementById('progressionStatusTitle'),
    progressionSubtitleText: document.getElementById('progressionSubtitleText'),
    sidebarClassNavList: document.getElementById('sidebarClassNavList'),
    sidebarAssetsList: document.getElementById('sidebarAssetsList'),
    toastContainer: document.getElementById('toastContainer')
  };

  // 1. App Initialization & Real-Time Admin Sync
  function init() {
    setupViewSwitching();
    setupStepActions();
    setupFileUpload();

    const selectedGrade = elements.gradeSelectDropdown ? parseInt(elements.gradeSelectDropdown.value) : 3;
    switchGrade(selectedGrade);

    // Initial Sync & Real-Time Polling Engine (3s interval + storage events)
    syncWithBackend();
    setInterval(syncWithBackend, 3000);
    window.addEventListener('storage', syncWithBackend);
  }

  // Real-Time Sync Engine with Backend Database & Admin Portal
  async function syncWithBackend() {
    // Sync Chapter Lock Statuses set by Admin in Admin Portal
    try {
      const res = await fetch('http://localhost:8080/api/v1/admin/courses');
      if (res.ok) {
        const adminCourses = await res.json();
        if (Array.isArray(adminCourses)) {
          adminCourses.forEach(course => {
            if (course.chapters && COURSES_DATA.grades) {
              const targetGrade = COURSES_DATA.grades.find(g => g.gradeNumber === course.gradeNumber);
              if (targetGrade && targetGrade.chapters) {
                course.chapters.forEach(adminChap => {
                  const localChap = targetGrade.chapters.find(c => c.chapterNumber === adminChap.chapterNumber);
                  if (localChap) {
                    localChap.isLockedByAdmin = adminChap.isLocked;
                  }
                });
              }
            }
          });
        }
      }
    } catch (e) {
      // Fallback local storage check
    }

    // Sync Submission Status (Approved / Rejected by Admin)
    try {
      const subsData = localStorage.getItem('lms_admin_submissions');
      if (subsData) {
        const submissions = JSON.parse(subsData);
        if (Array.isArray(submissions) && submissions.length > 0) {
          const currentClassObj = COURSES_DATA.classes ? COURSES_DATA.classes.find(c => c.id === state.currentClassId) : null;
          const matchedSub = submissions.find(s => 
            s.gradeNumber === COURSES_DATA.currentGradeNumber ||
            (currentClassObj && s.topicTitle && s.topicTitle.includes(currentClassObj.title))
          );

          if (matchedSub && elements.submissionStatusBox && !elements.submissionStatusBox.classList.contains('hidden')) {
            if (matchedSub.status === 'GRADED' || matchedSub.status === 'REVIEWED') {
              elements.submissionStatusBox.className = 'badge badge-success';
              elements.submissionMetaText.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>GRADED & APPROVED BY ADMIN</strong> (Score: ${matchedSub.score || 100}%) — <em>${matchedSub.feedback || 'Excellent submission!'}</em>`;
            } else if (matchedSub.status === 'REJECTED') {
              elements.submissionStatusBox.className = 'badge badge-rejected';
              elements.submissionMetaText.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <strong>REJECTED BY ADMIN</strong> — <em>${matchedSub.feedback || 'Please resubmit your worksheet.'}</em>`;
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  // 2. Load Class View Dynamically from COURSES_DATA JSON
  function loadClassView(classId) {
    const classData = COURSES_DATA.classes.find(c => c.id === classId);
    if (!classData) return;

    state.currentClassId = classId;
    state.currentView = 'learning';

    // Update Hero Header
    elements.activeDayBadge.textContent = `Class ${classData.dayNumber} of ${COURSES_DATA.classes.length}`;
    elements.classTopicTitle.textContent = classData.title;
    elements.classTopicDescription.textContent = classData.description;

    // Step 1: Video
    elements.step1Title.textContent = classData.steps.step1Video.title;
    elements.step1Desc.textContent = classData.steps.step1Video.description;
    elements.youtubeIframe.src = classData.steps.step1Video.videoUrl;

    // Step 2: Topics PDF
    elements.step2Title.textContent = classData.steps.step2TopicPdf.title;
    elements.step2Desc.textContent = classData.steps.step2TopicPdf.description;
    elements.topicPdfTitle.textContent = classData.steps.step2TopicPdf.fileName;
    elements.linkTopicPdf.href = classData.steps.step2TopicPdf.pdfUrl;

    elements.keyConceptsList.innerHTML = classData.steps.step2TopicPdf.keyConcepts
      .map(concept => `<li><i class="fa-solid fa-check text-blue"></i> ${concept}</li>`)
      .join('');

    // Step 3: Website Activity
    elements.step3Title.textContent = classData.steps.step3Website.title;
    elements.step3Desc.textContent = classData.steps.step3Website.description;
    elements.portalNameText.textContent = classData.steps.step3Website.portalName;
    elements.websiteUrlText.textContent = classData.steps.step3Website.websiteUrl;
    elements.linkWebsite.href = classData.steps.step3Website.websiteUrl;

    // Step 4: Quiz
    elements.step4Title.textContent = classData.steps.step4Quiz.title;
    elements.step4Desc.innerHTML = `Test your knowledge. Passing score is <strong>${classData.steps.step4Quiz.passingScorePercent}%</strong>.`;
    elements.quizQuestionText.textContent = classData.steps.step4Quiz.question;
    renderQuizOptions(classData.steps.step4Quiz.options);

    // Step 5: Practical Task
    elements.step5Title.textContent = classData.steps.step5Task.title;
    elements.step5Desc.textContent = classData.steps.step5Task.description;
    elements.taskInstructionsText.textContent = classData.steps.step5Task.instructions;
    elements.linkPracticalPdf.href = classData.steps.step5Task.pdfUrl;

    // Reset / Restore Step UI Statuses for this Class
    restoreClassStepUIState(classId);

    // Render Sidebar Navigation & Assets
    renderSidebarClassList();
    renderSidebarAssets();
    updateProgressUI();

    // Show Learning Page View
    elements.courseOverviewPage.classList.add('hidden');
    elements.classLearningPage.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 3. Render Quiz Options Dynamically
  function renderQuizOptions(options) {
    state.selectedQuizOptionId = null;
    elements.quizOptionsContainer.innerHTML = options.map(opt => `
      <label class="option-pill" data-option-id="${opt.id}" data-correct="${opt.isCorrect}">
        <input type="radio" name="quizOption" value="${opt.id}">
        <span class="radio-custom"></span>
        <span class="option-label">${opt.text}</span>
      </label>
    `).join('');

    // Attach option pill selection click event
    const pills = elements.quizOptionsContainer.querySelectorAll('.option-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        const radio = pill.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          state.selectedQuizOptionId = parseInt(radio.value);
        }
      });
    });
  }

  // 4. Render Course Overview Page (Grid of All Classes)
  function showCourseOverviewPage() {
    state.currentView = 'overview';
    elements.classLearningPage.classList.add('hidden');
    elements.courseOverviewPage.classList.remove('hidden');

    elements.courseClassesGrid.innerHTML = COURSES_DATA.classes.map(c => {
      const isUnlocked = state.unlockedClassIds.includes(c.id);
      const isCompleted = isClass100PercentCompleted(c.id);

      let statusBadge = '<span class="status-pill status-locked"><i class="fa-solid fa-lock"></i> Locked by Admin</span>';
      if (isCompleted) {
        statusBadge = '<span class="status-pill status-completed"><i class="fa-solid fa-circle-check"></i> Completed</span>';
      } else if (isUnlocked) {
        statusBadge = '<span class="status-pill status-unlocked"><i class="fa-solid fa-lock-open"></i> Unlocked</span>';
      }

      let btnActionHtml = `<button class="btn btn-sm btn-outline" disabled><i class="fa-solid fa-lock"></i> Locked</button>`;
      if (isUnlocked) {
        btnActionHtml = `<button class="btn btn-sm btn-primary btn-open-class" data-class-id="${c.id}"><i class="fa-solid fa-arrow-right"></i> Open Class Page</button>`;
      }

      return `
        <div class="class-overview-card ${isUnlocked ? '' : 'locked'}">
          <div class="class-card-header">
            <span class="class-card-number">Class ${c.dayNumber} of ${COURSES_DATA.classes.length}</span>
            ${statusBadge}
          </div>
          <div class="class-card-body">
            <h3>${c.title}</h3>
            <p>${c.description}</p>
          </div>
          <div class="class-card-footer">
            <span class="badge badge-neutral"><i class="fa-solid fa-list-check"></i> 5 Steps</span>
            ${btnActionHtml}
          </div>
        </div>
      `;
    }).join('');

    // Attach click events to "Open Class Page" buttons
    const openBtns = elements.courseClassesGrid.querySelectorAll('.btn-open-class');
    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const classId = parseInt(e.currentTarget.getAttribute('data-class-id'));
        loadClassView(classId);
      });
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 5. Sidebar Class List Rendering
  function renderSidebarClassList() {
    elements.sidebarClassNavList.innerHTML = COURSES_DATA.classes.map(c => {
      const isUnlocked = state.unlockedClassIds.includes(c.id);
      const isActive = c.id === state.currentClassId;
      const isCompleted = isClass100PercentCompleted(c.id);

      let statusPill = `<span class="status-pill status-locked"><i class="fa-solid fa-lock"></i> Locked</span>`;
      if (isCompleted) {
        statusPill = `<span class="status-pill status-completed"><i class="fa-solid fa-circle-check"></i> Finished</span>`;
      } else if (isActive) {
        statusPill = `<span class="status-pill status-unlocked"><i class="fa-solid fa-lock-open"></i> Active Now</span>`;
      } else if (isUnlocked) {
        statusPill = `<span class="status-pill status-unlocked"><i class="fa-solid fa-unlock"></i> Ready</span>`;
      }

      return `
        <div class="class-nav-item ${isActive ? 'active' : ''} ${isUnlocked ? '' : 'locked'}" data-class-id="${c.id}">
          <div class="nav-item-status">
            <span class="nav-day-num">${c.dayNumber}</span>
          </div>
          <div class="nav-item-info">
            <h4>Class ${c.dayNumber}: ${c.title.split(':')[1] ? c.title.split(':')[1].trim() : c.title}</h4>
            ${statusPill}
          </div>
          <i class="fa-solid ${isUnlocked ? 'fa-chevron-right nav-arrow' : 'fa-lock nav-lock-icon'}"></i>
        </div>
      `;
    }).join('');

    // Sidebar navigation click handlers
    const navItems = elements.sidebarClassNavList.querySelectorAll('.class-nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const classId = parseInt(item.getAttribute('data-class-id'));
        const isUnlocked = state.unlockedClassIds.includes(classId);

        if (!isUnlocked) {
          showToast(`ACCESS_DENIED: Class ${classId - 5} is locked by Admin / Teacher!`, 'error');
        } else {
          loadClassView(classId);
        }
      });
    });
  }

  // 6. Sidebar Quick Assets
  function renderSidebarAssets() {
    const classData = COURSES_DATA.classes.find(c => c.id === state.currentClassId);
    if (!classData) return;

    elements.sidebarAssetsList.innerHTML = `
      <a href="${classData.steps.step2TopicPdf.pdfUrl}" target="_blank" class="asset-link">
        <i class="fa-solid fa-file-pdf text-red"></i>
        <span>Class ${classData.dayNumber} Topics Covered (PDF)</span>
      </a>
      <a href="${classData.steps.step5Task.pdfUrl}" target="_blank" class="asset-link">
        <i class="fa-solid fa-file-pdf text-blue"></i>
        <span>Class ${classData.dayNumber} Practical Worksheet (PDF)</span>
      </a>
      <a href="/asset/5th class/chapter 1/CLASSES COVERED.pdf" target="_blank" class="asset-link">
        <i class="fa-solid fa-file-pdf text-green"></i>
        <span>Chapter Syllabus & Overview</span>
      </a>
    `;
  }

  // 7. Setup View Switch Events & Grade Switching
  function setupViewSwitching() {
    elements.btnBackToCourse?.addEventListener('click', () => {
      showToast('Navigating back to Course Overview Page...', 'info');
      showCourseOverviewPage();
    });

    elements.logoHeaderHome?.addEventListener('click', () => {
      showCourseOverviewPage();
    });

    elements.gradeSelectDropdown?.addEventListener('change', (e) => {
      const selectedGrade = parseInt(e.target.value);
      switchGrade(selectedGrade);
    });
  }

  // Switch Active Curriculum Grade & Chapter Dynamically
  function switchGrade(gradeNumber) {
    if (!COURSES_DATA.grades) return;
    const targetGrade = COURSES_DATA.grades.find(g => g.gradeNumber === gradeNumber);
    if (!targetGrade || !targetGrade.chapters.length) return;

    const firstChapter = targetGrade.chapters[0];
    COURSES_DATA.classes = firstChapter.classes;
    COURSES_DATA.currentGradeNumber = gradeNumber;

    firstChapter.classes.forEach(c => {
      if (!state.completedStepsPerClass[c.id]) {
        state.completedStepsPerClass[c.id] = { step1Video: false, step2TopicPdf: false, step3Website: false, step4Quiz: false, step5Task: false };
      }
      if (!state.unlockedClassIds.includes(c.id)) {
        state.unlockedClassIds.push(c.id);
      }
    });

    const activeBreadcrumb = document.getElementById('breadcrumbChapterTitle');
    if (activeBreadcrumb) {
      activeBreadcrumb.textContent = firstChapter.chapterTitle;
    }

    const firstClassId = firstChapter.classes[0].id;
    loadClassView(firstClassId);
    showToast(`Switched to ${targetGrade.gradeName} - ${firstChapter.chapterTitle}`, 'success');
  }

  // 8. Step Completion Actions
  function setupStepActions() {
    // Step 1 Video
    elements.btnCompleteStep1?.addEventListener('click', () => {
      state.completedStepsPerClass[state.currentClassId].step1Video = true;
      markStepBadgeCompleted(elements.step1StatusBadge, 'Watched');
      elements.btnCompleteStep1.classList.remove('btn-primary');
      elements.btnCompleteStep1.classList.add('btn-outline');
      elements.btnCompleteStep1.innerHTML = '<i class="fa-solid fa-check-double"></i> Step 1 Completed';
      showToast('Step 1 Complete: Lesson Video Watched!', 'success');
      updateProgressUI();
    });

    // Step 2 Topic PDF
    elements.btnCompleteStep2?.addEventListener('click', () => {
      state.completedStepsPerClass[state.currentClassId].step2TopicPdf = true;
      markStepBadgeCompleted(elements.step2StatusBadge, 'Reviewed');
      elements.btnCompleteStep2.classList.remove('btn-primary');
      elements.btnCompleteStep2.classList.add('btn-outline');
      elements.btnCompleteStep2.innerHTML = '<i class="fa-solid fa-check-double"></i> Step 2 Completed';
      showToast('Step 2 Complete: Topics Reviewed!', 'success');
      updateProgressUI();
    });

    // Step 3 Website Activity
    elements.btnCompleteStep3?.addEventListener('click', () => {
      state.completedStepsPerClass[state.currentClassId].step3Website = true;
      markStepBadgeCompleted(elements.step3StatusBadge, 'Visited');
      elements.btnCompleteStep3.classList.remove('btn-primary');
      elements.btnCompleteStep3.classList.add('btn-outline');
      elements.btnCompleteStep3.innerHTML = '<i class="fa-solid fa-check-double"></i> Step 3 Completed';
      showToast('Step 3 Complete: Learning Activity Finished!', 'success');
      updateProgressUI();
    });

    // Step 4 Quiz Submission
    elements.btnSubmitQuiz?.addEventListener('click', () => {
      if (!state.selectedQuizOptionId) {
        showToast('Please select an option before submitting the quiz.', 'error');
        return;
      }

      state.completedStepsPerClass[state.currentClassId].step4Quiz = true;
      elements.quizResultBox.classList.remove('hidden');
      elements.resultTitle.textContent = 'Quiz Submitted! (100%)';
      elements.resultSubtitle.textContent = 'Great job answering the concept check question!';
      markStepBadgeCompleted(elements.step4StatusBadge, 'Passed (100%)');
      elements.btnSubmitQuiz.disabled = true;
      elements.btnSubmitQuiz.innerHTML = '<i class="fa-solid fa-check-double"></i> Quiz Submitted';

      showToast('Step 4 Complete: Quiz Answers Submitted!', 'success');
      updateProgressUI();
    });
  }

  // 9. File Upload Handlers
  function setupFileUpload() {
    elements.btnBrowseFile?.addEventListener('click', () => elements.fileInput.click());

    elements.fileInput?.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleSelectedFile(e.target.files[0]);
      }
    });

    elements.dropzone?.addEventListener('dragover', (e) => {
      e.preventDefault();
      elements.dropzone.classList.add('dragover');
    });

    elements.dropzone?.addEventListener('dragleave', () => elements.dropzone.classList.remove('dragover'));

    elements.dropzone?.addEventListener('drop', (e) => {
      e.preventDefault();
      elements.dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) handleSelectedFile(e.dataTransfer.files[0]);
    });

    elements.btnClearFile?.addEventListener('click', () => {
      state.selectedFile = null;
      elements.selectedFileInfo.classList.add('hidden');
      elements.fileInput.value = '';
    });

    elements.btnSubmitTask?.addEventListener('click', async () => {
      if (!state.selectedFile) {
        showToast('Please select or drag a file to upload.', 'error');
        return;
      }

      state.completedStepsPerClass[state.currentClassId].step5Task = true;
      markStepBadgeCompleted(elements.step5StatusBadge, 'Uploaded');

      const classObj = COURSES_DATA.classes ? COURSES_DATA.classes.find(c => c.id === state.currentClassId) : null;
      const newSubmission = {
        id: Date.now(),
        studentName: 'Emma Watson',
        studentEmail: 'student5@school.com',
        gradeNumber: COURSES_DATA.currentGradeNumber || 5,
        chapterTitle: 'Chapter 1: Computer Skills & Hardware Devices',
        topicTitle: classObj ? classObj.title : 'Practical Worksheet Submission',
        fileName: state.selectedFile.name,
        submittedAt: new Date().toISOString(),
        status: 'SUBMITTED',
        score: null,
        feedback: null
      };

      // Push submission to shared storage and API backend for Admin Portal
      try {
        const existingSubs = JSON.parse(localStorage.getItem('lms_admin_submissions') || '[]');
        existingSubs.unshift(newSubmission);
        localStorage.setItem('lms_admin_submissions', JSON.stringify(existingSubs));
        window.dispatchEvent(new Event('storage'));
      } catch (err) {
        console.error('Submission sync error:', err);
      }

      elements.submissionStatusBox.classList.remove('hidden');
      elements.submissionMetaText.textContent = `File: ${state.selectedFile.name} • Status: SUBMITTED (Pending Admin Review)`;
      elements.dropzone.classList.add('hidden');
      elements.btnSubmitTask.disabled = true;
      elements.btnSubmitTask.innerHTML = '<i class="fa-solid fa-cloud-check"></i> Assignment Submitted to Admin';

      showToast('Step 5 Complete: Assignment submitted! Real-time notification sent to Admin Portal.', 'success');
      updateProgressUI();
    });
  }

  function handleSelectedFile(file) {
    state.selectedFile = file;
    elements.fileNameDisplay.textContent = file.name;
    elements.selectedFileInfo.classList.remove('hidden');
  }

  // 10. UI State Restoration for a given class ID
  function restoreClassStepUIState(classId) {
    const classSteps = state.completedStepsPerClass[classId];

    // Reset Quiz result box & Dropzone UI
    elements.quizResultBox.classList.add('hidden');
    elements.btnSubmitQuiz.disabled = false;
    elements.btnSubmitQuiz.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Quiz Answers';

    elements.dropzone.classList.remove('hidden');
    elements.submissionStatusBox.classList.add('hidden');
    elements.btnSubmitTask.disabled = false;
    elements.btnSubmitTask.innerHTML = '<i class="fa-solid fa-upload"></i> Upload & Submit Assignment';
    state.selectedFile = null;
    elements.selectedFileInfo.classList.add('hidden');

    // Reset Buttons
    elements.btnCompleteStep1.className = 'btn btn-primary';
    elements.btnCompleteStep1.innerHTML = '<i class="fa-solid fa-circle-check"></i> Mark Video as Watched';

    elements.btnCompleteStep2.className = 'btn btn-primary';
    elements.btnCompleteStep2.innerHTML = '<i class="fa-solid fa-book-open-reader"></i> Confirm Topic Reviewed';

    elements.btnCompleteStep3.className = 'btn btn-primary';
    elements.btnCompleteStep3.innerHTML = '<i class="fa-solid fa-square-check"></i> Mark Activity Complete';

    // Step Badges
    resetStepBadge(elements.step1StatusBadge, classSteps.step1Video ? 'Watched' : null);
    resetStepBadge(elements.step2StatusBadge, classSteps.step2TopicPdf ? 'Reviewed' : null);
    resetStepBadge(elements.step3StatusBadge, classSteps.step3Website ? 'Visited' : null);
    resetStepBadge(elements.step4StatusBadge, classSteps.step4Quiz ? 'Submitted' : null);
    resetStepBadge(elements.step5StatusBadge, classSteps.step5Task ? 'Uploaded' : null);
  }

  function resetStepBadge(badgeEl, completedLabel) {
    if (!badgeEl) return;
    if (completedLabel) {
      badgeEl.innerHTML = `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> ${completedLabel}</span>`;
    } else {
      badgeEl.innerHTML = `<span class="badge badge-neutral"><i class="fa-regular fa-circle"></i> Pending</span>`;
    }
  }

  // 11. Progress Ring UI Update & Progression Engine
  function updateProgressUI() {
    const currentSteps = state.completedStepsPerClass[state.currentClassId];
    const completedCount = Object.values(currentSteps).filter(Boolean).length;
    const percentage = Math.round((completedCount / 5) * 100);

    elements.progressPercentageText.textContent = `${percentage}%`;
    const circleDashOffset = 251.2 - (251.2 * (percentage / 100));
    elements.progressRingFill.style.strokeDashoffset = circleDashOffset;

    const classObj = COURSES_DATA.classes.find(c => c.id === state.currentClassId);
    const dayNum = classObj ? classObj.dayNumber : 1;

    if (percentage === 100) {
      elements.overallCompletionBadge.className = 'badge badge-success';
      elements.overallCompletionBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> Class ${dayNum} Fully Completed!`;
      elements.progressionStatusTitle.textContent = `Class ${dayNum} Completed!`;
      elements.progressionSubtitleText.textContent = `🎉 All 5 steps completed!`;

      // Auto-unlock next class if completed
      const nextClassId = state.currentClassId + 1;
      if (!state.unlockedClassIds.includes(nextClassId) && COURSES_DATA.classes.some(c => c.id === nextClassId)) {
        state.unlockedClassIds.push(nextClassId);
        showToast(`🎉 Class ${dayNum + 1} has been UNLOCKED!`, 'success');
      }
    } else {
      elements.overallCompletionBadge.className = 'badge badge-primary';
      elements.overallCompletionBadge.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> In Progress (${completedCount}/5 Steps)`;
      elements.progressionStatusTitle.textContent = `Class ${dayNum} In Progress`;
      elements.progressionSubtitleText.textContent = `Complete all 5 steps of Class ${dayNum}.`;
    }

    renderSidebarClassList();
  }

  function isClass100PercentCompleted(classId) {
    const steps = state.completedStepsPerClass[classId];
    if (!steps) return false;
    return Object.values(steps).filter(Boolean).length === 5;
  }

  function markStepBadgeCompleted(badgeElement, labelText) {
    if (badgeElement) {
      badgeElement.innerHTML = `<span class="badge badge-success"><i class="fa-solid fa-circle-check"></i> ${labelText}</span>`;
    }
  }

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check text-green';
    if (type === 'error') iconClass = 'fa-circle-xmark text-red';

    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  init();
});
