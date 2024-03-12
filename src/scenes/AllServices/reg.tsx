
const Reg = () => {
    return (
        <section className="gap-16 bg-gray-20 pt-12 w-full md:pb-12">
            <div className="py-10 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold">Title</h2>
                <div className="pt-8 text-left border-t border-gray-200  md:gap-16 dark:border-gray-700">
                    <p className="text-xl ">
                        To Renew a vehicle's registration you would need ONE of the following documents:
                        <ul className="list-disc ml-8">
                            <li>A valid driver's license or any other form of ID, OR</li>
                            <li>A Renewal notice </li>
                        </ul>
                    </p>

                    <p className="text-xl ">
                        A person can renew for someone else if:
                        <ul className="list-disc ml-8">
                            <li>The person has the renewal notice, OR</li>
                            <li>The person who is renewing has the same lastname and address as the owner of the vehicle, OR </li>
                            <li>The person has a power of attorney over the owner</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Reg
