import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CancelIcon from "../../public/icons/cancel.png"
import { Button } from "./ui/button"
import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  avatar: string
}

const teamMembers: TeamMember[] = [
  { name: "Alice Johnson", role: "Designer", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Bob Smith", role: "Developer", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Charlie Brown", role: "Manager", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Diana Ross", role: "Marketing", avatar: "/placeholder.svg?height=32&width=32" },
  { name: "Ethan Hunt", role: "Sales", avatar: "/placeholder.svg?height=32&width=32" },
]

const EventCard = () => {
  return (
    <Card className="w-[320px] absolute top-auto z-10  px-4 py-8 border shadow-slate-600 max-w-md mx-auto">
      <CardHeader>
        <div className="flex justify-between">
        <CardTitle>Event Name</CardTitle>
        <Image src={CancelIcon}   alt="cancel" width={30} height={20} className="cursor-pointer"/>
        </div>
        <CardDescription>Event Date</CardDescription>
        <CardDescription>Event Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex -space-x-2 overflow-hidden">
            {teamMembers.map((member, index) => (
              <Avatar key={index} className="inline-block ring-2 ring-background">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div>
          3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C.
          300 Attendees
          </div>
          <Button className="bg-white text-black border hover:shadow-lg hover:bg-white ">Edit</Button>
          <Button className="bg-[#F43F5E] hover:shadow-lg hover:bg-[#F43F5E]">Delete</Button>
          <Button className="bg-[#8576FF] hover:shadow-lg hover:bg-[#8575FF]">Mark as Completed</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default EventCard;