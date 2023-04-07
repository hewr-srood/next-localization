import { useTranslation } from "@/localization";

const FuncionalDemo = () => {
  const { t, changeLanguage, currentLanguage } = useTranslation();
  const handleSwitchLanguage = () => {
    changeLanguage(currentLanguage === "en" ? "ar" : "en");
  };
  return (
    <div className="container">
      <h1>{t("greet")}</h1>
      <h2>Current Language is {currentLanguage}</h2>
      <button onClick={handleSwitchLanguage}>Switch Lanugage</button>
    </div>
  );
};

export default FuncionalDemo;
