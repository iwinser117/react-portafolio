import React from "react";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, FileText } from "lucide-react";

const Aside = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-5xl mx-auto px-4 mt-8">
      <aside className="w-full flex justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 p-4">
          {/* GitHub */}
          <a
            className="w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#24292e] hover:bg-[#2f363d] transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 active:translate-y-0"
            href="https://github.com/iwinser117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="shrink-0" />
            <span className="text-sm">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            className="w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#0077b5] hover:bg-[#006396] transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/20 active:translate-y-0"
            href="https://www.linkedin.com/in/iwinser-aljadys-sanchez-0a62a0234/?originalSubdomain=co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} className="shrink-0" />
            <span className="text-sm">LinkedIn</span>
          </a>

          {/* Curriculum */}
          <a
            className="w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-3 px-5 py-2.5 rounded-lg font-semibold text-white bg-[#dc3545] hover:bg-[#c82333] transition-all duration-300 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-500/20 active:translate-y-0"
            download="CurriculumDeveloperIwinserSanchez"
            href="../assets/IwinserSanchez.pdf"
          >
            <FileText size={20} className="shrink-0" />
            <span className="text-sm">Curriculum</span>
          </a>
        </div>
      </aside>
    </section>
  );
};

export default Aside;