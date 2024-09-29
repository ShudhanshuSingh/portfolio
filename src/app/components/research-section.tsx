import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const researchWorks = [
  {
    id: 1,
    title: 'Research Paper 1',
    description: 'A brief description of Research Paper 1',
    link: '#',
  },
  {
    id: 2,
    title: 'Conference Presentation',
    description: 'A brief description of the Conference Presentation',
    link: '#',
  },
  // Add more research works as needed
]

export function ResearchSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research Work</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {researchWorks.map((work) => (
            <Card key={work.id}>
              <CardHeader>
                <CardTitle>{work.title}</CardTitle>
                <CardDescription>{work.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={work.link}>View Full Paper</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}