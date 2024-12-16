import { useTranslation } from 'react-i18next';
import English from "../../node_modules/language-icons/icons/en.svg";
import Spanish from "../../node_modules/language-icons/icons/es.svg";

function LanguageSwitcher() {

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
    <button onClick={() => changeLanguage('en')}>
      <img style={{width:"50px"}} src={English} alt="en" />
    </button>
    <button onClick={() => changeLanguage('es')}>
      <img style={{width:"50px"}} src={Spanish} alt="es" />
    </button>
    {/* Add more language buttons as needed */}
  </div>
  )
}

export default LanguageSwitcher