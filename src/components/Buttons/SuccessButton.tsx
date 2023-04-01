export const SuccessButton: React.FC<{ text: string }> = ({ text }) => {
    return (
        <button className="text-sm text-white font-medium  border border-orange-600 bg-red-500 w-40 h-10 rounded shadow-sm cursor-pointer hover:bg-red-600">
            {text}
        </button>
    )
};