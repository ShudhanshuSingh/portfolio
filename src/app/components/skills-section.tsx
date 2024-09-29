import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const skills = [
  { name: "Angular", icon: "🟨", url: "/angular.png" },
  { name: "Python", icon: "🐍", url: "/python.svg" },
  { name: "JavaScript", icon: "🟨", url: "/js.svg" },
  { name: "React", icon: "⚛️", url: "/react.png" },
  { name: "Node.js", icon: "🟩", url: "/node.svg" },
  { name: "Docker", icon: "🐳", url: "/Docker.png" },
  { name: "AWS", icon: "☁️", url: "/aws.png" },
  { name: "MongoDB", icon: "🍃", url: "/mongo.png" },
  { name: "Firebase", icon: "🔷", url: "/firebase.png" },
  { name: "Express", icon: "🔷", url: "/express.png" },
  { name: "MySql", icon: "🔷", url: "/mysql.svg" },
  { name: "Git", icon: "🔷", url: "/git.png" },
  { name: "RxJS", icon: "🔷", url: "/rxjs.png" },
  { name: "Socket", icon: "🔷", url: "/socket.png" },
  { name: "Redis", icon: "🔷", url: "/redis.svg" },
  { name: "Postgre", icon: "🔷", url: "/postgre.png" },
  { name: "TypeScript", icon: "🔷", url: "/typescript.png" },
  { name: "BullMq", icon: "🔷", url: "/bullmq.avif" },
  { name: "C", icon: "🔷", url: "/c.png" },
  { name: "C++", icon: "🔷", url: "/c++.jpg" },
  // Add more skills as needed
];

export function SkillsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills
        </h2>
        <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="text-lg py-2 px-4 bg-gray-800 hover:bg-gray-600 hover:cursor-pointer"
            >
              <Image
                src={skill.url ?? ""}
                height={100}
                width={100}
                alt="Angular"
              />{" "}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
