"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SignedOut, SignIn, SignUp } from "@clerk/nextjs";

import styles from "@/styles/auth.module.scss";

const Auth = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.main}>
        <div className={styles.auth}>
          <AuthHandler />
        </div>

        <div className={styles.features}>
          <div>
            <h2>Open-Source DNS Management</h2>
            <p>
              Get started with free subdomains under veeu.io . Manage DNS
              records with a clean, intuitive interface.
            </p>

            <div>
              <p>✓ Free subdomains under veeu.io</p>
              <p>✓ Full DNS record management</p>
              <p>✓ Modern, user-friendly interface</p>
              <p>✓ Real-time Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

const AuthHandler = () => {
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get("mode") === "sign-up";

  return (
    <SignedOut>
      {isSignUp ? (
        <SignUp
          routing="hash"
          signInUrl="/auth?mode=sign-in"
          forceRedirectUrl="/auth?mode=sign-up"
        />
      ) : (
        <SignIn
          routing="hash"
          signUpUrl="/auth?mode=sign-up"
          forceRedirectUrl="/auth?mode=sign-in"
        />
      )}
    </SignedOut>
  );
};

export default Auth;
