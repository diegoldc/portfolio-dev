import { useTranslation } from "react-i18next";
import English from "../../node_modules/language-icons/icons/en.svg";
import Spanish from "../../node_modules/language-icons/icons/es.svg";
import { Dropdown } from "flowbite-react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (

    <Dropdown label={t("navbar.language")} inline>      <Dropdown.Item
        onClick={() => changeLanguage("en")}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <img
          src={English}
          alt="en"
          style={{ borderRadius: "75px", height: "40px" }}
        />
        English
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => changeLanguage("es")}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <img
          src={Spanish}
          alt="es"
          style={{ borderRadius: "75px", height: "40px" }}
        />
        Español
      </Dropdown.Item>
    </Dropdown>
  );
}

export default LanguageSwitcher;
