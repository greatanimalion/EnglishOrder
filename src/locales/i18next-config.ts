import cn from './zh-CN.json'
import en from './en-US.json'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
    'zh-CN': {
        translation: cn
    },
    'en-US': {
        translation: en
    },
};
i18n.use(LanguageDetector) //嗅探当前浏览器语言 zh-CN
    .use(initReactI18next) // 将 i18n 向下传递给 react-i18next
    .init({ //初始化
        resources, //本地多语言数据
        fallbackLng: "cn", //默认当前环境的语言
        detection: {
            caches: ['localStorage', 'sessionStorage', 'cookie'],
        }
    })

export default i18n