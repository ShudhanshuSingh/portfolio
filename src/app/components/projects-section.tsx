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
    title: "Hedged.in",
    description:
      "Hedged.in is a trading platform enabling users to participate in expert-recommended trades. With over 110,000 active users and 50,000+ orders processed through stock brokers via APIs I developed, the platform offers seamless order lifecycle management. It also delivers relevant market news tailored to user preferences based on trade recommendations, providing a comprehensive trading experience.",
    image: "/hedged.png",
    demoLink: "https://hedged.in/",
    sourceLink: "#",
  },
  {
    id: 5,
    title: "Medister",
    description:
      "Medister is a platform developed for a client who supplies medical equipment to hospitals. It includes features for equipment warranty management, engineer service coordination across India, and job assignments for service engineers, streamlining the client’s operations and support services.",
    image: "/medister.png",
    demoLink: "http://patilartinstitute.com/",
    sourceLink: "#",
  },
  {
    id: 4,
    title: "Patil Art Institute",
    description:
      "I developed the website for Patil Art Institute, designed to promote its courses while prioritizing SEO and improving page rankings. The result was a clean, user-friendly site that successfully ranked in the top 1-3 Google search results, boosting visibility and course enrollment for the client.",
    image: "/patil.png",
    demoLink: "http://patilartinstitute.com/",
    sourceLink: "#",
  },
  {
    id: 2,
    title: "TCET Open Source",
    description:
      " I contributed to the development of the TCET Linux website, designed to inform students about a student-built operating system. The website offers detailed resources and guides on how students can explore and use the OS, showcasing the collaborative project and helping users with installation and features.",
    image: "/linux.jpg",
    demoLink: "#",
    sourceLink: "https://github.com/tcet-opensource/tcet-linux-website",
  },
  {
    id: 3,
    title: "TCET T&P Website",
    description:
      "I contributed to the frontend development of the Training and Placement (T&P) website for TCET, implementing the design into a responsive, user-friendly interface. This platform serves as a key resource for students and recruiters, streamlining the training and placement process with an intuitive and visually appealing layout.",
    image: "/tcet.jpg",
    demoLink: "#",
    sourceLink: "https://github.com/tcet-opensource/tnp-website",
  },
  // Add more projects as needed
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col justify-between">
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
