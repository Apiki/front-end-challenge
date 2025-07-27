'use client';

interface LoadMoreButtonProps {
    onClick: () => void;
    disabled: boolean;
}

export default function LoadMoreButton({ onClick, disabled }: LoadMoreButtonProps) {
    return (
        <button className="load-more bg-black text-white font-bold p-4 rounded-2xl hover:cursor-pointer hover:bg-gray-800" onClick={onClick} disabled={disabled}>
            Carregar mais...
        </button>
    );
}