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
}