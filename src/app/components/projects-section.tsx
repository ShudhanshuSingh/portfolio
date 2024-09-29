import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "hedged.in",
    description: "A brief description of Project 1",
    image: "/hedged.png",
    demoLink: "https://hedged.in/",
    sourceLink: "#",
  },
  {
    id: 2,
    title: "TCET Open Source",
    description: "A brief description of Project 1",
    image: "/linux.jpg",
    demoLink: "#",
    sourceLink: "https://github.com/tcet-opensource/tcet-linux-website",
  },
  {
    id: 3,
    title: "TCET T&P Website",
    description: "A brief description of Project 2",
    image: "/tcet.jpg",
    demoLink: "#",
    sourceLink: "https://github.com/tcet-opensource/tnp-website",
  },
  {
    id: 4,
    title: "Patil Art Institute",
    description: "A brief description of Project 2",
    image: "/patil.png",
    demoLink: "http://patilartinstitute.com/",
    sourceLink: "#",
  },
  // Add more projects as needed
];

export function ProjectsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.demoLink === "#" ? (
                  <span></span>
                ) : (
                  <Button asChild>
                    <Link href={project.demoLink}>View Demo</Link>
                  </Button>
                )}

                {project.sourceLink === "#" ? (
                  <span></span>
                ) : (
                  <Button variant="outline" asChild>
                    <Link href={project.sourceLink}>Source Code</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
