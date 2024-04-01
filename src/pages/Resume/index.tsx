import { useTranslation } from "react-i18next";

export default function Resume() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col bg-white pt-10 pb-5 px-8 rounded-lg w-full">
            <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold">{t('resume')}</h1>
                <div className="w-40 h-1 bg-primary-blue rounded-md"></div>
            </div>
            <p className="text-base font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    )
}