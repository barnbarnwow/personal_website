import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
      <div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
