import Lottie from "lottie-react";
import Lead from '../assets/AnimationLead.json'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Medal } from 'lucide-react';

const Leaderboard = () => {
  
  const leaderboardData = [
    { id: 1, name: "Alice Johnson", points: 1250, image: "/alice.jpg" },
    { id: 2, name: "Bob Smith", points: 1100, image: "/bob.jpg" },
    { id: 3, name: "Charlie Brown", points: 950, image: "/charlie.jpg" },
    { id: 4, name: "Diana Ross", points: 900, image: "/diana.jpg" },
    { id: 5, name: "Edward Norton", points: 850, image: "/edward.jpg" },
    { id: 6, name: "Fiona Apple", points: 800, image: "/fiona.jpg" },
    { id: 7, name: "George Clooney", points: 750, image: "/george.jpg" },
    { id: 8, name: "Helen Mirren", points: 700, image: "/helen.jpg" },
    { id: 9, name: "Ian McKellen", points: 650, image: "/ian.jpg" },
    { id: 10, name: "Julia Roberts", points: 600, image: "/julia.jpg" },
  ];

  const getMedalColor = (rank) => {
    switch(rank) {
      case 1: return "text-yellow-500";
      case 2: return "text-gray-400";
      case 3: return "text-amber-600";
      default: return "text-gray-300";
    }
  };

  return (
    <div className="container flex flex-row p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className='font-bold'>
                <div className="flex items-center">
                  {index < 3 ? (
                    <Medal className={`mr-2 ${getMedalColor(index + 1)}`} />
                  ) : null}
                  {index + 1}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center font-bold">
                  <Avatar className="mr-2">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {user.name}
                </div>
              </TableCell>
              <TableCell className="text-right font-bold">{user.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Lottie animationData={Lead}/>
    </div>
  );
};

export default Leaderboard;