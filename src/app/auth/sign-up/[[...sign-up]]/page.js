import { SignUp } from "@clerk/nextjs";

export default function LogUp () {
    return (
        <div className="flex h-screen items-center justify-center">
            <SignUp/>
        </div>
    )
}