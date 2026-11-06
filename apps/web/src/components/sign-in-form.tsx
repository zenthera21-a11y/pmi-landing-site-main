import { useState } from "react";

export default function SignInForm({ onSwitchToSignUp }: { onSwitchToSignUp: () => void }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="mt-2 text-gray-600">Authentication coming soon.</p>
        <button onClick={onSwitchToSignUp} className="mt-4 text-purple-600 underline">
          Create an account
        </button>
      </div>
    </div>
  );
}
