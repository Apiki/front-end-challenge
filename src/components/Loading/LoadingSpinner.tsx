import React from 'react';

export default function LoadingSpinner({ size = 40 }: { size?: number }) {
    return (
        <div className="flex items-center justify-center w-full py-10">
            <svg
                className="animate-spin text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width={size}
                height={size}
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
            </svg>
        </div>
    );
}
