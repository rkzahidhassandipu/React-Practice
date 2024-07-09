// @ts-nocheck
import React, { useState } from 'react'

import style from "./faqs.module.css"
import { faqsData } from './Data';
import Faq from './Faq';
const FAQS = () => {
    const [faqs, setFaqs] = useState(faqsData);
  return (
    <main className={style.container}>
        <section className={style.faqs}>
            <h1>FAQS</h1>
            {faqs.map(faq => <Faq key={faq.id} {... faq}/>)}
        </section>
    </main>
  )
}

export default FAQS