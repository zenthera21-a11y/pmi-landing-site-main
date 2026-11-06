import { useState } from "react";

export default function SignUpForm({ onSwitchToSignIn }: { onSwitchToSignIn: () => void }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="mt-2 text-gray-600">Registration coming soon.</p>
        <button onClick={onSwitchToSignIn} className="mt-4 text-purple-600 underline">
          Sign in instead
        </button>
      </div>
    </div>
  );
}
