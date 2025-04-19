import { ExternalLink, Globe } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NewsItem {
  title: string
  company: string
  url: string
  description?: string
  date?: string
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs font-medium">
            <Globe className="mr-1 h-3 w-3" />
            {item.company}
          </Badge>
          {item.date && <span className="text-xs text-muted-foreground">{item.date}</span>}
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold leading-tight tracking-tight">{item.title}</h3>
        {item.description && <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.description}</p>}
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" size="sm" className="ml-auto" asChild>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            Read more
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
