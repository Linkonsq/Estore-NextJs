"use server";

import { signInFormSchema } from "@/lib/validator";
import { signIn, signOut } from "@/auth";
// import { isRedirectError } from "next/dist/client/components/redirect-error";
// import { revalidatePath } from "next/cache";
// import { Prisma } from "@prisma/client";
// import { prisma } from "@/db/prisma";

// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);
    return { success: true, message: "Signed in successfully" };
  } catch (error) {
    console.log(error);
    // if (isRedirectError(error)) {
    //   throw error;
    // }
    return { success: false, message: "Invalid email or password" };
  }
}

// Sign user out
export async function signOutUser() {
  // get current users cart and delete it so it does not persist to next user
  // const currentCart = await getMyCart();

  // if (currentCart?.id) {
  //   await prisma.cart.delete({ where: { id: currentCart.id } });
  // } else {
  //   console.warn("No cart found for deletion.");
  // }
  await signOut();
}
