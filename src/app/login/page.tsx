import React from "react";

const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M12 21v-6h-6.586l-1.666-3.5A10 10 0 1 1 15 5 10 10 0 0 1 4 19.5 10 10 0 0 1 4 5z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M22 4.5C22 3.5 20.5 3 18 3 17 3.5 17 4.5c0 .5.5 1 1 1 1.5 1 1.5 1.5 1.5 3 3h-3v2h3v-2zm-3 11.5c-1.1 0-1.4-.5-1.4-1.5 0-1.1.5-2.1 1.4-2.1z" />
  </svg>
);

const XIcon = () => (
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

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-purple-brand flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 p-6 bg-black/80 backdrop-blur rounded-2xl border border-white/10 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gold-brand mb-2">PALABA</h1>
          <p className="text-orange-brand mb-4">Connectez-vous</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
            className="w-full bg-orange-brand text-white py-2 rounded font-medium hover:bg-gold-brand transition-colors"
          >
            Se connecter
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

        {/* Toggle link to register */}
        <div className="mt-6 text-center">
          <a
            href="/register"
            className="text-sm font-medium text-orange-brand hover:text-gold-brand underline underline-offset-2"
          >
            Nouveau compte ? S'inscrire
          </a>
        </div>
      </div>
    </div>
  );
}