import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col bg-white pt-10 pb-5 px-8 rounded-lg w-full">
            <div className="flex items-center gap-4 mb-4">
                <h1 className="text-3xl font-bold">{t('about')}</h1>
                <div className="w-40 h-1 bg-primary-blue rounded-md"></div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-base font-normal">
                    {t('about_info.p1')}
                </p>
                <p className="text-base font-normal">
                    {t('about_info.p2')}
                </p>
                <p className="text-base font-normal">
                    {t('about_info.p3')}
                </p>
                <p className="text-base font-normal">
                    {t('about_info.p4')}
                </p>
            </div>
        </div>
    )
}