import { withTranslation } from "@/localization";
import { Component } from "react";

class ClassDemo extends Component {
  handleSwitchLanguage = () => {
    const { changeLanguage, currentLanguage } = this.props;
    changeLanguage(currentLanguage === "en" ? "ar" : "en");
  };
  render() {
    const { t, changeLanguage, currentLanguage } = this.props;

    return (
      <div className="container">
        <h1>{t("greet")}</h1>
        <h2>Current Language is {currentLanguage}</h2>
        <button onClick={this.handleSwitchLanguage}>Switch Lanugage</button>
      </div>
    );
  }
}

export default withTranslation(ClassDemo);
