import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { useTranslation } from 'react-i18next';


function Formacion() {

  const { t } = useTranslation();

  const formaciones = [
    {
      title: t("formacion.studies.study1.degree"),
      company: t("formacion.studies.study1.school"),
      date: t("formacion.studies.study1.date"),
      description: t("formacion.studies.study1.description"),
    },
    {
      title: t("formacion.studies.study2.degree"),
      company: t("formacion.studies.study2.school"),
      date: t("formacion.studies.study2.date"),
      description: t("formacion.studies.study2.description"),
    },
    {
      title: t("formacion.studies.study3.degree"),
      company: t("formacion.studies.study3.school"),
      date: t("formacion.studies.study3.date"),
      description: t("formacion.studies.study3.description"),
    }
  ]

  return (
    <div className="m-10 max-w-2xl">
    <h2 className="w-auto text-3xl font-bold mb-10 text-center">{t("formacion.title")}</h2>


    <Timeline>
      {formaciones.map((formacion, index) => (
        <Timeline.Item key={index}>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>{formacion.date}</Timeline.Time>
          <Timeline.Title>{formacion.title} - {formacion.company}</Timeline.Title>
          <Timeline.Body>
            {formacion.description}
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

export default Formacion