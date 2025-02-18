import { useState } from "react"; 
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();
  const [expandedText, setExpandedText] = useState(null); 

  const jobs = [
    {
      title: t("experience.jobs.exp1.position"),
      company: t("experience.jobs.exp1.company"),
      date: t("experience.jobs.exp1.date"),
      description: t("experience.jobs.exp1.description"),
    },
    {
      title: t("experience.jobs.exp2.position"),
      company: t("experience.jobs.exp2.company"),
      date: t("experience.jobs.exp2.date"),
      description: t("experience.jobs.exp2.description"),
    },
    {
      title: t("experience.jobs.exp3.position"),
      company: t("experience.jobs.exp3.company"),
      date: t("experience.jobs.exp3.date"),
      description: t("experience.jobs.exp3.description"),
    }
  ];

  const handleLearnMoreClick = (index) => {
    setExpandedText(expandedText === index ? null : index);
  };

  return (
    <div className="m-10 max-w-2xl dark:text-white">
      <h2 className="w-auto text-3xl font-bold mb-10 text-center">{t("experience.title")}</h2>

      <Timeline>
        {jobs.map((job, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>{job.date}</Timeline.Time>
              <Timeline.Title>{job.title} - {job.company}</Timeline.Title>
              <Timeline.Body>
                <div
                  className={`overflow-hidden ${
                    expandedText === index ? "line-clamp-none" : "line-clamp-3"
                  }`}
                >
                  {job.description}
                </div>
              </Timeline.Body>
              <Button color="gray" onClick={() => handleLearnMoreClick(index)}>
                {expandedText === index ? "Show Less" : "Learn More"}
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

export default Experience;