import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const datasets = [
  {
    id: 1,
    name: "A-Z Medicine Dataset of India",
    description:
      "Comprehensive dataset of medicines from major pharmaceutical companies, detailing composition, types, market availability, pricing, and more. Includes data from Sun Pharmaceutical, Torrent Pharma, Glenmark Pharma, and Emcure Pharmaceuticals.",
    publishedOn: "Kaggle",
    link: "https://www.kaggle.com/datasets/shudhanshusingh/az-medicine-dataset-of-india",
  },
  {
    id: 2,
    name: "250k Medicines Usage, Side Effects and Substitutes",
    description:
      "Dataset containing detailed information on over 248,000 drugs from global manufacturers, including names, active ingredients, therapeutic uses, dosages, side effects, and substitutes. A valuable resource for medical researchers, healthcare professionals, and pharmaceutical companies.",
    publishedOn: "Kaggle",
    link: "https://www.kaggle.com/datasets/shudhanshusingh/250k-medicines-usage-side-effects-and-substitutes",
  },
  {
    id: 3,
    name: "Real Estate Properties Dataset",
    description:
      "Explore Mumbai's dynamic real estate market with a comprehensive dataset of over 12,685 entries, covering residential and commercial properties. Ideal for property enthusiasts, analysts, and investors, this dataset provides valuable insights into Mumbai's real estate landscape for informed decision-making.",
    publishedOn: "Kaggle",
    link: "https://www.kaggle.com/datasets/shudhanshusingh/real-estate-properties-dataset",
  },
];

export function DatasetsSection() {
  return (
    <section id="datasets" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Datasets Published
        </h2>
        <Table className="mt-10">
          <TableCaption>
            A list of datasets published by Shudhanshu Singh
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Published On</TableHead>
              <TableHead>Link</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {datasets.map((dataset) => (
              <TableRow key={dataset.id}>
                <TableCell>{dataset.name}</TableCell>
                <TableCell>{dataset.description}</TableCell>
                <TableCell>{dataset.publishedOn}</TableCell>
                <TableCell>
                  <Button asChild variant="link">
                    <Link href={dataset.link}>Access Dataset</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
