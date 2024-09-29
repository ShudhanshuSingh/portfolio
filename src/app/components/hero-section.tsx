import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Shudhanshu Singh
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Full Stack Developer | Data Enthusiast | Innovator
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex justify-center space-x-4">
              <Link href={"https://linkedin.com/in/shudhanshusingh"} target="_">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />

                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Link href={"shudhanshusingh051@gmail.com"}>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src={"/profile.jpg"}
            alt="Shudhanshu Singh"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
