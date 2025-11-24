export default function FormsPage() {
    const forms = [
        {
            title: "Scope of Appointment",
            description: "Required form to discuss Medicare Advantage or Prescription Drug Plans.",
            fileType: "PDF",
            size: "156 KB"
        },
        {
            title: "New Client Intake",
            description: "Basic information we need to get started with your enrollment.",
            fileType: "PDF",
            size: "245 KB"
        },
        {
            title: "Prescription Drug List",
            description: "Form to list your current medications for Part D analysis.",
            fileType: "PDF",
            size: "120 KB"
        },
        {
            title: "Medicare Part B Application",
            description: "Official CMS-40B form for enrolling in Medicare Part B.",
            fileType: "PDF",
            size: "310 KB"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-12 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#002147] mb-6">Forms & Resources</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Download the necessary documents to prepare for your appointment or complete your enrollment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {forms.map((form, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-start space-x-4 group cursor-pointer">
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg group-hover:bg-red-100 transition-colors">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-[#002147] mb-1 group-hover:text-blue-700 transition-colors">{form.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{form.description}</p>
                                <div className="flex items-center text-xs text-gray-400 space-x-3">
                                    <span className="uppercase font-semibold bg-gray-100 px-2 py-1 rounded">{form.fileType}</span>
                                    <span>{form.size}</span>
                                </div>
                            </div>
                            <div className="text-gray-300 group-hover:text-[#002147] transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
