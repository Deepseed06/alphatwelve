import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X } from "lucide-react"

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

const EventCard = ({setShowModal}) => {
  return (
    <Dialog open={setShowModal}  >
      <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <div className="flex justify-between">
        <DialogTitle>Event Name</DialogTitle>
        <X onClick={() => setShowModal(false)} className="dark:text-black bg-white shadow-lg z-10 w-6 h-6 rounded-full"/>
        </div>
        <div className="text-left">
        <DialogDescription>Event Date</DialogDescription>
        <DialogDescription>Event Description</DialogDescription>
        </div>
      </DialogHeader>
      
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
          <Button onClick={() => setShowModal(false)} className="bg-white text-black  hover:shadow-lg hover:bg-white ">Edit</Button>
          <Button className="bg-[#F43F5E] hover:shadow-lg hover:bg-[#F43F5E]">Delete</Button>
          <Button className="bg-[#8576FF] hover:shadow-lg hover:bg-[#8575FF]">Mark as Completed</Button>
        </div>
        
      </DialogContent>
    </Dialog>
  )
}

export default EventCard;