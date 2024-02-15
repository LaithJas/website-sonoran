
type Props = {
    question: string;
    answer: string;
}

const Item = ({ question, answer }: Props) => {
    return (
        <div className="mb-10">
            <h3 className="flex items-center mb-4 text-lg font-medium">
                {question}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
    )
}

export default Item;
