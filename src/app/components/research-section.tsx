import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Alert, AlertTitle } from "../../components/ui/alert";

const researchWorks = [
  {
    id: 1,
    title:
      "Automated Prescription Generation using Smart Extraction with the help of NLP",
    description:
      "Explored the integration of natural language processing (NLP) and machine learning to develop a system for generating digital prescriptions by capturing doctor-patient conversations through speech recognition, with editable prescriptions stored in a central database. This work earned the 3rd Best Paper Award at the 2022 e-conference on IoT in Social Industry, Analytics, and Communication and is currently under review as a book chapter in Apple Academic Press (Taylor & Francis Journal).",
    link: "https://appleacademicpress.com/",
    presentation: "/iotsiac.pdf",
  },
  {
    id: 2,
    title: "Weather Prediction using Regression Models",
    description:
      "Oversaw the data lifecycle, enhancing accuracy in data cleaning and feature extraction to improve data quality, and boosted weather forecasting accuracy by 15% through optimization of regression algorithms. This work won the 1st Best Paper Award at the 2021 e-conference on IoT in Social Industry, Analytics, and Communication, and is currently under review in Mausam Journal, Indian Meteorological Department (ISSN:0252-9416).",
    link: "https://www.scopus.com/sourceid/13430",
    presentation:
      "https://drive.google.com/file/d/1Jd3tO7odS8lxNcqOrYG2YrZoqxsGx_nF/view",
  },
  // Add more research works as needed
];

export function ResearchSection() {
  return (
    <section id="research" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Research Work
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {researchWorks.map((work) => (
            <Card key={work.id}>
              <CardHeader>
                <CardTitle>{work.title}</CardTitle>
                <CardDescription className="h-60 pt-2">
                  {work.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between flex-col">
                <Alert variant="destructive" className="mt-2">
                  <ExclamationTriangleIcon className="h-4 w-4" />
                  <AlertTitle>
                    Accepted and Under Review for Publishing
                  </AlertTitle>
                </Alert>
                <div className="w-full flex justify-between mt-2">
                  <Button asChild>
                    <Link href={work.link}>Publication</Link>
                  </Button>
                  <Button asChild>
                    <Link href={work.presentation}>Presentation Result</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
