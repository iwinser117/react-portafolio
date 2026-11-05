import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Database,
  FileText,
  Inbox,
  LayoutDashboard,
} from "lucide-react";
import LazyYouTubeVideo from "./LazyYouTubeVideo";

const serviceIcons = {
  pdf: FileText,
  inbox: Inbox,
  cpi: Cloud,
  data: Database,
  portal: LayoutDashboard,
  consulting: BriefcaseBusiness,
};

const videoDemos = [
  {
    url: "https://www.youtube.com/watch?v=JOjaPiqHS-c",
    titleKey: "services.demos.videos.crud.title",
    subtitleKey: "services.demos.videos.crud.subtitle",
  },
  {
    url: "https://www.youtube.com/watch?v=a5oyImOKM8E&t=3s",
    titleKey: "services.demos.videos.iflow.title",
    subtitleKey: "services.demos.videos.iflow.subtitle",
  },
  {
    url:"https://youtu.be/1jVPcv3hWko",
    titleKey: "services.demos.videos.pdf.title",
    subtitleKey: "services.demos.videos.pdf.subtitle",
  }
];

const ServicesBanner = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language?.startsWith("en") ? "en" : "es";
  const services = Object.entries(t("services.items", { returnObjects: true }));

  return (
    <section className="w-full" aria-labelledby="services-preview-title">
      <div className="flex flex-col gap-3 border-b border-[#d9d9d9] pb-5 dark:border-[#3c4854] sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 id="services-preview-title" className="text-xl font-semibold tracking-tight text-[#354A5F] dark:text-[#F5F6F7] sm:text-2xl">
            {t("services.hero.title")}
          </h2>
        </div>
        <Link to={`/${currentLanguage}/servicios`} className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#0070d2] transition-colors hover:text-[#004085] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0070d2] dark:text-[#4DB1FF] dark:hover:text-[#8bcaff]">
          {t("common.learn_more", "Ver servicios")}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#6a6d70] dark:text-[#b9c5d1]">
        {t("services.hero.description")}
      </p>

      <div className="mt-6 grid overflow-hidden rounded-lg border border-[#d9d9d9] bg-white dark:border-[#3c4854] dark:bg-[#1d232a] sm:grid-cols-2">
        {services.map(([key, service]) => {
          const Icon = serviceIcons[key] || BriefcaseBusiness;

          return (
            <Link key={key} to={`/${currentLanguage}/servicios`} className="group relative flex min-h-36 gap-3 border-b border-[#d9d9d9] p-4 transition-colors duration-200 hover:bg-[#f3f8fc] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0070d2] dark:border-[#3c4854] dark:hover:bg-[#222d38] sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-odd]:border-r sm:[&:nth-odd]:border-[#d9d9d9] sm:dark:[&:nth-odd]:border-[#3c4854]" aria-label={`${service.title}: ${t("common.learn_more", "Ver servicios")}`}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#cbddec] bg-[#eaf3fb] text-[#0070d2] transition-colors duration-200 group-hover:border-[#0070d2] group-hover:bg-white dark:border-[#31536d] dark:bg-[#1a3448] dark:text-[#4DB1FF] dark:group-hover:bg-[#1d232a]">
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="min-w-0 pr-5">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0070d2] dark:text-[#4DB1FF]">
                  {service.subtitle}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-[#354A5F] dark:text-[#F5F6F7]">
                  {service.title}
                </span>
                <span className="mt-1.5 block line-clamp-2 text-xs leading-relaxed text-[#6a6d70] dark:text-[#b9c5d1]">
                  {service.description}
                </span>
              </span>
              <ArrowUpRight size={17} className="absolute right-4 top-4 text-[#6a6d70] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0070d2] dark:text-[#8794a1] dark:group-hover:text-[#4DB1FF]" aria-hidden="true" />
            </Link>
          );
        })}
      </div>

      {videoDemos.length > 0 && (
        <div className="mt-6 border-t border-[#d9d9d9] pt-6 dark:border-[#3c4854]">
          <h3 className="text-base font-semibold text-[#354A5F] dark:text-[#F5F6F7]">
            {t("services.demos.title")}
          </h3>
          <p className="mt-1 text-sm text-[#6a6d70] dark:text-[#b9c5d1]">
            {t("services.demos.description")}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {videoDemos.map((video) => (
              <div key={video.url}>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-[#d9d9d9] bg-[#102a43] dark:border-[#3c4854]">
                  <LazyYouTubeVideo
                    url={video.url}
                    title={t(video.titleKey)}
                    playLabel={t("services.demos.play")}
                  />
                </div>
                <h4 className="mt-3 text-sm font-semibold text-[#354A5F] dark:text-[#F5F6F7]">
                  {t(video.titleKey)}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#6a6d70] dark:text-[#b9c5d1]">
                  {t(video.subtitleKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesBanner;
