"use client";

import { useSearchParams } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  SignUp,
} from "@clerk/nextjs";

import styles from "@/styles/auth.module.scss";

const Auth = () => {
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get("mode") === "sign-up";

  return (
    <div className={styles.main}>
      <div className={styles.auth}>
        <SignedOut>
          {isSignUp ? (
            <SignUp routing="hash" signInUrl="/auth?mode=sign-in" />
          ) : (
            <SignIn routing="hash" signUpUrl="/auth?mode=sign-up" />
          )}
        </SignedOut>

        <SignedIn>
          <SignOutButton />
          <h2>Welcome bro</h2>
        </SignedIn>
      </div>

      <div className={styles.features}>
        <div>
          <h2>Open-Source DNS Management</h2>
          <p>
            Get started with free subdomains under veeu.io . Manage DNS records
            with a clean, intuitive interface.
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
  );
};

export default Auth;
