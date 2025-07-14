import React from "react"

import { Heart } from "lucide-react"
import { 
    Card, 
    CardAction, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"

interface CardCourseProps {
  title: string
  price: string
  image: string
  description: string
  onLike?: () => void
  onViewDetail?: () => void
  isLiked?: boolean
}

export const CardCourse: React.FC<CardCourseProps> = ({
  title,
  price,
  image,
  description,
  onLike,
  onViewDetail,
  isLiked = false
}) => {
  return (
    <Card className="max-w-sm overflow-hidden">
      <div className="w-full h-48 relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      <CardHeader className="border-b">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <CardAction>
          <button
            onClick={onLike}
            className="p-2 rounded-full hover:bg-muted"
            aria-label="Like this course"
          >
            <Heart
              className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
            />
          </button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className="text-base font-semibold text-primary">Giá: {price}</p>
      </CardContent>

      <CardFooter className="border-t">
        <Button className="w-full" onClick={onViewDetail}>
          Xem chi tiết
        </Button>
      </CardFooter>
    </Card>
  )
}
