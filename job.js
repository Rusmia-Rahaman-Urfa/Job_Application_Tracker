let jobs = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", desc: "Build cross-platform mobile apps using React Native.", status: "none" },
    { id: 2, company: "WebFlow Agency", position: "Web Designer", location: "LA, CA", type: "Part-time", salary: "$80k - $120k", desc: "Create stunning web experiences for high-profile clients.", status: "none" },
    { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125k - $165k", desc: "Transform complex data into compelling visualizations.", status: "none" },
    { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140k - $190k", desc: "Design and maintain scalable backend systems.", status: "none" },
    { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110k - $150k", desc: "Create beautiful and functional user interfaces.", status: "none" },
    { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130k - $170k", desc: "Build enterprise applications with modern frameworks.", status: "none" },
    { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120k - $160k", desc: "Join our fast-growing startup and work on our core platform.", status: "none" },
    { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130k - $175k", desc: "Develop scalable web applications using React.", status: "none" }
];

let activeView = 'all';

function renderJobs() {
    const listArea = document.getElementById('main-job-list');
    const filtered = jobs.filter(item => {
        if (activeView === 'all') return true;
        return item.status === activeView;
    });

    document.getElementById('display-count').innerText = filtered.length;
    listArea.innerHTML = '';

    if (filtered.length === 0) {
        listArea.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
                <img src="file.jpeg" alt="No jobs available" class="w-16 h-16 opacity-70">
                <h3 class="text-xl font-bold text-slate-700">No jobs available</h3>
                <p class="text-gray-400">Check back soon for new job opportunities</p>
            </div>`;
        return;
    }

    filtered.forEach(item => {
        const entry = document.createElement('div');
        entry.className = "bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-blue-300 transition-all";
        
        let labelColor = 'bg-slate-100 text-slate-600';
        if (item.status === 'interview') labelColor = 'bg-emerald-100 text-emerald-700';
        if (item.status === 'rejected') labelColor = 'bg-red-100 text-red-700';

        entry.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                    <h4 class="font-bold text-xl text-blue-900">${item.company}</h4>
                    <p class="text-slate-500 mb-2">${item.position}</p>
                </div>
                <button onclick="removeEntry(${item.id})" class="p-2 text-gray-300 hover:text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
            <div class="flex gap-4 text-[11px] font-semibold text-gray-400 uppercase mb-4">
                <span>${item.location}</span> • <span>${item.type}</span> • <span>${item.salary}</span>
            </div>
            <div class="inline-block px-3 py-1 rounded text-[10px] font-black uppercase mb-4 ${labelColor}">
                ${item.status === 'none' ? 'NOT APPLIED' : item.status}
            </div>
            <p class="text-sm text-slate-600 leading-relaxed mb-6">${item.desc}</p>
            <div class="flex items-center gap-3">
                <button onclick="modifyStatus(${item.id}, 'interview')" class="px-4 py-2 border border-emerald-500 text-emerald-600 text-xs font-bold rounded hover:bg-emerald-500 hover:text-white transition-all">INTERVIEW</button>
                <button onclick="modifyStatus(${item.id}, 'rejected')" class="px-4 py-2 border border-red-400 text-red-500 text-xs font-bold rounded hover:bg-red-400 hover:text-white transition-all">REJECTED</button>
            </div>`;
        listArea.appendChild(entry);
    });
}

function modifyStatus(targetId, nextStatus) {
    for (let j = 0; j < jobs.length; j++) {
        if (jobs[j].id === targetId) {
            jobs[j].status = nextStatus;
            break;
        }
    }
    renderJobs();
}

function removeEntry(targetId) {
    const freshList = [];
    for (let k = 0; k < jobs.length; k++) {
        if (jobs[k].id !== targetId) {
            freshList.push(jobs[k]);
        }
    }
    jobs = freshList;
    renderJobs();
}

function changeCategory(mode, element) {
    activeView = mode;
    const allTabs = document.getElementsByClassName('tab');
    for (let t = 0; t < allTabs.length; t++) {
        allTabs[t].classList.remove('tab-active');
    }
    element.classList.add('tab-active');
    renderJobs();
}

renderJobs();