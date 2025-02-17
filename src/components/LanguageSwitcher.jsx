import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      {currentLanguage === "en" ? (
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="GB"
          onClick={() => changeLanguage("es")}
        />
      ) : (
        <ReactCountryFlag
          countryCode="ES"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="ES"
          onClick={() => changeLanguage("en")}
        />
      )}
    </div>
  );
}

export default LanguageSwitcher;
