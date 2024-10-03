import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TriangleRightIcon } from "@radix-ui/react-icons";

const experiences = [
  {
    id: 1,
    company: "Blackcurrant Labs",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHx5PCHSgEMfA/company-logo_200_200/company-logo_200_200/0/1630641449324/blackcurrant_apps_llc_logo?e=2147483647&v=beta&t=QKDiB-8xsTkQDDjsLQYkR0e0sKZvgkdkmlZQ4xevscs",
    title: "Full Stack Developer",
    description: [
      `Developing a highly efficient automated trading system for buying and selling stocks and options in India, integrated   with multiple brokers to enable seamless transactions with just a few clicks.`,

      `Architected and implemented the Admin interface for the trading platform, enabling real-time trade recommendations for users via WebSockets, ensuring low-latency communication and up-to-date market values.`,

      `Contributed to the development of Turfezy, a comprehensive turf management system used by venues across Mumbai, streamlining the management of multiple turfs, booking schedules, and event coordination.`,
    ],
    startDate: "June 2023",
    endDate: "Present",
  },
  {
    id: 2,
    company: "TCET Open Source",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGiWnzQtYeeeg/company-logo_200_200/company-logo_200_200/0/1682018341947?e=2147483647&v=beta&t=3lxHGL-hzYJDhIS_6xCVpz-OyigCzE26_UlzQ4Ref-g",
    title: "Frontend Developer",
    description: [
      "Developed and maintained multiple college-level projects using modern web technologies.",
      "TCET Linux: Collaborated on the development of a website to promote the in-house operating system built by students, providing resources and guides for the student community.",
      "TCET T&P Website: Designed and developed the official Training & Placement website, showcasing placement statistics, opportunities, and various T&P activities, streamlining information access for students and recruiters.",
    ],
    startDate: "Jun 2018",
    endDate: "Dec 2019",
  },
  // Add more experiences as needed
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Work Experience
        </h2>
        <div className="mt-10 space-y-8">
          {experiences.map((experience) => (
            <Card key={experience.id}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.company}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-justify">
                  <ul>
                    {experience.description.map((description, index) => (
                      <li
                        key={index}
                        className="flex justify-start items-start mb-2"
                      >
                        <div className="mt-1 mx-2">
                          <TriangleRightIcon />
                        </div>
                        <div>
                          <span>{description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {experience.startDate} - {experience.endDate}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
