import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col bg-white pt-10 pb-5 px-8 rounded-lg w-full">
            <h1 className="text-3xl font-bold">{t('contact')}</h1>
            <p className="text-base font-normal">
                Lorem Ipsum
            </p>
        </div>
    )
}