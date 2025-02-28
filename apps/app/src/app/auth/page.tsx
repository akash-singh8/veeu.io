"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  useClerk,
  useUser,
} from "@clerk/nextjs";

import styles from "@/styles/auth.module.scss";

const Auth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get("mode") === "sign-up";

  const clerk = useClerk();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const registerUser = async () => {
      try {
        const response = await fetch("/api/register-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.primaryEmailAddress?.emailAddress,
          }),
        });

        if (!response.ok) {
          toast.error("Registration failed! Please try again later.");
          await clerk.signOut();
        } else {
          router.push("/");
        }
      } catch (error) {
        toast.error("Unable to register new user! Please try again later.");
        await clerk.signOut();
      }
    };

    registerUser();
  }, [clerk, user, isLoaded]);

  return (
    <div className={styles.main}>
      <div className={styles.auth}>
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

        <SignedIn>
          <h2>Registering...</h2>
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
