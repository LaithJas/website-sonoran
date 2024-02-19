import Item from "./Item";
const FAQ: React.FC = () => {
    return (
        <section className="gap-16 bg-gray-20 pt-10 w-full md:pb-12">
            <div className="py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold">Frequently asked questions</h2>
                <div className="grid pt-8 text-left border-t border-gray-200  md:gap-16 dark:border-gray-700 md:grid-cols-2">
                    <div>
                        <Item
                            question="What Documents do I need to do Title Transfer?"
                            answer="You will need a signed (and notatized if requried by your state) Title and your ID. Or a Notarized Title Transfer Bill Of Sale with all correct infomation of it."
                        />
                        <Item question=" What does 'lifetime access' exactly mean?" answer="Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge." />

                    </div>
                    <div>
                        <Item
                            question="What Documents do I need to do Title Transfer?"
                            answer="You will need a signed (and notatized if requried by your state) Title and your ID. Or a Notarized Title Transfer Bill Of Sale with all correct infomation of it."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;
