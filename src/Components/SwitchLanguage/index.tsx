import { useTranslation } from "react-i18next"

export default function SwitchLanguage() {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;

    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <div className="flex gap-2 bg-white p-4 rounded-lg">
            <button
                className={`p-2 rounded-md font-medium ${currentLanguage === "en" ? "bg-primary-blue text-white" : "bg-white"}`}
                onClick={() => handleChangeLanguage("en")}
            >
                EN
            </button>
            <button
                className={`p-2 rounded-md font-medium ${currentLanguage === "pt" ? "bg-primary-blue text-white" : "bg-white"}`}
                onClick={() => handleChangeLanguage("pt")}
            >
                PT
            </button>
        </div>
    )
}