import {BrowserRouter,Routes,Route,Link,useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {LanguageProvider, useLanguage} from './i18n';
import Demo from './demos/FlowboardDemo';
import './index.css';
import './demos/demos.css';

function CaseStudyRedirect(){
 const {id}=useParams();const {t}=useLanguage();
 const portfolioUrl=import.meta.env.VITE_PORTFOLIO_URL?.replace(/\/$/,'');
 useEffect(()=>{if(portfolioUrl) window.location.replace(`${portfolioUrl}/projectDetails/${id}`)},[portfolioUrl,id]);
 if(portfolioUrl) return <main className="standalone-return"><p>Opening the portfolio…</p></main>;
 return <main className="standalone-return"><h1>{t('Case study')}</h1><p>{t('Set VITE_PORTFOLIO_URL to connect this demo to your portfolio case study.')}</p><Link to="/">{t('Back to demo')}</Link></main>;
}
export default function App(){return <LanguageProvider><BrowserRouter><Routes><Route path="/" element={<Demo/>}/><Route path="/projectDetails/:id" element={<CaseStudyRedirect/>}/><Route path="*" element={<Demo/>}/></Routes></BrowserRouter></LanguageProvider>}
