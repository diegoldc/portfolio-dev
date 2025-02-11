import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { useTranslation } from 'react-i18next';


function Experience() {

  const { t } = useTranslation();

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
  ]

  return (
    <div className="m-10 max-w-2xl">
    <h2 className="w-auto text-3xl font-bold mb-10 text-center">{t("experience.title")}</h2>


    <Timeline>
      {jobs.map((job, index) => (
        <Timeline.Item key={index}>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>{job.date}</Timeline.Time>
          <Timeline.Title>{job.title} - {job.company}</Timeline.Title>
          <Timeline.Body>
            {job.description}
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      ))}
      
    </Timeline>
    </div>
  );
}

export default Experience