"use client";

import { useState } from "react";

type ContentType = "video" | "text" | "audio";

export default function CreatePage() {
  const [contentType, setContentType] = useState<ContentType>("video");

  const tabs = [
    { label: "Vidéo", value: "video" as ContentType },
    { label: "Texte", value: "text" as ContentType },
    { label: "Audio", value: "audio" as ContentType },
  ];

  const visibilityOptions = ["Public", "Abonnés", "Privé"];

  return (
    <div className="min-h-screen bg-purple-brand flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 p-6 bg-black/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gold-brand mb-2">Créer</h1>
          <p className="text-orange-brand">Créez un nouveau contenu</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setContentType(tab.value)}
              className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                contentType === tab.value
                  ? "bg-purple-brand text-white border border-white/20"
                  : "bg-white/10 text-white border border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        {contentType === "video" && (
          <div className="flex items-center justify-center rounded-xl bg-gray-900 border border-white/20 h-64 text-center">
            <p className="text-white/70 px-4">Ajouter un fichier vidéo…</p>
          </div>
        )}
        {contentType === "audio" && (
          <div className="flex items-center justify-center rounded-xl bg-gray-900 border border-white/20 h-64 text-center">
            <p className="text-white/70 px-4">Ajouter un fichier audio…</p>
          </div>
        )}
        {contentType === "text" && (
          <textarea
            className="w-full h-64 p-4 rounded-xl bg-gray-900 border border-white/20 text-white resize-none"
            placeholder="Écrivez votre texte…"
          />
        )}

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white mb-1">
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-3 rounded-xl bg-gray-900 border border-white/20 text-white resize-none"
            placeholder="Décrivez votre contenu…"
          />
        </div>

        {/* Hashtag */}
        <div>
          <label htmlFor="hashtag" className="block text-sm font-medium text-white mb-1">
            Ajouter un hashtag
          </label>
          <input
            type="text"
            id="hashtag"
            className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-white/20 text-white"
            placeholder="#hashtag"
          />
        </div>

        {/* Visibility */}
        <div>
          <label htmlFor="visibility" className="block text-sm font-medium text-white mb-1">
            Qui peut voir ?
          </label>
          <select
            id="visibility"
            className="w-full px-4 py-2 rounded-xl bg-gray-900 border border-white/20 text-white"
          >
            {visibilityOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Publish */}
        <button
          type="button"
          className="w-full bg-purple-brand text-white py-3 rounded font-medium hover:bg-orange-brand transition-colors"
        >
          Publier
        </button>
      </div>
    </div>
  );
}
