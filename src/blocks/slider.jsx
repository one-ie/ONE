/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6uAEwSsjsRT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"

export default function Component() {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        <CarouselItem>
          <div className="p-2">
            <Card>
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800">
                    <img
                      alt="User avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">Alice Smith</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-600" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-600" />
                </div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  "Great service! The staff was very friendly and helpful. I will definitely be coming back again."
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-2">
            <Card>
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800">
                    <img
                      alt="User avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">Bob Johnson</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-600" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-600" />
                </div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  "The product quality is amazing. I love my purchase!"
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-2">
            <Card>
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800">
                    <img
                      alt="User avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-semibold">Eve Williams</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-600" />
                  <StarIcon className="w-4 h-4 fill-muted stroke-muted-600" />
                </div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  "Fast shipping and the package was securely wrapped. Everything arrived in perfect condition."
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
