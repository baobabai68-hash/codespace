import React from "react";

const HeartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M12 21s-6.716-4.297-9.192-7.61C.6 10.413 1.76 6.5 5.25 6.5c2.05 0 3.45 1.17 4.25 2.5.8-1.33 2.2-2.5 4.25-2.5 3.49 0 4.65 3.91 2.442 6.89C18.716 16.703 12 21 12 21z" />
  </svg>
);

const CommentIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
  </svg>
);

const ShareIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
    <path d="M12 3v13" />
    <path d="m7 8 5-5 5 5" />
  </svg>
);

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M12 21v-6h-6.586l-1.666-3.5A10 10 0 1 1 15 5 10 10 0 0 1 4 19.5 10 10 0 0 1 4 5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M22 4.5C22 3.5 20.5 3 18 3 17 3.5 17 4.5c0 .5.5 1 1 1 1.5 1 1.5 1.5 1.5 3 3h-3v2h3v-2zm-3 11.5c-1.1 0-1.4-.5-1.4-1.5 0-1.1.5-2.1 1.4-2.1z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="M18 6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6z" />
      <polyline points="13 2 8 14 13 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-purple-brand flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 p-6 bg-black/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gold-brand mb-2">PALABA</h1>
          <p className="text-orange-brand mb-4">Créez votre compte</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="full-name" className="block text-sm font-medium text-white mb-1">
              Nom complet
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-gold-brand text-white"
            />
          </div>

          <div>
            <label htmlFor="phone-or-email" className="block text-sm font-medium text-white mb-1">
              Téléphone ou Email
            </label>
            <input
              type="text"
              id="phone-or-email"
              name="phoneOrEmail"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-gold-brand text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-white/20 rounded focus:outline-none focus:ring-2 focus:ring-gold-brand text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-brand text-white py-2 rounded font-medium hover:bg-orange-brand transition-colors"
          >
            S'inscrire
          </button>
        </form>

        {/* Social login buttons */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded border border-white/20 text-orange-brand font-medium hover:bg-orange-brand transition-colors"
            aria-label="Connexion Google"
          >
            <GoogleIcon /> Google
          </button>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded border border-white/20 text-orange-brand font-medium hover:bg-orange-brand transition-colors"
            aria-label="Connexion Facebook"
          >
            <FacebookIcon /> Facebook
          </button>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded border border-white/20 text-orange-brand font-medium hover:bg-orange-brand transition-colors"
            aria-label="Connexion X"
          >
            <XIcon /> X (Twitter)
          </button>
        </div>

        {/* Toggle link to login */}
        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm font-medium text-orange-brand hover:text-gold-brand underline underline-offset-2"
          >
            Déjà un compte ? Se connecter
          </a>
        </div>
      </div>
    </div>
  );
}