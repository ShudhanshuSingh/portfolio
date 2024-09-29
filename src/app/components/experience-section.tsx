import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    company: "Blackcurrant Labs",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHx5PCHSgEMfA/company-logo_200_200/company-logo_200_200/0/1630641449324/blackcurrant_apps_llc_logo?e=2147483647&v=beta&t=QKDiB-8xsTkQDDjsLQYkR0e0sKZvgkdkmlZQ4xevscs",
    title: "Full Stack Developer",
    description:
      "Led a team of developers in creating innovative web applications.",
    startDate: "June 2023",
    endDate: "Present",
  },
  {
    id: 2,
    company: "TCET Open Source",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGiWnzQtYeeeg/company-logo_200_200/company-logo_200_200/0/1682018341947?e=2147483647&v=beta&t=3lxHGL-hzYJDhIS_6xCVpz-OyigCzE26_UlzQ4Ref-g",
    title: "Frontend Developer",
    description:
      "Developed and maintained multiple client projects using modern web technologies.",
    startDate: "Jun 2018",
    endDate: "Dec 2019",
  },
  // Add more experiences as needed
];

export function ExperienceSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
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
                <p>{experience.description}</p>
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
